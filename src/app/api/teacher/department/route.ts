"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import { createClient } from "@/utils/supabase/server";

import { prisma } from "@/lib/db/db";

export async function GET() {
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
      include: { departements: true },
    });

    if (!professeur) {
      return NextResponse.json(
        { error: "Professeur non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(professeur.departements);
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
