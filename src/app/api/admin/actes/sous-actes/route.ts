"use server";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { sous_actes } = body;

    if (!sous_actes || !Array.isArray(sous_actes)) {
      return NextResponse.json({ error: "Aucune donnée de sous-actes fournie" }, { status: 400 });
    }

    // Modifier chaque sous-acte
    const promises = sous_actes.map((s: { ID_SActes: number; Desc_SActes: string; Prix: number }) =>
      prisma.sOUS_ACTES.update({
        where: { ID_SActes: s.ID_SActes },
        data: {
          Desc_SActes: s.Desc_SActes,
          Prix: s.Prix,
        },
      })
    );

    const updatedSousActes = await Promise.all(promises);

    return NextResponse.json(updatedSousActes);
  } catch (error) {
    console.error("Erreur bulk update sous-actes :", error);
    return NextResponse.json({ error: "Impossible de modifier les sous-actes" }, { status: 500 });
  }
}


export async function DELETE(req: Request) {
  try {
    const { ids } = await req.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { message: "Aucun sous-acte sélectionné" },
        { status: 400 }
      );
    }

    await prisma.$transaction(async (tx) => {
      // 🔴 1. Supprimer les dépendances simples
      await tx.nOTIFICATION.deleteMany({
        where: { id_SActes: { in: ids } },
      });

      await tx.rEALISATION.deleteMany({
        where: { id_SActes: { in: ids } },
      });

      // 🔴 2. Récupérer les quotas liés
      const quotas = await tx.qUOTAS.findMany({
        where: {
          sous_actes: {
            some: { ID_SActes: { in: ids } },
          },
        },
        select: { ID_Quotas: true },
      });

      // 🔴 3. Détacher les sous-actes
      for (const quota of quotas) {
        await tx.qUOTAS.update({
          where: { ID_Quotas: quota.ID_Quotas },
          data: {
            sous_actes: {
              disconnect: ids.map((id: number) => ({
                ID_SActes: id,
              })),
            },
          },
        });
      }

      // 🔴 4. Supprimer les sous-actes
      await tx.sOUS_ACTES.deleteMany({
        where: { ID_SActes: { in: ids } },
      });
    }, { timeout: 10000 });

    // ✅ COMMIT automatique ici
    return NextResponse.json(
      { message: "Sous-actes supprimés avec succès" },
      { status: 200 }
    );

  } catch (error) {
    // ❌ ROLLBACK automatique ici
    console.error("DELETE SOUS-ACTES TRANSACTION ERROR:", error);

    return NextResponse.json(
      { message: "Erreur lors de la suppression des sous-actes" },
      { status: 500 }
    );
  }
}

