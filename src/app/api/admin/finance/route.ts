"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/db/db";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // 🔐 Vérifier admin
    const admin = await prisma.aDMINISTRATEUR.findUnique({
      where: { user_id: user.id },
      select: { ID_Admin: true },
    });

    if (!admin) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    // 💰 SOLDE ACTUEL (tout ce qui est payé)
    const soldeActuel = await prisma.pAIEMENT.aggregate({
      _sum: {
        Montant: true,
      },
      where: {
        Statut_Paie: {
          in: ["TOTAL", "PARTIEL"],
        },
      },
    });

    // 🔴 SOLDE ARRIÉRÉS (dettes restantes)
    const soldeArrieres = await prisma.pAIEMENT.aggregate({
      _sum: {
        Montant_Restant: true,
      },
      where: {
        Montant_Restant: {
          gt: 0,
        },
      },
    });

    return NextResponse.json({
      soldeActuel: soldeActuel._sum.Montant ?? 0,
      soldeArrieres: soldeArrieres._sum.Montant_Restant ?? 0,
    });

  } catch (err) {
    console.error("Erreur finance admin:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
