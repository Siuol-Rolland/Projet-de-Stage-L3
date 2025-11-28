"use server";

import { PrismaClient } from "../../../../../generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

export async function GET() {
  // Récupère tous les étudiants avec au moins une réalisation
  const students = await prisma.eTUDIANT.findMany({
    where: {
      realisations: {
        some: {}, // au moins une réalisation
      },
    },
    include: {
      departement: true,
      realisations: {
        select: {
          ID_Realisation: true,
          Note: true,
          id_SActes: true,
          sousActe: {
            select: {
              Desc_SActes: true,
            },
          },
        },
      },
    },
  });

  return new Response(JSON.stringify(students), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  try {
    const { realisationId, note } = await req.json();

    // 🔹 1️⃣ Récupérer l'utilisateur connecté via Supabase
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return new Response("Non authentifié", { status: 401 });
    }

    // 🔹 2️⃣ Récupérer le professeur correspondant à l’utilisateur
    const professeur = await prisma.pROFESSEURS.findUnique({
      where: { user_id: user.id },
    });

    if (!professeur) {
      return new Response("Professeur introuvable", { status: 404 });
    }

    // 🔹 Vérifier si la réalisation existe
    const realisation = await prisma.rEALISATION.findUnique({
      where: { ID_Realisation: realisationId },
      include: { etudiant: true, sousActe: true },
    });

    if (!realisation) {
      return new Response("Réalisation introuvable", { status: 404 });
    }

    // 🔹 Vérifier si déjà évaluée
    if (realisation.Note !== null) {
      return new Response("Cette réalisation est déjà évaluée", { status: 400 });
    }

    // 🔹 Mise à jour de la note et lien avec le professeur
    const updated = await prisma.rEALISATION.update({
      where: { ID_Realisation: realisationId },
      data: {
        Note: note,
        Statut_Valide: true,
        id_Prof: professeur.ID_Prof,
      },
      include: { etudiant: true, sousActe: true },
    });

    // 🔹 3️⃣ Création de la notification pour l'étudiant
    await prisma.nOTIFICATION.create({
      data: {
        Message: `Votre sous-acte "${updated.sousActe.Desc_SActes}" a été évalué par ${professeur.Nom_Prof}.`,
        Type: "EVALUATION",
        id_Etudiant: updated.etudiant.ID_Etudiant,
        id_Realisation: updated.ID_Realisation,
        id_SActes: updated.sousActe.ID_SActes,
        // id_Prof: professeur.ID_Prof,
        Lu: false,
      },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error: any) {
    console.error(error);
    return new Response(`Erreur serveur: ${error.message}`, { status: 500 });
  }
}
