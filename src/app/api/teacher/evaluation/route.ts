"use server";


import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";



export async function GET() {
  try {
    // On récupère les étudiants qui ont au moins une réalisation
    const students = await prisma.eTUDIANT.findMany({
      where: {
        realisations: {
          some: {}, // au moins une réalisation
        },
      },
      include: {
        realisations: {
          include: {
            sousActe: true,
          },
        },
        departement: true,
      },
    });

    // Transformer les données pour le front
    const result = students.flatMap((etudiant) =>
      etudiant.realisations.map((real) => ({
        ID_Realisation: real.ID_Realisation,
        Nom: etudiant.FullName_Et,
        annee: etudiant.Annee_Et,
        departement: etudiant.departement.Nom_Dep,
        Note: real.Note,
        sousActe: {
          Desc_SActes: real.sousActe.Desc_SActes,
          Prix: real.sousActe.Prix,
        },
        photoUrl: etudiant.Photo_Et,
        Date_Realise: real.Date_Realise,
      }))
    );

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
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
