// import { NextResponse } from "next/server";

// import { createClient } from "@/utils/supabase/server";
// import { PrismaClient } from "../../../../../../../generated/prisma";

// const prisma = new PrismaClient ();

// export async function GET() {
//   try {
//     const supabase = await createClient();
//     const { data: { user } } = await supabase.auth.getUser();

//     if (!user) {
//       return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
//     }

//     // 🧑‍🎓 Trouver l'étudiant lié au user Supabase
//     const etudiant = await prisma.eTUDIANT.findUnique({
//       where: { user_id: user.id },
//     });

//     if (!etudiant) {
//       return NextResponse.json({ error: "Étudiant introuvable" }, { status: 404 });
//     }

//     // 📌 Récupérer les réalisations avec sous-acte
//     const realisations = await prisma.rEALISATION.findMany({
//       where: { id_Etudiant: etudiant.ID_Etudiant },
//       include: { sousActe: true }
//     });

//     return NextResponse.json(realisations);
//   } catch (error) {
//     return NextResponse.json({ error: "Erreur serveur", details: error }, { status: 500 });
//   }
// }

//MADEHA liste de quotas realiser
// import { NextResponse } from "next/server";
// import { createClient } from "@/utils/supabase/server";
// import { PrismaClient } from "../../../../../../../generated/prisma";

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     const supabase = await createClient();
//     const { data: { user } } = await supabase.auth.getUser();

//     if (!user) {
//       return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
//     }

//     const etu = await prisma.eTUDIANT.findUnique({
//       where: { user_id: user.id },
//       include: {
//         departement: true,
//         realisations: true,
//       },
//     });

//     if (!etu) {
//       return NextResponse.json({ error: "Etudiant introuvable" }, { status: 404 });
//     }

//     // Tous les quotas du département
//     const quotas = await prisma.qUOTAS.findMany({
//       where: { id_Dep: etu.id_Dep },
//       include: {
//         sous_actes: true, // ✅ correction du nom
//       },
//     });

//     // Groupe des réalisations par ID du sous-acte
//     const countReal = etu.realisations.reduce((acc, r) => {
//       acc[r.id_SActes] = (acc[r.id_SActes] || 0) + 1;
//       return acc;
//     }, {} as Record<number, number>);

//     // Formater résultat
//     const data = quotas.map(q => {
//       // Liste des ID sous-actes liés à ce quota
//       const sousActeIds = q.sous_actes.map(sa => sa.ID_SActes);

//       // Calcul du nombre réalisé (parmi les sous-actes de ce quota)
//       const done = sousActeIds.reduce((total, id) => {
//         return total + (countReal[id] || 0);
//       }, 0);

//       return {
//         id: q.ID_Quotas,
//         description: q.sous_actes.length > 0 
//           ? q.sous_actes[0].Desc_SActes 
//           : "Sans description",
//         realized: done,
//         quota: q.Nombre, // Correct : Quantité = Nombre dans ton modèle
//       };
//     });


//     return NextResponse.json(data);
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
//   }
// }


"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "../../../../../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user)
      return NextResponse.json({ error: "Utilisateur non connecté" }, { status: 401 });

    // Charger étudiant + réalisations avec sous-acte
    const etu = await prisma.eTUDIANT.findUnique({
      where: { user_id: user.id },
      include: {
        realisations: {
          include: {
            sousActe: true,   // 🔥 très important
            professeur: true,
            paiement: true
          },
        },
        departement: true,
      },
    });

    if (!etu)
      return NextResponse.json({ error: "Étudiant introuvable" }, { status: 404 });

    // Retourner directement les réalisations
    return NextResponse.json(etu.realisations || []);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
