"use server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.sOUS_ACTES.findMany({
      where: {
        Date_Realise: { not: null },   // Sous-acte déjà réalisé
        id_Etudiant: { not: null }     // Etudiant associé
      },
      include: {
        etudiant: true,   // Récupération des infos de l’étudiant
        acte: true        // Optionnel : pour afficher son acte
      }
    });

    return NextResponse.json(data);
  } catch (error: any ) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function POST(req: Request) {
//   try {
//     const { sActeId, note } = await req.json();

//     // 1️⃣ Mettre à jour la note du sous-acte
//     const sousActe = await prisma.sOUS_ACTES.update({
//       where: { ID_SActes: sActeId },
//       data: { Note: note },
//       include: { etudiant: true, professeur: true },
//     });

//     if (!sousActe.etudiant) {
//       return NextResponse.json({ error: "Sous-acte sans étudiant associé." }, { status: 400 });
//     }

//     // 2️⃣ Créer la notification pour l’étudiant
//     await prisma.nOTIFICATION.create({
//       data: {
//         Message: `${sousActe.professeur?.Nom_Prof || "Le professeur"} a évalué votre sous-acte "${sousActe.Desc_SActes}".`,
//         Type: "EVALUATION",
//         id_Etudiant: sousActe.id_Etudiant,
//         Lu: false,
//       },
//     });

//     return NextResponse.json({ message: "Évaluation et notification créées avec succès." });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

export async function POST(req: Request) {
  try {
    const { sActeId, note } = await req.json();

    // 🔹 Créer le client Supabase côté serveur
    const supabase = await createClient();
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session?.user) {
      return NextResponse.json({ error: "Utilisateur non connecté." }, { status: 401 });
    }

    const profUserId = session.user.id; // ici tu récupères le user_id du prof connecté

    // 1️⃣ Récupérer le professeur connecté
    const professeur = await prisma.pROFESSEURS.findUnique({
      where: { user_id: profUserId },
    });
    if (!professeur) {
      return NextResponse.json({ error: "Professeur non trouvé." }, { status: 404 });
    }

    // 2️⃣ Mettre à jour la note et lier le professeur
    const sousActe = await prisma.sOUS_ACTES.update({
      where: { ID_SActes: sActeId },
      data: { 
        Note: note,
        id_Prof: professeur.ID_Prof
      },
      include: { etudiant: true },
    });

    if (!sousActe.etudiant) {
      return NextResponse.json({ error: "Sous-acte sans étudiant associé." }, { status: 400 });
    }

    // 3️⃣ Créer la notification pour l’étudiant
    await prisma.nOTIFICATION.create({
      data: {
        Message: `${professeur.Nom_Prof} a évalué le sous-acte "${sousActe.Desc_SActes}".`,
        Type: "EVALUATION",
        id_Etudiant: sousActe.id_Etudiant,
        id_Prof: professeur.ID_Prof,
        Lu: false,
      },
    });

    return NextResponse.json({ message: "Évaluation et notification créées avec succès." });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}