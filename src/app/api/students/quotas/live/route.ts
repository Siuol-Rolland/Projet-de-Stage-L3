"use server";

import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";

const getPrisma = () => new PrismaClient();

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Unauthenticated", { status: 401 });
  }

  let channelRealisation: ReturnType<typeof supabase.channel> | null = null;
  let channelQuotas: ReturnType<typeof supabase.channel> | null = null;

  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: any) =>
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);

      // Étudiant connecté
      const prisma0 = getPrisma();
      const etu = await prisma0.eTUDIANT.findUnique({
        where: { user_id: user.id }
      });
      await prisma0.$disconnect();

      if (!etu) return send({ error: "Étudiant non trouvé" });

      // Fonction pour recharger les quotas
      const loadQuotas = async () => {
        const prisma = getPrisma();
        const quotas = await prisma.qUOTAS.findMany({
          where: {
            id_Dep: etu.id_Dep,
            Annee: etu.Annee_Et
          },
          include: {
            sous_actes: true
          }
        });
        await prisma.$disconnect();

        send({ quotas });
      };

      // Charger au début
      await loadQuotas();

      // Realtime listeners
      channelRealisation = supabase
        .channel("realtime-realisation")
        .on("postgres_changes",
          { event: "*", schema: "public", table: "REALISATION" },
          async () => await loadQuotas()
        )
        .subscribe();

      channelQuotas = supabase
        .channel("realtime-quotas")
        .on("postgres_changes",
          { event: "*", schema: "public", table: "QUOTAS" },
          async () => await loadQuotas()
        )
        .subscribe();

      // Anti-timeout
      controller.enqueue(": ping\n\n");
      const interval = setInterval(() => {
        controller.enqueue(": ping\n\n");
      }, 20000);

      // Cleanup
      return () => {
        clearInterval(interval);
        if (channelRealisation) supabase.removeChannel(channelRealisation);
        if (channelQuotas) supabase.removeChannel(channelQuotas);
      };
    },

    async cancel() {
      if (channelRealisation) supabase.removeChannel(channelRealisation);
      if (channelQuotas) supabase.removeChannel(channelQuotas);
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    }
  });
}
