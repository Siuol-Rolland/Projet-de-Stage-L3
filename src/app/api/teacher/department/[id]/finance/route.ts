"use server";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const depId = Number(context.params.id);

  if (isNaN(depId)) {
    return NextResponse.json(
      { error: "ID invalide" },
      { status: 400 }
    );
  }

  /** Tous les étudiants du département */
  const etudiants = await prisma.eTUDIANT.findMany({
    where: { id_Dep: depId },
    select: {
      paiements: {
        where: {
          Statut_Paie: {
            in: ["TOTAL", "PARTIEL"],
          },
        },
        select: {
          Montant: true,
          Montant_Restant: true,
        },
      },
    },
  });

  let soldeActuel = 0;
  let soldeArrieres = 0;

  etudiants.forEach((et) => {
    et.paiements.forEach((p) => {
      soldeActuel += p.Montant;
      soldeArrieres += p.Montant_Restant ?? 0;
    });
  });

  return NextResponse.json({
    soldeActuel,
    soldeArrieres,
  });
}
