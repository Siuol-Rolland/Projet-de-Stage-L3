import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
    }

    // 🧑‍🎓 Trouver l'étudiant lié au user Supabase
    const etudiant = await prisma.eTUDIANT.findUnique({
      where: { user_id: user.id },
    });

    if (!etudiant) {
      return NextResponse.json({ error: "Étudiant introuvable" }, { status: 404 });
    }

    // 📌 Récupérer les réalisations avec sous-acte
    const realisations = await prisma.rEALISATION.findMany({
      where: { id_Etudiant: etudiant.ID_Etudiant },
      include: { sousActe: true }
    });

    return NextResponse.json(realisations);
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur", details: error }, { status: 500 });
  }
}
