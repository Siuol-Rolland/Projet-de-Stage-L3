"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/db/db";

// Fonction utilitaire pour gérer les erreurs de base de données
const handleDatabaseError = (error: any) => {
  console.error("Database error:", error);
  throw new Error("Une erreur est survenue lors de l'accès à la base de données");
};

export async function POST(req: Request) {
  try {
    const { etudiantId, sousActeId, quotaId } = await req.json();

    if (!etudiantId || !sousActeId || !quotaId) {
      return NextResponse.json(
        { success: false, message: "Paramètres manquants." },
        { status: 400 }
      );
    }

    // 🔄 Transaction atomique avec gestion des erreurs améliorée
    const result = await prisma.$transaction(async (tx) => {
      try {
        // 1. Verrouiller la ligne du quota pour lecture/mise à jour
        const quota = await tx.qUOTAS.findUnique({
          where: { ID_Quotas: quotaId },
          include: { sous_actes: true },
        });

        if (!quota) {
          throw new Error("Quota introuvable.");
        }

        // Vérifier si le sous-acte appartient au quota
        const sousActeInQuota = quota.sous_actes.some(
          (sa) => sa.ID_SActes === sousActeId
        );

        if (!sousActeInQuota) {
          throw new Error("Ce sous-acte n'appartient pas à ce quota.");
        }

        // 2. Vérifier le quota disponible avec une requête plus robuste
        const countRealisation = await tx.rEALISATION.count({
          where: {
            id_Etudiant: etudiantId,
            id_SActes: sousActeId,
            Date_Realise: {
              gte: new Date(new Date().getFullYear(), 0, 1), // Depuis le début de l'année
            }
          },
        });

        if (countRealisation >= quota.Nombre) {
          throw new Error(`Quota maximum atteint (${countRealisation}/${quota.Nombre}).`);
        }

        // 3. Créer la réalisation
        const realisation = await tx.rEALISATION.create({
          data: {
            Date_Realise: new Date(),
            Statut_Valide: false,
            id_Etudiant: etudiantId,
            id_SActes: sousActeId,
          },
          include: {
            sousActe: {
              include: {
                acte: { include: { departement: true } },
              },
            },
          },
        });

        // 4. Créer les notifications
        const profs = await tx.pROFESSEURS.findMany({
          where: {
            departements: {
              some: {
                ID_Dep: realisation.sousActe.acte.departement.ID_Dep,
              },
            },
          },
        });

        const notifications = await Promise.all(
          profs.map((prof) =>
            tx.nOTIFICATION.create({
              data: {
                Message: `L'étudiant a réalisé le sous-acte "${realisation.sousActe.Desc_SActes}" à évaluer.`,
                Type: "REALISATION",
                id_SActes: sousActeId,
                id_Prof: prof.ID_Prof,
                id_Realisation: realisation.ID_Realisation,
              },
            })
          )
        );

        return { realisation, notifications };
      } catch (error) {
        console.error("Erreur dans la transaction:", error);
        throw error; // Propage l'erreur pour la gérer dans le bloc catch principal
      }
    }, {
      // Options de transaction
      isolationLevel: 'Serializable', // Niveau d'isolement plus strict
      timeout: 10000, // Timeout de 10 secondes
      maxWait: 2000, // Temps d'attente maximum pour acquérir un verrou
    });

    // 🔔 Notification en temps réel (hors transaction)
    try {
      const supabase = await createClient();
      await supabase.channel("notifications").send({
        type: "broadcast",
        event: "new_notification",
        payload: { notifications: result.notifications },
      });
    } catch (supabaseError) {
      console.error("Erreur Supabase (non critique):", supabaseError);
      // On continue même en cas d'erreur Supabase
    }

    return NextResponse.json({
      success: true,
      realisation: result.realisation,
      notifications: result.notifications,
    });
  } catch (error) {
    console.error("Erreur POST REALISATION:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : "Erreur serveur lors de la réalisation." 
      },
      { status: 500 }
    );
  }
}