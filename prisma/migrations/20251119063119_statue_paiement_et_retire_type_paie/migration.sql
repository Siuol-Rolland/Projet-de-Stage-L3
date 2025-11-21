/*
  Warnings:

  - You are about to drop the column `Type_Paie` on the `PAIEMENT` table. All the data in the column will be lost.
  - Changed the type of `Statut_Paie` on the `PAIEMENT` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StatutPaiement" AS ENUM ('EN_ATTENTE', 'PARTIEL', 'TOTAL', 'ANNULE');

-- AlterTable
ALTER TABLE "PAIEMENT" DROP COLUMN "Type_Paie",
DROP COLUMN "Statut_Paie",
ADD COLUMN     "Statut_Paie" "StatutPaiement" NOT NULL;
