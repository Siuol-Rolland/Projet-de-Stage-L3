/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `ADMINISTRATEUR` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `ETUDIANT` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `PROFESSEURS` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `ADMINISTRATEUR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `ETUDIANT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `PROFESSEURS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ADMINISTRATEUR" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ETUDIANT" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PROFESSEURS" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ADMINISTRATEUR_user_id_key" ON "ADMINISTRATEUR"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ETUDIANT_user_id_key" ON "ETUDIANT"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "PROFESSEURS_user_id_key" ON "PROFESSEURS"("user_id");
