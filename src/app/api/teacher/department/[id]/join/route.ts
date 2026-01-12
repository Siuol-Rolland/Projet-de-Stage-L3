"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/db/db";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  try {
    const professeur = await prisma.pROFESSEURS.findUnique({
      where: { user_id: user.id },
    });

    if (!professeur) {
      return NextResponse.json(
        { error: "Professeur non trouvé" },
        { status: 404 }
      );
    }

    // 🔗 Liaison Professeur ↔ Département
    await prisma.dEPARTEMENT.update({
      where: { ID_Dep: Number(params.id) },
      data: {
        professeurs: {
          connect: { ID_Prof: professeur.ID_Prof },
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la liaison" },
      { status: 500 }
    );
  }
}
