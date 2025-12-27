"use server";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: auth } = await supabase.auth.getUser();

    if (!auth?.user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    const etudiant = await prisma.eTUDIANT.findUnique({
      where: { user_id: auth.user.id },
      select: {
        Dette: true,
      },
    });

    if (!etudiant) {
      return NextResponse.json({ message: "Étudiant introuvable" }, { status: 404 });
    }

    return NextResponse.json(
      { dette: etudiant.Dette ?? 0 },
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
