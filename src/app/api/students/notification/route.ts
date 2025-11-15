// // "use server";

// // import { NextResponse } from "next/server";
// // import { PrismaClient } from "@/generated/prisma";
// // import { createClient } from "@/utils/supabase/server";

// // const prisma = new PrismaClient();

// // export async function GET() {
// //   try {
// //     const supabase = await createClient();
// //     const { data: { session }, error: sessionError } = await supabase.auth.getSession();

// //     if (sessionError || !session?.user) {
// //       return NextResponse.json({ error: "Utilisateur non connecté." }, { status: 401 });
// //     }

// //     const userId = session.user.id;

// //     const notifications = await prisma.nOTIFICATION.findMany({
// //       where: { id_Etudiant: userId },
// //       orderBy: { createdAt: "desc" },
// //     });

// //     return NextResponse.json(notifications);
// //   } catch (error: any) {
// //     return NextResponse.json({ error: error.message }, { status: 500 });
// //   }
// // }

// "use server";

// import { NextResponse } from "next/server";
// import { PrismaClient } from "@/generated/prisma";
// import { createClient } from "@/utils/supabase/server";

// const prisma = new PrismaClient();

// /**
//  * Fonction getEtId()
//  * Vérifie l'auth Supabase → trouve l'étudiant → retourne ID_Etudiant
//  */
// async function getEtId() {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     throw new Error("Utilisateur non authentifié");
//   }

//   // Recherche l'étudiant associé à ce user_id Supabase
//   const etudiant = await prisma.eTUDIANT.findUnique({
//     where: { user_id: user.id },
//   });

//   if (!etudiant) {
//     throw new Error("Aucun étudiant associé à cet utilisateur");
//   }

//   return etudiant.ID_Etudiant;
// }

// /**
//  * 🟦 GET : récupérer les notifications de l'étudiant
//  */
// export async function GET(req: Request) {
//   try {
//     const etudiantId = await getEtId();

//     const notifications = await prisma.nOTIFICATION.findMany({
//       where: { id_Etudiant: etudiantId },
//       orderBy: { Date_Envoi: "desc" },
//     });

//     return NextResponse.json({ notifications });
//   } catch (error) {
//     console.error("Erreur GET notifications étudiant :", error);
//     return NextResponse.json(
//       { success: false, message: (error as Error).message },
//       { status: 401 }
//     );
//   }
// }

// /**
//  * 🟧 PATCH : marquer une notification comme lue
//  */
// export async function PATCH(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const notifId = Number(searchParams.get("id"));

//     if (!notifId || isNaN(notifId)) {
//       return NextResponse.json(
//         { success: false, message: "ID de notification invalide" },
//         { status: 400 }
//       );
//     }

//     const etudiantId = await getEtId();

//     // Vérifier si la notif appartient bien à cet étudiant
//     const notif = await prisma.nOTIFICATION.findUnique({
//       where: { ID_Notification: notifId },
//     });

//     if (!notif || notif.id_Etudiant !== etudiantId) {
//       return NextResponse.json(
//         { success: false, message: "Non autorisé à modifier cette notification" },
//         { status: 403 }
//       );
//     }

//     const updated = await prisma.nOTIFICATION.update({
//       where: { ID_Notification: notifId },
//       data: { Lu: true },
//     });

//     return NextResponse.json({ success: true, notif: updated });
//   } catch (error) {
//     console.error("Erreur PATCH notification étudiant :", error);
//     return NextResponse.json(
//       { success: false, message: (error as Error).message },
//       { status: 401 }
//     );
//   }
// }


"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

// Récupérer l'ID de l'étudiant connecté
async function getEtId() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Utilisateur non authentifié");

  const etudiant = await prisma.eTUDIANT.findUnique({
    where: { user_id: user.id },
  });

  if (!etudiant) throw new Error("Aucun étudiant associé à cet utilisateur");

  return etudiant.ID_Etudiant;
}

// 🔹 GET : récupérer les notifications d'évaluation pour l'étudiant
export async function GET(req: Request) {
  try {
    const etudiantId = await getEtId();

    const notifications = await prisma.nOTIFICATION.findMany({
      where: {
        id_Etudiant: etudiantId,
        Type: "EVALUATION", // ← uniquement les notifications d'évaluation
      },
      orderBy: { Date_Envoi: "desc" },
    });

    return NextResponse.json(notifications);
  } catch (error) {
    console.error("Erreur GET notifications étudiant :", error);
    return NextResponse.json([], { status: 200 });
  }
}

// 🔹 PATCH : marquer une notification comme lue
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const notifId = Number(body.id);

    if (!notifId || isNaN(notifId)) {
      return NextResponse.json(
        { success: false, message: "ID de notification invalide" },
        { status: 400 }
      );
    }

    const etudiantId = await getEtId();

    const notif = await prisma.nOTIFICATION.findUnique({
      where: { ID_Notification: notifId },
    });

    if (!notif || notif.id_Etudiant !== etudiantId) {
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
    console.error("Erreur PATCH notification étudiant :", error);
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 401 }
    );
  }
}
