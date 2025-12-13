"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { PrismaClient, StatutPaiement } from "../../../../../generated/prisma";
import { prisma } from "@/lib/db/db";
// import { prisma } from "@/lib/prisma";



export async function GET() {
  try {
    const paiements = await prisma.rEALISATION.findMany({
      where: {
        id_Paie: { not: null }, // uniquement les réalisations payées
      },
      include: {
        etudiant: {
          include: {
            departement: true, // ✅ AJOUTÉ : pour récupérer le département !
          },
        },
        sousActe: true,
        paiement: true,
      },
      orderBy: { Date_Realise: "desc" },
    });

    // ✅ FORMATTAGE : on renvoie année & département au frontend
    const formatted = paiements.map((r) => ({
      ID_Realisation: r.ID_Realisation,
      Nom_Etudiant: r.etudiant.FullName_Et,

      // 🔥 AJOUTÉS : maintenant utilisables dans le filtre !
      annee: r.etudiant.Annee_Et || null,
      departement: r.etudiant.departement?.Nom_Dep || null,


      Montant_Restant: r.paiement?.Montant_Restant ?? 0,
      Note: r.Note,

      sousActe: r.sousActe
        ? {
            Desc_SActes: r.sousActe.Desc_SActes,
            Prix: r.sousActe.Prix,
          }
        : undefined,

      paiement: r.paiement
        ? {
            ID_Paie: r.paiement.ID_Paie,
            Montant: r.paiement.Montant,
            Statut_Paie: r.paiement.Statut_Paie,
            Date_Paie: r.paiement.Date_Paie.toISOString(),
          }
        : undefined,
    }));

    return NextResponse.json({ paiements: formatted });
  } catch (error) {
    console.error("GET /api/admin/paiement error:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}






export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const { data: auth } = await supabase.auth.getUser();

    // 🔐 Vérification de connexion
    if (!auth?.user) {
      return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
    }

    // 🔐 Vérifier si c'est un administrateur
    const admin = await prisma.aDMINISTRATEUR.findUnique({
      where: { user_id: auth.user.id },
    });

    if (!admin) {
      return NextResponse.json({
        message: "Accès réservé aux administrateurs",
      }, { status: 403 });
    }

    // 📥 Récupérer les données envoyées
    const { ID_Paie } = await req.json();

    const paiement = await prisma.pAIEMENT.findUnique({
      where: { ID_Paie },
      include: { realisations: { include: { sousActe: true } } },
    });

    if (!paiement) {
      return NextResponse.json({ message: "Paiement introuvable" }, { status: 404 });
    }

    // ⚠️ empêcher passage direct PARTIEL/TOTAL
    if (paiement.Statut_Paie === StatutPaiement.TOTAL) {
      return NextResponse.json({ message: "Paiement déjà total" });
    }

    // 🎯 Récupération du prix (1ère réalisation)
    const prix = paiement.realisations[0].sousActe.Prix;

    const montantRestant = prix - paiement.Montant;

    // ⚖️ Déterminer le nouveau statut
    const nouveauStatut =
      montantRestant <= 0 ? StatutPaiement.TOTAL : StatutPaiement.PARTIEL;

    

    // 💾 Mise à jour du statut
    const updated = await prisma.pAIEMENT.update({
      where: { ID_Paie },
      data: { 
        Statut_Paie: nouveauStatut,
        Montant_Restant: montantRestant, 
        id_Admin: admin.ID_Admin, 
      },
    });

    // AJOUT HISTORIQUE
    await prisma.hISTORIQUE_PAIEMENT.create({
    data: {
        Action: "VALIDATION",
        AncienStatut: paiement.Statut_Paie,
        NouveauStatut: nouveauStatut,
        Montant: paiement.Montant,
        Montant_Restant: montantRestant,
        id_Paie: paiement.ID_Paie,
        id_Admin: admin.ID_Admin,
    },
    });

    //  VALIDATION AUTOMATIQUE DU QUOTA RÉALISÉ SI PAIEMENT TOTAL ET NOTE SUPPÉRIEURE À 10/20
    if (nouveauStatut === StatutPaiement.TOTAL) {
      for (const real of paiement.realisations) {
        if (real.Note !== null && real.Note >= 10) {
          // marquer la réalisation comme validée
          await prisma.rEALISATION.update({
            where: { ID_Realisation: real.ID_Realisation },
            data: { Statut_Valide: true }, 
          });
          
          // envoyer une notification à l'étudiant
          await prisma.nOTIFICATION.create({
            data: {
              Message: `Votre quota sur "${real.sousActe.Desc_SActes}" a été validé.`,
              Type: "VALIDATION",
              id_Etudiant: paiement.id_Etudiant,
              id_Realisation: real.ID_Realisation,
            },
          });
        }
      }
    }
      

    // 📩 ENVOYER UNE NOTIFICATION À L'ÉTUDIANT
    await prisma.nOTIFICATION.create({
      data: {
        Message: "Le paiement que vous avez effectué a été validé par un administrateur.",
        Type: "VALIDATION",
        id_Etudiant: paiement.id_Etudiant,
        id_Paie: paiement.ID_Paie,
      },
    });



    return NextResponse.json({
      message: "Paiement validé par l’administrateur.",
      updated,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erreur serveur", error }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const supabase = await createClient();
    const { data: auth } = await supabase.auth.getUser();

    if (!auth?.user) {
      return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
    }

    const admin = await prisma.aDMINISTRATEUR.findUnique({
      where: { user_id: auth.user.id },
    });

    if (!admin) {
      return NextResponse.json({
        message: "Accès réservé aux administrateurs",
      }, { status: 403 });
    }

    const { ID_Paie } = await req.json();

    const paiement = await prisma.pAIEMENT.findUnique({
      where: { ID_Paie },
      include: {
        realisations: true,
        etudiant: true,
      },
    });

    if (!paiement) {
      return NextResponse.json({ message: "Paiement introuvable" }, { status: 404 });
    }

    // Déjà annulé → inutile
    if (paiement.Statut_Paie === StatutPaiement.ANNULE) {
      return NextResponse.json({ message: "Paiement déjà annulé." });
    }

    // Calcul nouveau montant restant
    const ancienMontantRestant = paiement.Montant_Restant ?? 0;
    const montantPaye = paiement.Montant;

    const nouveauMontantRestant = ancienMontantRestant + montantPaye;

    // Calcul de la nouvelle dette de l'étudiant
    const ancienneDette = paiement.etudiant.Dette ?? 0;
    const nouvelleDette = ancienneDette - ancienMontantRestant;
    
    // ➖ ANNULATION
    const canceled = await prisma.pAIEMENT.update({
      where: { ID_Paie },
      data: {
        Statut_Paie: StatutPaiement.ANNULE,
        Montant_Restant: nouveauMontantRestant,
        id_Admin: admin.ID_Admin,
      },
    });

    // Mettre à jour la dette de l'etudiant
    await prisma.eTUDIANT.update({
      where: { ID_Etudiant: paiement.id_Etudiant },
      data: {
        Dette: nouvelleDette,
      },
    });

    // AJOUT HISTORIQUE
    await prisma.hISTORIQUE_PAIEMENT.create({
    data: {
        Action: "ANNULATION",
        AncienStatut: paiement.Statut_Paie,
        NouveauStatut: StatutPaiement.ANNULE,
        Montant: paiement.Montant,
        Montant_Restant: paiement.Montant_Restant,
        id_Paie: paiement.ID_Paie,
        id_Admin: admin.ID_Admin,
    },
    });

    // 🔔 Notification à l'étudiant
    await prisma.nOTIFICATION.create({
      data: {
        Message: "Un paiement que vous avez effectué a été annulé par un administrateur.",
        Type: "PAIEMENT",
        id_Etudiant: paiement.id_Etudiant,
        id_Paie: paiement.ID_Paie,
      },
    });

    return NextResponse.json({
      message: "Paiement annulé avec succès.",
      canceled,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur serveur", error },
      { status: 500 }
    );
  }
}


