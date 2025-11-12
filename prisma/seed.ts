import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Démarrage du seed...');

  // 1️⃣ — Création de départements
  const depDentaire = await prisma.dEPARTEMENT.create({
    data: { Nom_Dep: 'Dentisterie' },
  });

  const depChirurgie = await prisma.dEPARTEMENT.create({
    data: { Nom_Dep: 'Chirurgie Buccale' },
  });

  console.log('✅ Départements créés');

  // 2️⃣ — Création d’un administrateur
  const adminPass = await bcrypt.hash('Admin@123', 10);
  const admin = await prisma.aDMINISTRATEUR.create({
    data: {
      Nom_Admin: 'Admin Principal',
      Email_Admin: 'admin@iostm.mg',
      MotPass_Admin: adminPass,
      user_id: 'fake-userid-admin', // normalement récupéré depuis Supabase
    },
  });

  console.log('✅ Administrateur créé');

  // 3️⃣ — Création de professeurs
  const profPass = await bcrypt.hash('Prof@123', 10);
  const prof1 = await prisma.pROFESSEURS.create({
    data: {
      Nom_Prof: 'Dr Rakoto',
      Email_Prof: 'rakoto@iostm.mg',
      MotPass_Prof: profPass,
      user_id: 'fake-userid-prof1',
      departements: {
        connect: [{ ID_Dep: depDentaire.ID_Dep }],
      },
    },
  });

  const prof2 = await prisma.pROFESSEURS.create({
    data: {
      Nom_Prof: 'Dr Rasoa',
      Email_Prof: 'rasoa@iostm.mg',
      MotPass_Prof: profPass,
      user_id: 'fake-userid-prof2',
      departements: {
        connect: [{ ID_Dep: depChirurgie.ID_Dep }],
      },
    },
  });

  console.log('✅ Professeurs créés');

  // 4️⃣ — Création d’étudiants
  const etuPass = await bcrypt.hash('Etudiant@123', 10);
  const etudiant1 = await prisma.eTUDIANT.create({
    data: {
      FullName_Et: 'Randria Mamy',
      Email_Et: 'mamy@iostm.mg',
      MotPass_Et: etuPass,
      user_id: 'fake-userid-et1',
      Annee_Et: '3ème année',
      id_Dep: depDentaire.ID_Dep,
      Dette: 0,
    },
  });

  const etudiant2 = await prisma.eTUDIANT.create({
    data: {
      FullName_Et: 'Rabe Tiana',
      Email_Et: 'tiana@iostm.mg',
      MotPass_Et: etuPass,
      user_id: 'fake-userid-et2',
      Annee_Et: '4ème année',
      id_Dep: depChirurgie.ID_Dep,
      Dette: 150000,
    },
  });

  console.log('✅ Étudiants créés');

  // 5️⃣ — Création d’actes et sous-actes
  const acte1 = await prisma.aCTES.create({
    data: {
      Desc_Actes: 'Extraction dentaire',
      id_Dep: depDentaire.ID_Dep,
    },
  });

  const acte2 = await prisma.aCTES.create({
    data: {
      Desc_Actes: 'Soins prothétiques',
      id_Dep: depChirurgie.ID_Dep,
    },
  });

  const sous1 = await prisma.sOUS_ACTES.create({
    data: {
      Desc_SActes: 'Extraction simple',
      Prix: 50000,
      Statut_Valide: false,
      id_Actes: acte1.ID_Actes,
      id_Etudiant: etudiant1.ID_Etudiant,
      id_Prof: prof1.ID_Prof,
    },
  });

  const sous2 = await prisma.sOUS_ACTES.create({
    data: {
      Desc_SActes: 'Couronne céramique',
      Prix: 200000,
      Statut_Valide: true,
      Date_Realise: new Date(),
      id_Actes: acte2.ID_Actes,
      id_Etudiant: etudiant2.ID_Etudiant,
      id_Prof: prof2.ID_Prof,
    },
  });

  console.log('✅ Actes et Sous-actes créés');

  // 6️⃣ — Création d’un quota
  const quota = await prisma.qUOTAS.create({
    data: {
      Annee: '2025',
      Nombre: 20,
      Date_Debut: new Date('2025-01-01'),
      Date_Fin: new Date('2025-12-31'),
      id_Dep: depDentaire.ID_Dep,
      id_Admin: admin.ID_Admin,
      sous_actes: {
        connect: [{ ID_SActes: sous1.ID_SActes }],
      },
    },
  });

  console.log('✅ Quotas créés');

  // 7️⃣ — Création d’un paiement
  const paiement = await prisma.pAIEMENT.create({
    data: {
      Montant: 150000,
      Type_Paie: 'Espèces',
      Date_Paie: new Date(),
      Statut_Paie: 'Validé',
      id_Admin: admin.ID_Admin,
      id_Etudiant: etudiant2.ID_Etudiant,
    },
  });

  console.log('✅ Paiement créé');

  console.log('🎉 Seed terminé avec succès !');
}

main()
  .catch((e) => {
    console.error('❌ Erreur pendant le seed :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
