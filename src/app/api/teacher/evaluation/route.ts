// "use server";
// import { NextResponse } from "next/server";
// import { PrismaClient } from "@/generated/prisma";
// import { createClient } from "@/utils/supabase/server";

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     const data = await prisma.sOUS_ACTES.findMany({
//       where: {
//         Date_Realise: { not: null },   // Sous-acte déjà réalisé
//         id_Etudiant: { not: null }     // Etudiant associé
//       },
//       include: {
//         etudiant: true,   // Récupération des infos de l’étudiant
//         acte: true        // Optionnel : pour afficher son acte
//       }
//     });

//     return NextResponse.json(data);
//   } catch (error: any ) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// // export async function POST(req: Request) {
// //   try {
// //     const { sActeId, note } = await req.json();

// //     // 1️⃣ Mettre à jour la note du sous-acte
// //     const sousActe = await prisma.sOUS_ACTES.update({
// //       where: { ID_SActes: sActeId },
// //       data: { Note: note },
// //       include: { etudiant: true, professeur: true },
// //     });

// //     if (!sousActe.etudiant) {
// //       return NextResponse.json({ error: "Sous-acte sans étudiant associé." }, { status: 400 });
// //     }

// //     // 2️⃣ Créer la notification pour l’étudiant
// //     await prisma.nOTIFICATION.create({
// //       data: {
// //         Message: `${sousActe.professeur?.Nom_Prof || "Le professeur"} a évalué votre sous-acte "${sousActe.Desc_SActes}".`,
// //         Type: "EVALUATION",
// //         id_Etudiant: sousActe.id_Etudiant,
// //         Lu: false,
// //       },
// //     });

// //     return NextResponse.json({ message: "Évaluation et notification créées avec succès." });
// //   } catch (error: any) {
// //     return NextResponse.json({ error: error.message }, { status: 500 });
// //   }
// // }

// export async function POST(req: Request) {
//   try {
//     const { sActeId, note } = await req.json();

//     // 🔹 Créer le client Supabase côté serveur
//     const supabase = await createClient();
//     const { data: { session }, error: sessionError } = await supabase.auth.getSession();

//     if (sessionError || !session?.user) {
//       return NextResponse.json({ error: "Utilisateur non connecté." }, { status: 401 });
//     }

//     const profUserId = session.user.id; // ici tu récupères le user_id du prof connecté

//     // 1️⃣ Récupérer le professeur connecté
//     const professeur = await prisma.pROFESSEURS.findUnique({
//       where: { user_id: profUserId },
//     });
//     if (!professeur) {
//       return NextResponse.json({ error: "Professeur non trouvé." }, { status: 404 });
//     }

//     // 2️⃣ Mettre à jour la note et lier le professeur
//     const sousActe = await prisma.sOUS_ACTES.update({
//       where: { ID_SActes: sActeId },
//       data: { 
//         Note: note,
//         id_Prof: professeur.ID_Prof
//       },
//       include: { etudiant: true },
//     });

//     if (!sousActe.etudiant) {
//       return NextResponse.json({ error: "Sous-acte sans étudiant associé." }, { status: 400 });
//     }

//     // 3️⃣ Créer la notification pour l’étudiant
//     await prisma.nOTIFICATION.create({
//       data: {
//         Message: `${professeur.Nom_Prof} a évalué le sous-acte "${sousActe.Desc_SActes}".`,
//         Type: "EVALUATION",
//         id_Etudiant: sousActe.id_Etudiant,
//         id_Prof: professeur.ID_Prof,
//         Lu: false,
//       },
//     });

//     return NextResponse.json({ message: "Évaluation et notification créées avec succès." });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

"use server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Récupérer toutes les réalisations non évaluées
    const data = await prisma.rEALISATION.findMany({
      where: {
        Note: null, // Sous-acte non évalué
      },
      include: {
        etudiant: true,     // infos de l'étudiant
        sousActe: {
          include: { acte: true }, // infos de l'acte
        },
        professeur: true,
      },
    });

    // Mapper les données pour le front
    const response = data.map((r) => ({
      ID_SActes: r.sousActe.ID_SActes,
      Desc_SActes: r.sousActe.Desc_SActes,
      Date_Realise: r.Date_Realise,
      Note: r.Note ?? undefined,
      etudiant: r.etudiant
        ? { FullName_Et: r.etudiant.FullName_Et, Email_Et: r.etudiant.Email_Et }
        : null,
      acte: r.sousActe.acte ? { Desc_Actes: r.sousActe.acte.Desc_Actes } : undefined,
    }));

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { sActeId, note } = await req.json();

    // 🔹 Créer le client Supabase côté serveur
    const supabase = await createClient();
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session?.user) {
      return NextResponse.json({ error: "Utilisateur non connecté." }, { status: 401 });
    }

    const profUserId = session.user.id;

    // 1️⃣ Récupérer le professeur connecté
    const professeur = await prisma.pROFESSEURS.findUnique({
      where: { user_id: profUserId },
    });
    if (!professeur) {
      return NextResponse.json({ error: "Professeur non trouvé." }, { status: 404 });
    }

    // 2️⃣ Récupérer la réalisation correspondant au sous-acte
    const realisation = await prisma.rEALISATION.findFirst({
      where: { id_SActes: sActeId },
      include: { etudiant: true, sousActe: true },
    });

    if (!realisation || !realisation.etudiant) {
      return NextResponse.json({ error: "Sous-acte ou étudiant introuvable." }, { status: 400 });
    }

    // 3️⃣ Mettre à jour la note et lier le professeur
    const updated = await prisma.rEALISATION.update({
      where: { ID_Realisation: realisation.ID_Realisation },
      data: {
        Note: note,
        id_Prof: professeur.ID_Prof,
        Statut_Valide: true,
      },
      include: { etudiant: true, sousActe: true },
    });

    // 4️⃣ Créer la notification pour l’étudiant
    await prisma.nOTIFICATION.create({
      data: {
        Message: `${professeur.Nom_Prof} a évalué le sous-acte "${updated.sousActe.Desc_SActes}".`,
        Type: "EVALUATION",
        id_Etudiant: updated.id_Etudiant,
        id_Prof: professeur.ID_Prof,
        Lu: false,
        id_Realisation: updated.ID_Realisation,
      },
    });

    return NextResponse.json({ message: "Évaluation et notification créées avec succès." });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
