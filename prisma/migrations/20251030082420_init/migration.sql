/*
  Warnings:

  - Added the required column `id_Dep` to the `QUOTAS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ETUDIANT" ADD COLUMN     "Photo_Et" TEXT;

-- AlterTable
ALTER TABLE "QUOTAS" ADD COLUMN     "id_Dep" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "QUOTAS" ADD CONSTRAINT "QUOTAS_id_Dep_fkey" FOREIGN KEY ("id_Dep") REFERENCES "DEPARTEMENT"("ID_Dep") ON DELETE RESTRICT ON UPDATE CASCADE;
