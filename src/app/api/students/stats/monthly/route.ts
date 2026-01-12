// import { NextResponse } from "next/server"
// import { createClient } from "@/utils/supabase/server"
// import { prisma } from "@/lib/db/db"

// export async function GET() {
//   const session = await getServerSession()

//   if (!session?.user?.id) {
//     return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
//   }

//   const etudiant = await db.eTUDIANT.findUnique({
//     where: { user_id: session.user.id },
//   })

//   if (!etudiant) {
//     return NextResponse.json({ error: "Étudiant introuvable" }, { status: 404 })
//   }

//   /** 🔹 Récupération des données */
//   const realisations = await db.rEALISATION.findMany({
//     where: { id_Etudiant: etudiant.ID_Etudiant },
//     include: { paiement: true },
//   })

//   /** 🔹 Agrégation mensuelle */
//   const stats: Record<string, any> = {}

//   realisations.forEach((r) => {
//     const date = new Date(r.Date_Realise)
//     const key = date.toLocaleString("fr-FR", {
//       month: "short",
//       year: "numeric",
//     })

//     if (!stats[key]) {
//       stats[key] = {
//         name: key,
//         realisation: 0,
//         paiement: 0,
//         quota: 0,
//       }
//     }

//     // Réalisations
//     stats[key].realisation += 1

//     // Paiements TOTAL ou PARTIEL
//     if (
//       r.paiement &&
//       (r.paiement.Statut_Paie === "TOTAL" ||
//         r.paiement.Statut_Paie === "PARTIEL")
//     ) {
//       stats[key].paiement += 1
//     }

//     // Quota validé = réalisation validée
//     if (r.Statut_Valide) {
//       stats[key].quota += 1
//     }
//   })

//   return NextResponse.json(Object.values(stats))
// }
