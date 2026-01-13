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

    // Vérifier admin
    const admin = await prisma.aDMINISTRATEUR.findUnique({
      where: { user_id: user.id },
    });

    if (!admin) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    // ✅ Paiements VALIDÉS récents
    const valides = await prisma.hISTORIQUE_PAIEMENT.findMany({
    where: {
        Action: "VALIDATION",
    },
    orderBy: { Date_Action: "desc" },
    take: 2,
    include: {
        paiement: {
        include: {
            etudiant: {
            select: { FullName_Et: true },
            },
            realisations: {
            include: {
                sousActe: {
                select: { Desc_SActes: true },
                },
            },
            },
        },
        },
    },
    });

    // ❌ Paiements ANNULÉS récents
    const annules = await prisma.hISTORIQUE_PAIEMENT.findMany({
    where: {
        NouveauStatut: "ANNULE",
    },
    orderBy: { Date_Action: "desc" },
    take: 2,
    include: {
        paiement: {
        include: {
            etudiant: {
            select: { FullName_Et: true },
            },
            realisations: {
            include: {
                sousActe: {
                select: { Desc_SActes: true },
                },
            },
            },
        },
        },
    },
    });


    return NextResponse.json({ valides, annules });
  } catch (err) {
    console.error("Erreur historique paiement:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
