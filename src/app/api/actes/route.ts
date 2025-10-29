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
          create: sous_actes.map((sa: string) => ({
            Desc_SActes: sa,
            Prix: 0,
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
