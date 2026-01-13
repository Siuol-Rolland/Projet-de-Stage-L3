"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/db/db";

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      );
    }

    // 🔑 Chercher l'admin lié à ce user
    const admin = await prisma.aDMINISTRATEUR.findUnique({
      where: {
        user_id: user.id,
      },
      select: {
        ID_Admin: true,
        Nom_Admin: true,
        Email_Admin: true,
      },
    });

    if (!admin) {
      return NextResponse.json(
        { error: "Administrateur introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json(admin);
  } catch (err) {
    console.error("Erreur admin/me:", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
