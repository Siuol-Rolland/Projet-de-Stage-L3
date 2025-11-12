"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id_Dep, Desc_Actes, sous_actes } = body;

    // ✅ Crée un acte
    const acte = await prisma.aCTES.create({
  data: {
    Desc_Actes,
    id_Dep,
    sous_actes: {
      create: sous_actes.map((sa: any) => ({
        Desc_SActes: sa.Desc_SActes,
        Prix: sa.Prix,
        Statut_Valide: false,
      })),
    },
  },
  include: { sous_actes: true },
});


    return NextResponse.json(acte, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// ✅ Récupérer les actes selon le département
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id_Dep = searchParams.get("id_Dep");

    if (!id_Dep) {
      return NextResponse.json(
        { error: "ID du département manquant" },
        { status: 400 }
      );
    }

    const actes = await prisma.aCTES.findMany({
      where: { id_Dep: Number(id_Dep) },
      orderBy: { ID_Actes: "asc" },
    });

    return NextResponse.json(actes);
  } catch (error) {
    console.error("Erreur GET actes :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}