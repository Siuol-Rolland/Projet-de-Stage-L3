// "use server";

// import { NextResponse } from "next/server";
// import { PrismaClient, TypeNotification, StatutPaiement } from "@/generated/prisma";
// import { createClient } from "@/utils/supabase/server";

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     const supabase = await createClient();
//     const { data: auth } = await supabase.auth.getUser();

//     if (!auth?.user) {
//       return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
//     }

//     const etudiant = await prisma.eTUDIANT.findUnique({
//       where: { user_id: auth.user.id },
//     });

//     if (!etudiant) {
//       return NextResponse.json({ message: "Étudiant introuvable" }, { status: 404 });
//     }

//     // Récupérer uniquement les sous-actes évalués
//     const realisations = await prisma.rEALISATION.findMany({
//       where: { 
//         id_Etudiant: etudiant.ID_Etudiant,
//         NOT: { Note: null } // uniquement évalués
//       },
//       include: {
//         sousActe: true,
//         paiement: true,
//       },
//       orderBy: {
//         // trier par date de paiement maintenant
//         paiement: {
//           Date_Paie: "desc",
//         },
//       },
//     });


//     return NextResponse.json(realisations, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
//   }
// }




// export async function POST(req: Request) {
//   try {
//     const supabase = await createClient();
//     const { data: auth } = await supabase.auth.getUser();

//     if (!auth?.user) {
//       return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
//     }

//     const body = await req.json();
//     const { ID_Realisation, Montant } = body;

//     if (!Montant || Montant <= 0) {
//       return NextResponse.json({ message: "Montant invalide" }, { status: 400 });
//     }

//     // Récupérer la réalisation
//     const realisation = await prisma.rEALISATION.findUnique({
//       where: { ID_Realisation },
//       include: { 
//         sousActe: true,
//         etudiant: true,
//         paiement: true,
//       },
//     });

//     if (!realisation) {
//       return NextResponse.json({ message: "Sous-acte introuvable" }, { status: 404 });
//     }

//     const montantActuel = realisation.paiement?.Montant || 0;
//     const nouveauMontant = montantActuel + Montant;

//     let paiement;

//     // SI UN PAIEMENT EXISTE → on met à jour le cumul
//     if (realisation.paiement) {
//       paiement = await prisma.pAIEMENT.update({
//         where: { ID_Paie: realisation.paiement.ID_Paie },
//         data: {
//           Montant: nouveauMontant,
//           Date_Paie: new Date(),
//           Statut_Paie: StatutPaiement.EN_ATTENTE, // <-- ici
//           id_Admin: null,
//         }
//       });
//     }

//     // SINON → on crée un nouveau paiement
//     else {
//       paiement = await prisma.pAIEMENT.create({
//         data: {
//           Montant: Montant,
//           Date_Paie: new Date(),
//           Statut_Paie: StatutPaiement.EN_ATTENTE, // <-- ici
//           id_Etudiant: realisation.id_Etudiant,
//           realisations: { connect: { ID_Realisation }},
//           id_Admin: null,
//         },
//       });

//       await prisma.rEALISATION.update({
//         where: { ID_Realisation },
//         data: { id_Paie: paiement.ID_Paie },
//       });
//     }

//     // NOTIFICATION ADMIN
//     const admins = await prisma.aDMINISTRATEUR.findMany();
//     const notifications = admins.map(admin => ({
//       Message: `Paiement en attente de validation pour le sous-acte "${realisation.sousActe.Desc_SActes}"`,
//       Type: TypeNotification.PAIEMENT,
//       id_Paie: paiement.ID_Paie,
//       id_Admin: admin.ID_Admin,
//     }));

//     await prisma.nOTIFICATION.createMany({ data: notifications });

//     return NextResponse.json({
//       message: "Paiement soumis. En attente de validation de l’administrateur.",
//       paiement,
//       montantTotal: nouveauMontant,
//     });

//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: "Erreur serveur", error }, { status: 500 });
//   }
// }




"use server";

