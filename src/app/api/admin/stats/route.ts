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
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // (optionnel) vérifier que c'est bien un admin
    const admin = await prisma.aDMINISTRATEUR.findUnique({
      where: { user_id: user.id },
    });

    if (!admin) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    // 📊 Comptages
    const [departements, professeurs, etudiants] = await Promise.all([
      prisma.dEPARTEMENT.count(),
      prisma.pROFESSEURS.count(),
      prisma.eTUDIANT.count(),
    ]);

    return NextResponse.json({
      departements,
      professeurs,
      etudiants,
    });
  } catch (err) {
    console.error("Erreur stats admin:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
