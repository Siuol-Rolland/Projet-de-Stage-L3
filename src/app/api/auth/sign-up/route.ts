"use server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newEtudiant = await prisma.eTUDIANT.create({
      data: {
        user_id: body.user_id,
        FullName_Et: body.nomComplet,
        Email_Et: body.email,
        Annee_Et: body.annee,
        Photo_Et: body.photo,
        MotPass_Et: hashedPassword,
        id_Dep: body.id_Dep,
      },
    });

    return NextResponse.json(newEtudiant, { status: 201 });
  } catch (error) {
    console.error("Erreur création étudiant:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
