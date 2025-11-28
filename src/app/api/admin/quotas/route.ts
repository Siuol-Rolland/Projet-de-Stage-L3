"use server"

import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return NextResponse.json({ error: "Non authentifié"}, { status: 401 });
    }

    const admin = await prisma.aDMINISTRATEUR.findUnique({
      where: { user_id: user.id }
    });

    if (!admin) {
      return NextResponse.json({ error: "Admin introuvable" }, { status: 403 });
    }

    const body = await req.json();
    const { 
      annee, 
      departementId, 
      dateDebut, 
      dateFin, 
      sousActesList 
    } = body;

    if (!annee || !departementId || !dateDebut || !dateFin || !sousActesList || sousActesList.length === 0) {
      return NextResponse.json(
        { success: false, error: "Champs manquants pour l'insertion du quota." },
        { status: 400 }
      );
    }

    // On crée plusieurs quotas
    const createdQuotas = [];

    for (const item of sousActesList) {
      const quota = await prisma.qUOTAS.create({
        data: {
          Annee: annee,
          Date_Debut: new Date(dateDebut),
          Date_Fin: new Date(dateFin),
          Nombre: item.nombre,                          // OBLIGATOIRE
          departement: { connect: { ID_Dep: departementId } },
          admin: { connect: { ID_Admin: admin.ID_Admin } },
          sous_actes: {
            connect: { ID_SActes: item.sousActeId }
          }
        },
        include: {
          sous_actes: true,
          departement: true
        }
      });

      createdQuotas.push(quota);
    }

    return NextResponse.json({
      success: true,
      message: "Quotas ajoutés avec succès.",
      quotas: createdQuotas,
    });

  } catch (error) {
    console.error("Erreur lors de la création du quota :", error);
    return NextResponse.json(
      { success: false, error: "Erreur interne du serveur." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  try {
    const quotas = await prisma.qUOTAS.findMany({
      include: {
        departement: true,
        
        sous_actes: {
          include: {
            realisations: true,
            
          }
        }
      }
    });

    // Transformer les données pour ton frontend
    const formatted = quotas.map((q) => ({
      id: q.ID_Quotas,
      annee: q.Annee,
      departement: q.departement ? q.departement.Nom_Dep : "",
      dateDebut: q.Date_Debut,
      dateFin: q.Date_Fin,
      sousActes: q.sous_actes.map((sa) => ({
        id: sa.ID_SActes,
        sousActe: sa.Desc_SActes,
        prix: sa.Prix,
        nombre: q.Nombre // même nombre pour tous
      }))
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 200 });
  }
}