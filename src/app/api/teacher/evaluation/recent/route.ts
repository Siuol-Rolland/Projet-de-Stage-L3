"use server";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (!user || error) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const prof = await prisma.pROFESSEURS.findUnique({
      where: { user_id: user.id },
      select: { ID_Prof: true },
    });

    if (!prof) {
      return NextResponse.json({ error: "Professeur introuvable" }, { status: 404 });
    }

    /** 2 dernières évaluées */
    const evaluated = await prisma.rEALISATION.findMany({
      where: {
        id_Prof: prof.ID_Prof,
        Note: { not: null },
      },
      orderBy: { Date_Realise: "desc" },
      take: 2,
      include: {
        sousActe: { select: { Desc_SActes: true } },
      },
    });

    /** 2 réalisations NON ÉVALUÉES (TOUS PROFESSEURS) */
    const notEvaluated = await prisma.rEALISATION.findMany({
        where: {
            Note: null, // ✅ plus de filtre id_Prof
        },
        orderBy: { Date_Realise: "desc" }, // optionnel mais recommandé
        take: 2,
        include: {
            sousActe: { select: { Desc_SActes: true } },
        },
    })


    return NextResponse.json({
      evaluated,
      notEvaluated,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
