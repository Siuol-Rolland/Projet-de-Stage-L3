"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

/**
 * Récupère l'ID du professeur connecté à partir de la session Supabase
 */
async function getProfId(req: Request) {
  const supabase = await createClient(); // 👈 ajouter await
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Utilisateur non authentifié");
  }

  const prof = await prisma.pROFESSEURS.findUnique({
    where: { user_id: user.id },
  });

  if (!prof) {
    throw new Error("Aucun professeur associé à cet utilisateur");
  }

  return prof.ID_Prof;
}


export async function GET(req: Request) {
  try {
    const profId = await getProfId(req);

    const notifications = await prisma.nOTIFICATION.findMany({
      where: { id_Prof: profId, Lu: false },
      orderBy: { Date_Envoi: "desc" },
    });

    return NextResponse.json({ notifications });
  } catch (error) {
    console.error("Erreur GET notifications :", error);
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 401 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const notifId = Number(searchParams.get("id"));
    const profId = await getProfId(req);

    const notif = await prisma.nOTIFICATION.findUnique({
      where: { ID_Notification: notifId },
    });

    if (!notif || notif.id_Prof !== profId) {
      return NextResponse.json(
        { success: false, message: "Non autorisé à modifier cette notification" },
        { status: 403 }
      );
    }

    const updated = await prisma.nOTIFICATION.update({
      where: { ID_Notification: notifId },
      data: { Lu: true },
    });

    return NextResponse.json({ success: true, notif: updated });
  } catch (error) {
    console.error("Erreur PATCH notification :", error);
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 401 }
    );
  }
}
