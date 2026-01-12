"use server"

import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { prisma } from "@/lib/db/db"

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 })
  }

  const etudiant = await prisma.eTUDIANT.findUnique({
    where: { user_id: user.id },
  })

  if (!etudiant) {
    return NextResponse.json({ error: "Étudiant introuvable" }, { status: 404 })
  }

  const realiseNote = await prisma.rEALISATION.findMany({
    where: {
      id_Etudiant: etudiant.ID_Etudiant,
      Note: { not: null },
    },
    include: {
      sousActe: { select: { Desc_SActes: true } },
    },
    orderBy: { Date_Realise: "desc" },
    take: 2,
  })

  const realiseNonNote = await prisma.rEALISATION.findMany({
    where: {
      id_Etudiant: etudiant.ID_Etudiant,
      Note: null,
    },
    include: {
      sousActe: { select: { Desc_SActes: true } },
    },
    orderBy: { Date_Realise: "desc" },
    take: 2,
  })

  return NextResponse.json({
    notees: realiseNote,
    nonNotees: realiseNonNote,
  })
}
