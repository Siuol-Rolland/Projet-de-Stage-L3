"use server";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      );
    }

    const professeur = await prisma.pROFESSEURS.findUnique({
        where: { user_id: user.id },
        select: {
            ID_Prof: true,
            Nom_Prof: true,
            Email_Prof: true,
            departements: {
            select: {
                ID_Dep: true,
                Nom_Dep: true,
            },
            },
        },
    });


    if (!professeur) {
      return NextResponse.json(
        { error: "Professeur introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json(professeur);
  } catch (err) {
    console.error("Erreur serveur:", err);
    return NextResponse.json(
      { error: "Erreur interne" },
      { status: 500 }
    );
  }
}
