"use server";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";

import { prisma } from "@/lib/db/db";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error("Erreur Supabase:", userError.message);
    }
    if (!user) {
      console.warn("⚠️ Aucun utilisateur connecté");
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    console.log("👤 Utilisateur connecté:", user.id);

    const etudiant = await prisma.eTUDIANT.findUnique({
      where: { user_id: user.id },
      include: { departement: true },
    });

    console.log("🎓 Étudiant trouvé:", etudiant);

    if (!etudiant) {
      return NextResponse.json({ error: "Étudiant introuvable" }, { status: 404 });
    }

    return NextResponse.json(etudiant);
  } catch (err) {
    console.error("💥 Erreur serveur détaillée:", err);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}


