// import { NextResponse } from "next/server";
// import { PrismaClient } from "@/generated/prisma";

// const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();
//     const {
//       annee,
//       departementId,
//       acteId,
//       sousActeId,
//       nombre,
//       dateDebut,
//       dateFin,
//     } = data;

//     const newQuota = await prisma.qUOTAS.create({
//       data: {
//         Annee: annee,
//         Nombre: nombre,
//         Date_Debut: new Date(dateDebut),
//         Date_Fin: new Date(dateFin),
//         id_Dep: departementId,
//       },
//     });

//     return NextResponse.json({ success: true, quota: newQuota });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ success: false, error: "Erreur lors de l'insertion" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      annee,
      departementId,
      acteId,
      sousActeId,
      nombre,
      dateDebut,
      dateFin,
    } = data;

    // ✅ Vérification des données essentielles
    if (
      !annee ||
      !departementId ||
      !sousActeId ||
      !nombre ||
      !dateDebut ||
      !dateFin
    ) {
      return NextResponse.json(
        { success: false, error: "Champs manquants pour l'insertion du quota." },
        { status: 400 }
      );
    }

    // ✅ Création du quota avec liaison au sous-acte
    const newQuota = await prisma.qUOTAS.create({
      data: {
        Annee: annee,
        Nombre: nombre,
        Date_Debut: new Date(dateDebut),
        Date_Fin: new Date(dateFin),
        id_Dep: departementId,

        // 🧩 Liaison directe avec le sous-acte choisi
        sous_actes: {
          connect: { ID_SActes: sousActeId },
        },
      },
      include: {
        sous_actes: true, // Inclure les sous-actes liés dans la réponse
        departement: true, // Inclure le département
      },
    });

    return NextResponse.json({
      success: true,
      message: "Quota ajouté avec succès et lié au sous-acte.",
      quota: newQuota,
    });
  } catch (error) {
    console.error("Erreur lors de la création du quota :", error);
    return NextResponse.json(
      { success: false, error: "Erreur interne du serveur." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
