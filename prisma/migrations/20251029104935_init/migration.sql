/*
  Warnings:

  - You are about to drop the column `id_SActes` on the `ACTES` table. All the data in the column will be lost.
  - You are about to drop the column `id_Actes` on the `DEPARTEMENT` table. All the data in the column will be lost.
  - You are about to drop the column `id_Et` on the `DEPARTEMENT` table. All the data in the column will be lost.
  - Added the required column `id_Dep` to the `ACTES` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_Dep` to the `ETUDIANT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_Actes` to the `SOUS_ACTES` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."ACTES" DROP CONSTRAINT "ACTES_id_SActes_fkey";

-- DropForeignKey
ALTER TABLE "public"."DEPARTEMENT" DROP CONSTRAINT "DEPARTEMENT_id_Actes_fkey";

-- DropForeignKey
ALTER TABLE "public"."DEPARTEMENT" DROP CONSTRAINT "DEPARTEMENT_id_Et_fkey";

-- AlterTable
ALTER TABLE "ACTES" DROP COLUMN "id_SActes",
ADD COLUMN     "id_Dep" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "DEPARTEMENT" DROP COLUMN "id_Actes",
DROP COLUMN "id_Et";

-- AlterTable
ALTER TABLE "ETUDIANT" ADD COLUMN     "id_Dep" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SOUS_ACTES" ADD COLUMN     "id_Actes" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ETUDIANT" ADD CONSTRAINT "ETUDIANT_id_Dep_fkey" FOREIGN KEY ("id_Dep") REFERENCES "DEPARTEMENT"("ID_Dep") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ACTES" ADD CONSTRAINT "ACTES_id_Dep_fkey" FOREIGN KEY ("id_Dep") REFERENCES "DEPARTEMENT"("ID_Dep") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SOUS_ACTES" ADD CONSTRAINT "SOUS_ACTES_id_Actes_fkey" FOREIGN KEY ("id_Actes") REFERENCES "ACTES"("ID_Actes") ON DELETE RESTRICT ON UPDATE CASCADE;
