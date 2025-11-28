// "use server";

// import { NextResponse } from "next/server";

// import { createClient } from "@/utils/supabase/server";
// import { PrismaClient } from "../../../../../../generated/prisma";

// const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   try {
//     const { etudiantId, sousActeId, quotaId } = await req.json();

//     // 1️⃣ Vérifier le quota restant
//     const quota = await prisma.qUOTAS.findUnique({
//       where: { ID_Quotas: quotaId },
//       include: { sous_actes: true },
//     });

//     if (!quota || quota.Nombre <= 0) {
//       return NextResponse.json(
//         { success: false, message: "Quota épuisé." },
//         { status: 400 }
//       );
//     }

//     // 2️⃣ Créer une réalisation
//     const realisation = await prisma.rEALISATION.create({
//       data: {
//         Date_Realise: new Date(),
//         Statut_Valide: false,
//         id_Etudiant: etudiantId,
//         id_SActes: sousActeId,
//       },
//       include: { sousActe: { include: { acte: { include: { departement: true } } } } },
//     });

//     // 3️⃣ Décrémenter le quota
//     await prisma.qUOTAS.update({
//       where: { ID_Quotas: quotaId },
//       data: { Nombre: { decrement: 1 } },
//     });

//     // 4️⃣ Si le quota atteint 0, il sera filtré côté front (ou on peut retourner une info)
//     const remainingQuota = quota.Nombre - 1;

//     // 5️⃣ Notifier les professeurs du même département
//     const profs = await prisma.pROFESSEURS.findMany({
//       where: {
//         departements: {
//           some: { ID_Dep: realisation.sousActe.acte.departement.ID_Dep },
//         },
//       },
//     });

//     const notifications = await prisma.$transaction(
//       profs.map((prof) =>
//         prisma.nOTIFICATION.create({
//           data: {
//             Message: `L'étudiant a réalisé le sous-acte "${realisation.sousActe.Desc_SActes}" à évaluer.`,
//             Type: "REALISATION",
//             id_SActes: sousActeId,
//             id_Prof: prof.ID_Prof,
//             id_Realisation: realisation.ID_Realisation,
//           },
//         })
//       )
//     );

//     // 6️⃣ Broadcast via Supabase Realtime
//     const supabase = await createClient();
//     await supabase.channel("notifications").send({
//       type: "broadcast",
//       event: "new_notification",
//       payload: { notifications },
//     });

//     return NextResponse.json({
//       success: true,
//       realisation,
//       remainingQuota,
//       notifications,
//     });
//   } catch (error) {
//     console.error("Erreur lors de la réalisation:", error);
//     return NextResponse.json(
//       { success: false, message: "Erreur lors de la réalisation" },
//       { status: 500 }
//     );
//   }
// }


"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { PrismaClient } from "../../../../../../generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { etudiantId, sousActeId, quotaId } = await req.json();

    // 🛡️ Vérifier que quotaId, sousActeId et etudiantId existent
    if (!etudiantId || !sousActeId || !quotaId) {
      return NextResponse.json(
        { success: false, message: "Paramètres manquants." },
        { status: 400 }
      );
    }

    // 🛡️ Vérifier le quota mais ne pas décrémenter
    const quota = await prisma.qUOTAS.findUnique({
      where: { ID_Quotas: quotaId },
      include: { sous_actes: true },
    });

    if (!quota) {
      return NextResponse.json(
        { success: false, message: "Quota introuvable." },
        { status: 404 }
      );
    }

    if (quota.Nombre <= 0) {
      return NextResponse.json(
        { success: false, message: "Quota épuisé." },
        { status: 400 }
      );
    }

    // 🟦  TRANSACTION GLOBALE
    const result = await prisma.$transaction(async (tx) => {
      // 1️⃣ Créer la réalisation
      const realisation = await tx.rEALISATION.create({
        data: {
          Date_Realise: new Date(),
          Statut_Valide: false,
          id_Etudiant: etudiantId,
          id_SActes: sousActeId,
        },
        include: {
          sousActe: {
            include: {
              acte: { include: { departement: true } }
            }
          }
        }
      });

      // 2️⃣ Trouver les professeurs du département
      const profs = await tx.pROFESSEURS.findMany({
        where: {
          departements: {
            some: { ID_Dep: realisation.sousActe.acte.departement.ID_Dep },
          },
        },
      });

      // 3️⃣ Créer toutes les notifications
      const notifications = await Promise.all(
        profs.map((prof) =>
          tx.nOTIFICATION.create({
            data: {
              Message: `L'étudiant a réalisé le sous-acte "${realisation.sousActe.Desc_SActes}" à évaluer.`,
              Type: "REALISATION",
              id_SActes: sousActeId,
              id_Prof: prof.ID_Prof,
              id_Realisation: realisation.ID_Realisation,
            },
          })
        )
      );

      return { realisation, notifications };
    });

    // 🟧 4️⃣ Broadcast hors de la transaction (important!)
    const supabase = await createClient();
    await supabase.channel("notifications").send({
      type: "broadcast",
      event: "new_notification",
      payload: { notifications: result.notifications },
    });

    return NextResponse.json({
      success: true,
      realisation: result.realisation,
      notifications: result.notifications,
    });

  } catch (error) {
    console.error("Erreur lors de la réalisation:", error);
    return NextResponse.json(
      { success: false, message: "Erreur lors de la réalisation" },
      { status: 500 }
    );
  }
}
