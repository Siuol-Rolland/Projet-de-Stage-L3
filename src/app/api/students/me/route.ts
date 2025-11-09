"use server";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const etudiant = await prisma.eTUDIANT.findUnique({
    where: { user_id: user.id },
    include: {
      departement: true,
    },
  });

  if (!etudiant) {
    return NextResponse.json({ error: "Étudiant introuvable" }, { status: 404 });
  }

  return NextResponse.json(etudiant);
}
