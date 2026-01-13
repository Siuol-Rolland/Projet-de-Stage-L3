"use server";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const departmentId = Number(context.params.id);

    if (isNaN(departmentId)) {
      return NextResponse.json(
        { error: "ID invalide" },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Non authentifié" },
        { status: 401 }
      );
    }

    // Vérifier que le professeur appartient à ce département
    const professeur = await prisma.pROFESSEURS.findFirst({
      where: {
        user_id: user.id,
        departements: {
          some: { ID_Dep: departmentId }
        }
      }
    });

    if (!professeur) {
      return NextResponse.json(
        { error: "Accès non autorisé" },
        { status: 403 }
      );
    }

    // Date actuelle
    const now = new Date();

    const formatMonth = (date: Date) =>
      date.toLocaleDateString("fr-FR", {
        month: "short",
        year: "numeric",
      });

    // 6 derniers mois
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setMonth(now.getMonth() - i);
      date.setDate(1);
      months.push({
        date,
        name: formatMonth(date),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      });
    }

    const statistics = await Promise.all(
      months.map(async (month) => {
        const startDate = new Date(month.year, month.month - 1, 1);
        const endDate = new Date(month.year, month.month, 0, 23, 59, 59);

        const realisation = await prisma.rEALISATION.count({
          where: {
            sousActe: {
              acte: { id_Dep: departmentId }
            },
            Date_Realise: { gte: startDate, lte: endDate }
          }
        });

        const paiement = await prisma.pAIEMENT.count({
          where: {
            etudiant: { id_Dep: departmentId },
            Date_Paie: { gte: startDate, lte: endDate },
            Statut_Paie: { in: ["TOTAL", "PARTIEL"] }
          }
        });

        const quota = await prisma.rEALISATION.count({
          where: {
            sousActe: {
              acte: { id_Dep: departmentId }
            },
            Date_Realise: { gte: startDate, lte: endDate },
            Statut_Valide: true
          }
        });

        return {
          name: month.name,
          realisation,
          paiement,
          quota,
        };
      })
    );

    return NextResponse.json(
      {
        statistics,
        totalStats: {
          totalRealisations: statistics.reduce((s, m) => s + m.realisation, 0),
          totalPaiements: statistics.reduce((s, m) => s + m.paiement, 0),
          totalQuotasValides: statistics.reduce((s, m) => s + m.quota, 0),
        },
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
