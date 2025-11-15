
// "use server";

// import { NextResponse } from "next/server";
// import { PrismaClient } from "@/generated/prisma";
// import { createClient } from "@/utils/supabase/server"; // pour broadcast realtime

// const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   try {
//     const { etudiantId, sousActeId, quotaId } = await req.json();

//     // 1️⃣ mettre à jour le sous-acte
//     const sousActe = await prisma.sOUS_ACTES.update({
//       where: { ID_SActes: sousActeId },
//       data: {
//         Date_Realise: new Date(),
//         Statut_Valide: false,
//         id_Etudiant: etudiantId,
//       },
//       include: { acte: { include: { departement: true } } },
//     });

//     // 2️⃣ décrémenter le quota
//     await prisma.qUOTAS.update({
//       where: { ID_Quotas: quotaId },
//       data: { Nombre: { decrement: 1 } },
//     });

//     // 3️⃣ récupérer tous les professeurs du même département
//     const profs = await prisma.pROFESSEURS.findMany({
//       where: {
//         departements: {
//           some: { ID_Dep: sousActe.acte.departement.ID_Dep },
//         },
//       },
//     });

//     // 4️⃣ créer une notification pour chaque prof
//     const notifications = await prisma.$transaction(
//       profs.map((prof) =>
//         prisma.nOTIFICATION.create({
//           data: {
//             Message: `L'étudiant a réalisé le sous-acte "${sousActe.Desc_SActes}" à évaluer.`,
//             Type: "REALISATION",
//             id_SActes: sousActeId,
//             id_Prof: prof.ID_Prof,
//           },
//         })
//       )
//     );

//     // 5️⃣ broadcast via Supabase Realtime
//     const supabase = await createClient(); // ✅ ajouter "await" ici
//     await supabase.channel("notifications").send({
//       type: "broadcast",
//       event: "new_notification",
//       payload: { notifications },
//     });

//     return NextResponse.json({ success: true, sousActe, notifications });
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
import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { etudiantId, sousActeId, quotaId } = await req.json();

    // 1️⃣ Vérifier le quota restant
    const quota = await prisma.qUOTAS.findUnique({
      where: { ID_Quotas: quotaId },
      include: { sous_actes: true },
    });

    if (!quota || quota.Nombre <= 0) {
      return NextResponse.json(
        { success: false, message: "Quota épuisé." },
        { status: 400 }
      );
    }

    // 2️⃣ Créer une réalisation
    const realisation = await prisma.rEALISATION.create({
      data: {
        Date_Realise: new Date(),
        Statut_Valide: false,
        id_Etudiant: etudiantId,
        id_SActes: sousActeId,
      },
      include: { sousActe: { include: { acte: { include: { departement: true } } } } },
    });

    // 3️⃣ Décrémenter le quota
    await prisma.qUOTAS.update({
      where: { ID_Quotas: quotaId },
      data: { Nombre: { decrement: 1 } },
    });

    // 4️⃣ Si le quota atteint 0, il sera filtré côté front (ou on peut retourner une info)
    const remainingQuota = quota.Nombre - 1;

    // 5️⃣ Notifier les professeurs du même département
    const profs = await prisma.pROFESSEURS.findMany({
      where: {
        departements: {
          some: { ID_Dep: realisation.sousActe.acte.departement.ID_Dep },
        },
      },
    });

    const notifications = await prisma.$transaction(
      profs.map((prof) =>
        prisma.nOTIFICATION.create({
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

    // 6️⃣ Broadcast via Supabase Realtime
    const supabase = await createClient();
    await supabase.channel("notifications").send({
      type: "broadcast",
      event: "new_notification",
      payload: { notifications },
    });

    return NextResponse.json({
      success: true,
      realisation,
      remainingQuota,
      notifications,
    });
  } catch (error) {
    console.error("Erreur lors de la réalisation:", error);
    return NextResponse.json(
      { success: false, message: "Erreur lors de la réalisation" },
      { status: 500 }
    );
  }
}
