"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";

const prisma = new PrismaClient();

// 👉 POST /api/department
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { Nom_Dep } = body;

    if (!Nom_Dep) {
      return NextResponse.json(
        { error: "Le nom du département est requis" },
        { status: 400 }
      );
    }

    const newDep = await prisma.dEPARTEMENT.create({
      data: {
        Nom_Dep,
      },
    });

    return NextResponse.json(
      { message: "Département ajouté avec succès", data: newDep },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Erreur lors de l’insertion :", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l’ajout du département" },
      { status: 500 }
    );
  }
}


// 📄 GET : Récupérer tous les départements
export async function GET() {
  try {
    const deps = await prisma.dEPARTEMENT.findMany({
      orderBy: { ID_Dep: "asc" },
    });
    return NextResponse.json(deps);
  } catch (error) {
    // return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    return NextResponse.json([], { status: 200 });
  }
}