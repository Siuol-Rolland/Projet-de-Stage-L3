import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// ⚙️ Étudiant réalise un sous-acte (action)
export async function POST(req: Request) {
  try {
    const { etudiantId, sousActeId, quotaId } = await req.json();

    // 1️⃣ Créer une réalisation (mettre à jour le sous-acte)
    const sousActe = await prisma.sOUS_ACTES.update({
      where: { ID_SActes: sousActeId },
      data: {
        Date_Realise: new Date(),
        Statut_Valide: false, // pas encore évalué
      },
    });

    // 2️⃣ Décrémenter le quota
    await prisma.qUOTAS.update({
      where: { ID_Quotas: quotaId },
      data: {
        Nombre: { decrement: 1 },
      },
    });

    // 3️⃣ (Optionnel) notifier les professeurs : ici on simule l’envoi
    console.log(
      `Notification envoyée aux professeurs : Le sous-acte ${sousActe.Desc_SActes} a été réalisé par un étudiant.`
    );

    return NextResponse.json(
      { success: true, sousActe },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la réalisation :", error);
    return NextResponse.json(
      { success: false, message: "Erreur lors de la réalisation." },
      { status: 500 }
    );
  }
}
