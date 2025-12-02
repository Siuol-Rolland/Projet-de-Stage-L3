"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../../../generated/prisma";

import { prisma } from "@/lib/db/db";

export async function GET(req: Request, { params }: any) {
  try {
    const historique = await prisma.hISTORIQUE_PAIEMENT.findMany({
      where: { id_Paie: Number(params.id) },
      orderBy: { Date_Action: "desc" },
      include: {
        admin: true,
      },
    });

    return NextResponse.json({ historique });
  } catch (error) {
    console.error("Erreur historique:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
