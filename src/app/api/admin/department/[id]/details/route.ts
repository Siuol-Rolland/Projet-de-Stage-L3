"use server";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function GET(req: Request, context: any) {
  const { params } = context;
  const { id } = await params; // ✅ Correction : params doit être await

  try {
    const dep = await prisma.dEPARTEMENT.findUnique({
      where: { ID_Dep: Number(id) },
      include: {
        actes: {
          include: {
            sous_actes: true,
          },
        },
      },
    });

    if (!dep) {
      return NextResponse.json(
        { error: "Département introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json(dep);
  } catch (error) {
    console.error("Erreur API:", error);
    return NextResponse.json(
      { error: "Erreur lors du chargement du département" },
      { status: 500 }
    );
  }
}
