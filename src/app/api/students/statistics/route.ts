"use server";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // Récupérer l'étudiant
    const etudiant = await prisma.eTUDIANT.findUnique({
      where: { user_id: user.id },
    });

    if (!etudiant) {
      return NextResponse.json({ error: "Étudiant introuvable" }, { status: 404 });
    }

    // Obtenir la date actuelle
    const now = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(now.getMonth() - 5);
    sixMonthsAgo.setDate(1);

    // Formatter les mois pour l'affichage
    const formatMonth = (date: Date) => {
      return date.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
    };

    // Générer la liste des 6 derniers mois
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setMonth(now.getMonth() - i);
      date.setDate(1);
      months.push({
        date,
        name: formatMonth(date),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      });
    }

    // Récupérer les données pour chaque mois
    const statistics = await Promise.all(months.map(async (month) => {
      const startDate = new Date(month.year, month.month - 1, 1);
      const endDate = new Date(month.year, month.month, 0, 23, 59, 59);

      // 1. Nombre de réalisations ce mois
      const realisationsCount = await prisma.rEALISATION.count({
        where: {
          id_Etudiant: etudiant.ID_Etudiant,
          Date_Realise: {
            gte: startDate,
            lte: endDate
          }
        }
      });

      // 2. Nombre de paiements (TOTAL et PARTIEL) ce mois
      const paiementsCount = await prisma.pAIEMENT.count({
        where: {
          id_Etudiant: etudiant.ID_Etudiant,
          Date_Paie: {
            gte: startDate,
            lte: endDate
          },
          Statut_Paie: {
            in: ['TOTAL', 'PARTIEL']
          }
        }
      });

      // 3. Nombre de quotas validés ce mois
      // Un quota est validé si une réalisation a Statut_Valide = true
      const quotasValidesCount = await prisma.rEALISATION.count({
        where: {
          id_Etudiant: etudiant.ID_Etudiant,
          Date_Realise: {
            gte: startDate,
            lte: endDate
          },
          Statut_Valide: true
        }
      });

      return {
        name: month.name,
        realisation: realisationsCount,
        paiement: paiementsCount,
        quota: quotasValidesCount,
        rawDate: month.date
      };
    }));

    return NextResponse.json({
      statistics,
      totalStats: {
        totalRealisations: statistics.reduce((sum, month) => sum + month.realisation, 0),
        totalPaiements: statistics.reduce((sum, month) => sum + month.paiement, 0),
        totalQuotasValides: statistics.reduce((sum, month) => sum + month.quota, 0),
      }
    });

  } catch (err) {
    console.error("Erreur lors de la récupération des statistiques:", err);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}