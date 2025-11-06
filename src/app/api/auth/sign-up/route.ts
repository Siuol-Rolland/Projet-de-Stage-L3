"use server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newEtudiant = await prisma.eTUDIANT.create({
      data: {
        user_id: body.user_id,
        FullName_Et: body.nomComplet,
        Email_Et: body.email,
        Annee_Et: body.annee,
        Photo_Et: body.photo,
        MotPass_Et: body.password,
        id_Dep: body.id_Dep,
      },
    });

    return NextResponse.json(newEtudiant, { status: 201 });
  } catch (error) {
    console.error("Erreur création étudiant:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
