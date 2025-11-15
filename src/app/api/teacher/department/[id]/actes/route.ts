"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const id_Dep = parseInt(params.id);

    const actes = await prisma.aCTES.findMany({
      where: { id_Dep },
      include: {
        sous_actes: {
          select: {
            ID_SActes: true,
            Desc_SActes: true,
            Prix: true,
            // Note: true,
            // Statut_Valide: true,
          },
        },
      },
    });

    return NextResponse.json(actes);
  } catch (error) {
    console.error("Erreur lors du chargement des actes:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