import { NextResponse } from "next/server";
import { PrismaClient, TypeNotification, StatutPaiement } from "../../../../../generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();
// import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: auth } = await supabase.auth.getUser();

    if (!auth?.user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    const etudiant = await prisma.eTUDIANT.findUnique({
      where: { user_id: auth.user.id },
      include: { paiements: true },
    });

    if (!etudiant) {
      return NextResponse.json({ message: "Étudiant introuvable" }, { status: 404 });
    }

    // Récupérer uniquement les sous-actes évalués
    const realisations = await prisma.rEALISATION.findMany({
      where: { 
        id_Etudiant: etudiant.ID_Etudiant,
        NOT: { Note: null } // uniquement évalués
      },
      include: {
        sousActe: true,
        paiement: true,
      },
      orderBy: {
        // trier par date de paiement maintenant
        paiement: {
          Date_Paie: "desc",
        },
      },
    });

    let detteTotale = 0;

    const formatted = realisations.map(r => {
      // const montantPaye = r.paiement?.Montant || 0;
      
      // const montantValide = 
      //   r.paiement?.Statut_Paie !== "EN_ATTENTE"
      //   ? r.paiement?.Montant || 0
      //   : 0;

      const montantValide =
        r.paiement?.Statut_Paie === "PARTIEL" || r.paiement?.Statut_Paie === "TOTAL"
          ? r.paiement.Montant
          : 0;  // EN_ATTENTE ou ANNULE → ignoré




      // const montantRestant = r.sousActe.Prix - montantPaye;

      // detteTotale += montantRestant;

      const montantRestant = r.sousActe.Prix - montantValide;

      detteTotale += montantRestant;

      

      return {
        ...r,
        Montant_Restant: montantRestant,
        paiement: r.paiement
      ? {
          ...r.paiement,
          Montant: montantValide, // montant affiché = montant validé seulement
        }
      : null
      };
    });

    await prisma.eTUDIANT.update({
      where: { ID_Etudiant: etudiant.ID_Etudiant },
      data: { Dette: detteTotale },
    })


    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}




export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const { data: auth } = await supabase.auth.getUser();

    if (!auth?.user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    const body = await req.json();
    const { ID_Realisation, Montant } = body;

    if (!Montant || Montant <= 0) {
      return NextResponse.json({ message: "Montant invalide" }, { status: 400 });
    }

    // Récupérer la réalisation
    const realisation = await prisma.rEALISATION.findUnique({
      where: { ID_Realisation },
      include: { 
        sousActe: true,
        etudiant: true,
        paiement: true,
      },
    });

    if (!realisation) {
      return NextResponse.json({ message: "Sous-acte introuvable" }, { status: 404 });
    }

    const prix = realisation.sousActe.Prix;
    const ancienMontant = realisation.paiement?.Montant || 0;
    const nouveauMontant = ancienMontant + Montant;
    const montantRestant = prix - nouveauMontant;

    let paiement;

    // SI UN PAIEMENT EXISTE → on met à jour le cumul
    if (realisation.paiement) {
      paiement = await prisma.pAIEMENT.update({
        where: { ID_Paie: realisation.paiement.ID_Paie },
        data: {
          Montant: nouveauMontant,
          Montant_Restant: montantRestant,
          Date_Paie: new Date(),
          Statut_Paie: StatutPaiement.EN_ATTENTE, // <-- ici
          id_Admin: null,
        }
      });
    }

    // SINON → on crée un nouveau paiement
    else {
      paiement = await prisma.pAIEMENT.create({
        data: {
          Montant: Montant,
          Montant_Restant: montantRestant,
          Date_Paie: new Date(),
          Statut_Paie: StatutPaiement.EN_ATTENTE, // <-- ici
          id_Etudiant: realisation.id_Etudiant,
          realisations: { connect: { ID_Realisation }},
        },
      });

      await prisma.rEALISATION.update({
        where: { ID_Realisation },
        data: { id_Paie: paiement.ID_Paie },
      });
    }

    const paiementsEtudiant = await prisma.pAIEMENT.findMany({
      where: { id_Etudiant: realisation.id_Etudiant },
    });

    const detteTotale = paiementsEtudiant.reduce(
      (sum, p) => sum + (p.Montant_Restant || 0),
      0
    );

    await prisma.eTUDIANT.update({
      where: { ID_Etudiant: realisation.id_Etudiant },
      data: { Dette: detteTotale },
    });

    // NOTIFICATION ADMIN
    const admins = await prisma.aDMINISTRATEUR.findMany();
    const notifications = admins.map(admin => ({
      Message: `Paiement en attente de validation pour le sous-acte "${realisation.sousActe.Desc_SActes}"`,
      Type: TypeNotification.PAIEMENT,
      id_Paie: paiement.ID_Paie,
      id_Admin: admin.ID_Admin,
    }));

    await prisma.nOTIFICATION.createMany({ data: notifications });

    return NextResponse.json({
      message: "Paiement soumis. En attente de validation de l’administrateur.",
      paiement,
      montantRestant,
      dette: detteTotale,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erreur serveur", error }, { status: 500 });
  }
}




