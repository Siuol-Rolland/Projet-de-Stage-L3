"use server";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

// PUT /api/admin/department/[id]
export async function PUT(req: Request, context: any) {
  const { params } = context;
  const { id } = await params;

  try {
    const body = await req.json();
    const { Nom_Dep } = body;

    if (!Nom_Dep || Nom_Dep.trim() === "") {
      return NextResponse.json(
        { error: "Le nom du département est requis" },
        { status: 400 }
      );
    }

    const updated = await prisma.dEPARTEMENT.update({
      where: { ID_Dep: Number(id) },
      data: { Nom_Dep },
    });

    return NextResponse.json(
      { message: "Département modifié", data: updated },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur UPDATE département :", error);
    return NextResponse.json(
      { error: "Impossible de modifier ce département" },
      { status: 500 }
    );
  }
}
