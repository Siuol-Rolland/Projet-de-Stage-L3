"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";

import { prisma } from "@/lib/db/db";

// ✅ Récupérer les sous-actes selon l'acte sélectionné
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id_Actes = searchParams.get("id_Actes");

  if (!id_Actes) {
    return NextResponse.json({ error: "ID de l'acte manquant" }, { status: 400 });
  }

  try {
    const sousActes = await prisma.sOUS_ACTES.findMany({
      where: { id_Actes: Number(id_Actes) },
      orderBy: { ID_SActes: "asc" },
    });
    return NextResponse.json(sousActes);
  } catch (error) {
    console.error("Erreur GET sous-actes :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
