// "use server";

// import { createClient } from "@/utils/supabase/server";
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/db/db";

// export async function GET() {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
//   }

//   // Etudiant + departement
//   const etudiant = await prisma.eTUDIANT.findUnique({
//     where: { user_id: user.id },
//   });

//   if (!etudiant) {
//     return NextResponse.json({ error: "Étudiant introuvable" }, { status: 404 });
//   }

//   const quotas = await prisma.qUOTAS.findMany({
//     where: {
//       id_Dep: etudiant.id_Dep,
//       Annee: etudiant.Annee_Et,
//     },
//     include: {
//       sous_actes: true,
//     }
//   });

//   return NextResponse.json(
//     JSON.parse(JSON.stringify(quotas))
//   );

// }

"use server";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/db";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // Récupérer l'étudiant
    const etudiant = await prisma.eTUDIANT.findUnique({
      where: { user_id: user.id },
    });

    if (!etudiant) {
      return NextResponse.json(
        { error: "Étudiant introuvable" },
        { status: 404 }
      );
    }

    // Récupérer les quotas du département + année
    const quotas = await prisma.qUOTAS.findMany({
      where: {
        id_Dep: etudiant.id_Dep,
        Annee: etudiant.Annee_Et,
      },
      include: {
        sous_actes: true,
      },
    });

    return NextResponse.json(quotas);

  } catch (error: any) {
    console.error("🔥 ERREUR SERVEUR /api/students/quotas :", error);

    return NextResponse.json(
      {
        error: "Erreur interne",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
