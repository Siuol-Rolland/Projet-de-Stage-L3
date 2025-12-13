"use server";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { Desc_Actes } = body;
    const id = Number(params.id);

    if (!Desc_Actes) {
      return NextResponse.json({ error: "Nom de l'acte manquant" }, { status: 400 });
    }

    const updatedActe = await prisma.aCTES.update({
      where: { ID_Actes: id },
      data: { Desc_Actes },
    });

    return NextResponse.json(updatedActe);
  } catch (error) {
    console.error("Erreur modification acte :", error);
    return NextResponse.json({ error: "Impossible de modifier l'acte" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const acteId = Number(params.id);

    if (!acteId) {
      return NextResponse.json(
        { message: "ID acte invalide" },
        { status: 400 }
      );
    }

    await prisma.$transaction(async (tx) => {
      // 🔴 1. Récupérer les sous-actes de l’acte
      const sousActes = await tx.sOUS_ACTES.findMany({
        where: { id_Actes: acteId },
        select: { ID_SActes: true },
      });

      const ids = sousActes.map((s) => s.ID_SActes);

      if (ids.length > 0) {
        // 🔴 2. Supprimer dépendances
        await tx.nOTIFICATION.deleteMany({
          where: { id_SActes: { in: ids } },
        });

        await tx.rEALISATION.deleteMany({
          where: { id_SActes: { in: ids } },
        });

        // 🔴 3. Détacher des quotas (many-to-many)
        const quotas = await tx.qUOTAS.findMany({
          where: {
            sous_actes: { some: { ID_SActes: { in: ids } } },
          },
          select: { ID_Quotas: true },
        });

        for (const quota of quotas) {
          await tx.qUOTAS.update({
            where: { ID_Quotas: quota.ID_Quotas },
            data: {
              sous_actes: {
                disconnect: ids.map((id) => ({ ID_SActes: id })),
              },
            },
          });
        }

        // 🔴 4. Supprimer les sous-actes
        await tx.sOUS_ACTES.deleteMany({
          where: { ID_SActes: { in: ids } },
        });
      }

      // 🔴 5. Supprimer l’acte
      await tx.aCTES.delete({
        where: { ID_Actes: acteId },
      });
    });

    return NextResponse.json(
      { message: "Acte et sous-actes supprimés avec succès" },
      { status: 200 }
    );

  } catch (error) {
    console.error("DELETE ACTE TRANSACTION ERROR:", error);

    return NextResponse.json(
      { message: "Erreur lors de la suppression de l’acte" },
      { status: 500 }
    );
  }
}

