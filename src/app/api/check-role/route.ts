"use server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { user_id } = await req.json();

    // 🔹 Vérifie si c’est un admin
    const admin = await prisma.aDMINISTRATEUR.findUnique({
      where: { user_id },
    });
    if (admin) return NextResponse.json({ role: "admin" });

    // 🔹 Vérifie si c’est un prof
    const prof = await prisma.pROFESSEURS.findUnique({
      where: { user_id },
    });
    if (prof) return NextResponse.json({ role: "teacher" });

    // 🔹 Vérifie si c’est un étudiant
    const etudiant = await prisma.eTUDIANT.findUnique({
      where: { user_id },
    });
    if (etudiant) return NextResponse.json({ role: "student" });

    // Aucun rôle trouvé
    return NextResponse.json({ role: null });
  } catch (error) {
    console.error("Erreur check-role:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
