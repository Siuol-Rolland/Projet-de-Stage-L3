// /api/students/quotas/live/route.ts
"use server";

import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Unauthenticated", { status: 401 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: any) =>
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);

      // Charger les quotas au début
      const loadInitial = async () => {
        const etu = await prisma.eTUDIANT.findUnique({
          where: { user_id: user.id }
        });

        if (!etu) return send({ error: "Étudiant non trouvé" });

        const quotas = await prisma.qUOTAS.findMany({
          where: {
            id_Dep: etu.id_Dep,
            Annee: etu.Annee_Et
          },
          include: {
            sous_actes: true
          }
        });

        send({ quotas });
      };

      await loadInitial();

      // Prisma ne supporte pas encore les triggers natifs
      // mais on peut faire du polling léger
      let previousHash = "";

      setInterval(async () => {
        const etu = await prisma.eTUDIANT.findUnique({
          where: { user_id: user.id }
        });

        if (!etu) return;

        const quotas = await prisma.qUOTAS.findMany({
          where: {
            id_Dep: etu.id_Dep,
            Annee: etu.Annee_Et
          },
          include: {
            sous_actes: true
          }
        });

        const hash = JSON.stringify(quotas);

        if (hash !== previousHash) {
          previousHash = hash;
          send({ quotas });
        }
      }, 3000); // refresh toutes les 3s
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
