"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/lib/db/db";

/* ================= UTILITAIRES ================= */

function getYearMonth(date: Date) {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${y}-${m}`; // ex: 2025-11
}

function formatYearMonth(key: string) {
  const [y, m] = key.split("-");
  const monthNames = [
    "Jan", "Fév", "Mar", "Avr", "Mai", "Jun",
    "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc",
  ];
  return `${monthNames[Number(m) - 1]} ${y}`;
}

/* ================= API ================= */

export async function GET(request: Request) {
  try {
    /* ---------- Auth Supabase ---------- */
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const admin = await prisma.aDMINISTRATEUR.findUnique({
      where: { user_id: user.id },
    });

    if (!admin) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    /* ---------- Params ---------- */
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("mode") ?? "year";
    const year = Number(searchParams.get("year") ?? new Date().getFullYear());

    let start: Date | undefined;
    let end: Date | undefined;

    if (mode === "year") {
      start = new Date(year, 0, 1);
      end = new Date(year, 11, 31, 23, 59, 59);
    }

    /* ================= DONNÉES ================= */

    // Réalisations
    const realisations = await prisma.rEALISATION.findMany({
      select: { Date_Realise: true },
      where: mode === "year"
        ? { Date_Realise: { gte: start, lte: end } }
        : undefined,
    });

    // Quotas validés
    const quotas = await prisma.rEALISATION.findMany({
      select: { Date_Realise: true },
      where: {
        Statut_Valide: true,
        ...(mode === "year"
          ? { Date_Realise: { gte: start, lte: end } }
          : {}),
      },
    });

    // Paiements (TOTAL + PARTIEL)
    const paiements = await prisma.pAIEMENT.findMany({
      select: { Date_Paie: true },
      where: {
        Statut_Paie: { in: ["TOTAL", "PARTIEL"] },
        ...(mode === "year"
          ? { Date_Paie: { gte: start, lte: end } }
          : {}),
      },
    });

    /* ================= AGRÉGATION PAR ANNÉE + MOIS ================= */

    const map: Record<
      string,
      { realisation: number; paiement: number; quota: number }
    > = {};

    // Réalisations
    for (const r of realisations) {
      const key = getYearMonth(new Date(r.Date_Realise));
      if (!map[key]) map[key] = { realisation: 0, paiement: 0, quota: 0 };
      map[key].realisation++;
    }

    // Quotas
    for (const q of quotas) {
      const key = getYearMonth(new Date(q.Date_Realise));
      if (!map[key]) map[key] = { realisation: 0, paiement: 0, quota: 0 };
      map[key].quota++;
    }

    // Paiements
    for (const p of paiements) {
      const key = getYearMonth(new Date(p.Date_Paie));
      if (!map[key]) map[key] = { realisation: 0, paiement: 0, quota: 0 };
      map[key].paiement++;
    }

    /* ================= FORMAT FINAL POUR LE FRONTEND ================= */

    const data = Object.keys(map)
      .sort() // ordre chronologique
      .map((key) => ({
        name: formatYearMonth(key), // ex: "Nov 2025"
        realisationCount: map[key].realisation,
        paiementCount: map[key].paiement,
        quotaCount: map[key].quota,
      }));

    return NextResponse.json({
      success: true,
      mode,
      data,
    });

  } catch (error) {
    console.error("Erreur histogramme:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
