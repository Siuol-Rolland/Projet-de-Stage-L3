/*
  Warnings:

  - You are about to drop the column `Date_Realise` on the `SOUS_ACTES` table. All the data in the column will be lost.
  - You are about to drop the column `Note` on the `SOUS_ACTES` table. All the data in the column will be lost.
  - You are about to drop the column `Statut_Valide` on the `SOUS_ACTES` table. All the data in the column will be lost.
  - You are about to drop the column `id_Etudiant` on the `SOUS_ACTES` table. All the data in the column will be lost.
  - You are about to drop the column `id_Prof` on the `SOUS_ACTES` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."SOUS_ACTES" DROP CONSTRAINT "SOUS_ACTES_id_Etudiant_fkey";

-- DropForeignKey
ALTER TABLE "public"."SOUS_ACTES" DROP CONSTRAINT "SOUS_ACTES_id_Prof_fkey";

-- AlterTable
ALTER TABLE "SOUS_ACTES" DROP COLUMN "Date_Realise",
DROP COLUMN "Note",
DROP COLUMN "Statut_Valide",
DROP COLUMN "id_Etudiant",
DROP COLUMN "id_Prof";
