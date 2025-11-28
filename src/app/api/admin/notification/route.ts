"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";// import createClient only if you need Supabase actions here
// import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

// import { prisma } from "@/lib/prisma";

// RÉCUPÉRER toutes les notifs destinées aux admins
export async function GET() {
  try {
    // Ici on suppose que les notifications pour les admins ont id_Admin non null.
    // Si tu veux filtrer par Type, utilise: where: { Type: "PAIEMENT" } (enum TypeNotification).
    const notifications = await prisma.nOTIFICATION.findMany({
      where: { id_Admin: { not: null } },
      orderBy: { Date_Envoi: "desc" },
    });

    // Mapper Lu -> Read pour le client (plus lisible)
    const formatted = notifications.map((n) => ({
      ID_Notification: n.ID_Notification,
      Message: n.Message,
      Read: !!n.Lu,
      Date_Envoi: n.Date_Envoi.toISOString(),
      // tu peux ajouter d'autres champs si utile (ex: id_Paie, id_Etudiant ...)
    }));

    return NextResponse.json({ notifications: formatted }, { status: 200 });
  } catch (error) {
    console.error("GET /api/admin/notification error:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}

// MARQUER comme lue (Lu=true)
export async function PATCH(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const idParam = searchParams.get("id");

    if (!idParam) {
      return NextResponse.json({ message: "id manquant" }, { status: 400 });
    }

    const id = Number(idParam);
    if (Number.isNaN(id)) {
      return NextResponse.json({ message: "id invalide" }, { status: 400 });
    }

    // vérifier existence
    const notif = await prisma.nOTIFICATION.findUnique({
      where: { ID_Notification: id },
    });

    if (!notif) {
      return NextResponse.json({ message: "Notification introuvable" }, { status: 404 });
    }

    // mettre à jour le champ Lu (dans Prisma le champ s'appelle 'Lu')
    const updated = await prisma.nOTIFICATION.update({
      where: { ID_Notification: id },
      data: { Lu: true },
    });

    // renvoyer objet friendly pour le client
    const result = {
      ID_Notification: updated.ID_Notification,
      Message: updated.Message,
      Read: !!updated.Lu,
      Date_Envoi: updated.Date_Envoi.toISOString(),
    };

    return NextResponse.json({ notif: result }, { status: 200 });
  } catch (error) {
    console.error("PATCH /api/admin/notification error:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
