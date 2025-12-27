"use server";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const depId = Number(params.id);

  if (!depId) {
    return NextResponse.json({ message: "ID département invalide" }, { status: 400 });
  }

  try {
    await prisma.$transaction(async (tx) => {
      // 🔹 1. Récupérer tous les actes du département
      const actes = await tx.aCTES.findMany({
        where: { id_Dep: depId },
        select: { ID_Actes: true },
      });

      const actesIds = actes.map(a => a.ID_Actes);

      if (actesIds.length > 0) {
        // 🔹 2. Récupérer tous les sous-actes des actes
        const sousActes = await tx.sOUS_ACTES.findMany({
          where: { id_Actes: { in: actesIds } },
          select: { ID_SActes: true },
        });
        const sousActesIds = sousActes.map(sa => sa.ID_SActes);

        if (sousActesIds.length > 0) {
          // 🔹 3. Supprimer notifications liées aux sous-actes
          await tx.nOTIFICATION.deleteMany({
            where: { id_SActes: { in: sousActesIds } },
          });

          // 🔹 4. Supprimer réalisations liées aux sous-actes
          await tx.rEALISATION.deleteMany({
            where: { id_SActes: { in: sousActesIds } },
          });

          // 🔹 5. Déconnecter des quotas
          const quotas = await tx.qUOTAS.findMany({
            where: { sous_actes: { some: { ID_SActes: { in: sousActesIds } } } },
            select: { ID_Quotas: true },
          });

          for (const quota of quotas) {
            await tx.qUOTAS.update({
              where: { ID_Quotas: quota.ID_Quotas },
              data: { sous_actes: { disconnect: sousActesIds.map(id => ({ ID_SActes: id })) } },
            });
          }

          // 🔹 6. Supprimer les sous-actes
          await tx.sOUS_ACTES.deleteMany({ where: { ID_SActes: { in: sousActesIds } } });
        }

        // 🔹 7. Supprimer les actes
        await tx.aCTES.deleteMany({ where: { ID_Actes: { in: actesIds } } });
      }

      // 🔹 8. Supprimer le département
      await tx.dEPARTEMENT.delete({ where: { ID_Dep: depId } });
    });

    return NextResponse.json({ message: "Département et tout ce qui lui est lié supprimés avec succès" });
  } catch (error) {
    console.error("DELETE DEPARTMENT ERROR:", error);
    return NextResponse.json({ message: "Erreur lors de la suppression du département" }, { status: 500 });
  }
}
