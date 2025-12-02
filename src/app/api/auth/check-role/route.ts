// "use server";
// import { NextResponse } from "next/server";
// import { PrismaClient } from "../../../../../generated/prisma";

// import { prisma } from "@/lib/db/db";

// export async function POST(req: Request) {
//   try {
//     const { user_id } = await req.json();

//     // 🔹 Vérifie si c’est un admin
//     const admin = await prisma.aDMINISTRATEUR.findUnique({
//       where: { user_id },
//     });
//     if (admin) return NextResponse.json({ role: "admin" });

//     // 🔹 Vérifie si c’est un prof
//     const prof = await prisma.pROFESSEURS.findUnique({
//       where: { user_id },
//     });
//     if (prof) return NextResponse.json({ role: "teacher" });

//     // 🔹 Vérifie si c’est un étudiant
//     const etudiant = await prisma.eTUDIANT.findUnique({
//       where: { user_id },
//     });
//     if (etudiant) return NextResponse.json({ role: "student" });

//     // Aucun rôle trouvé
//     return NextResponse.json({ role: null });
//   } catch (error) {
//     console.error("Erreur check-role:", error);
//     return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
//   }
// }

"use server";
import { NextResponse } from "next/server";

import { createClient as createSupabaseServerClient } from "@/utils/supabase/server";
import { PrismaClient } from "../../../../../generated/prisma";

import { prisma } from "@/lib/db/db";

export async function POST(req: Request) {
  try {
    // 1️⃣ Créer le client Supabase côté serveur
    const supabase = await createSupabaseServerClient();

    // 2️⃣ Récupérer l'utilisateur actuel à partir du token dans les cookies
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      return NextResponse.json({ role: null }, { status: 401 });
    }

    const userId = user.id;

    // 3️⃣ Vérifier le rôle dans Prisma
    const admin = await prisma.aDMINISTRATEUR.findUnique({ where: { user_id: userId } });
    if (admin) return NextResponse.json({ role: "admin" });

    const prof = await prisma.pROFESSEURS.findUnique({ where: { user_id: userId } });
    if (prof) return NextResponse.json({ role: "teacher" });

    const etudiant = await prisma.eTUDIANT.findUnique({ where: { user_id: userId } });
    if (etudiant) return NextResponse.json({ role: "student" });

    return NextResponse.json({ role: null });
  } catch (error) {
    console.error("Erreur check-role:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
