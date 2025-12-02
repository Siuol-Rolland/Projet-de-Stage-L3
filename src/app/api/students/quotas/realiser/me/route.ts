"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "../../../../../../../generated/prisma";

import { prisma } from "@/lib/db/db";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user)
      return NextResponse.json([], { status: 200 });

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
    return NextResponse.json([], { status: 500 });
  }
}
