// "use server";

// import { NextResponse } from "next/server";
// import { PrismaClient } from "@/generated/prisma";

// const prisma = new PrismaClient();

// // ⚙️ Étudiant réalise un sous-acte (action)
// export async function POST(req: Request) {
//   try {
//     const { etudiantId, sousActeId, quotaId } = await req.json();

//     // 1️⃣ Créer une réalisation (mettre à jour le sous-acte)
//     const sousActe = await prisma.sOUS_ACTES.update({
//       where: { ID_SActes: sousActeId },
//       data: {
//         Date_Realise: new Date(),
//         Statut_Valide: false, // pas encore évalué
//       },
//     });

//     // 2️⃣ Décrémenter le quota
//     await prisma.qUOTAS.update({
//       where: { ID_Quotas: quotaId },
//       data: {
//         Nombre: { decrement: 1 },
//       },
//     });

//     // 3️⃣ (Optionnel) notifier les professeurs : ici on simule l’envoi
//     console.log(
//       `Notification envoyée aux professeurs : Le sous-acte ${sousActe.Desc_SActes} a été réalisé par un étudiant.`
//     );

//     return NextResponse.json(
//       { success: true, sousActe },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Erreur lors de la réalisation :", error);
//     return NextResponse.json(
//       { success: false, message: "Erreur lors de la réalisation." },
//       { status: 500 }
//     );
//   }
// }

"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { createClient } from "@/utils/supabase/server"; // pour broadcast realtime

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { etudiantId, sousActeId, quotaId } = await req.json();

    // 1️⃣ mettre à jour le sous-acte
    const sousActe = await prisma.sOUS_ACTES.update({
      where: { ID_SActes: sousActeId },
      data: {
        Date_Realise: new Date(),
        Statut_Valide: false,
        id_Etudiant: etudiantId,
      },
      include: { acte: { include: { departement: true } } },
    });

    // 2️⃣ décrémenter le quota
    await prisma.qUOTAS.update({
      where: { ID_Quotas: quotaId },
      data: { Nombre: { decrement: 1 } },
    });

    // 3️⃣ récupérer tous les professeurs du même département
    const profs = await prisma.pROFESSEURS.findMany({
      where: {
        departements: {
          some: { ID_Dep: sousActe.acte.departement.ID_Dep },
        },
      },
    });

    // 4️⃣ créer une notification pour chaque prof
    const notifications = await prisma.$transaction(
      profs.map((prof) =>
        prisma.nOTIFICATION.create({
          data: {
            Message: `L'étudiant a réalisé le sous-acte "${sousActe.Desc_SActes}" à évaluer.`,
            Type: "REALISATION",
            id_SActes: sousActeId,
            id_Prof: prof.ID_Prof,
          },
        })
      )
    );

    // 5️⃣ broadcast via Supabase Realtime
    const supabase = await createClient(); // ✅ ajouter "await" ici
    await supabase.channel("notifications").send({
      type: "broadcast",
      event: "new_notification",
      payload: { notifications },
    });

    return NextResponse.json({ success: true, sousActe, notifications });
  } catch (error) {
    console.error("Erreur lors de la réalisation:", error);
    return NextResponse.json(
      { success: false, message: "Erreur lors de la réalisation" },
      { status: 500 }
    );
  }
}
