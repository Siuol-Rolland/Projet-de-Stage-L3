-- CreateTable
CREATE TABLE "_Attribuer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Attribuer_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_Attribuer_B_index" ON "_Attribuer"("B");

-- AddForeignKey
ALTER TABLE "_Attribuer" ADD CONSTRAINT "_Attribuer_A_fkey" FOREIGN KEY ("A") REFERENCES "QUOTAS"("ID_Quotas") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Attribuer" ADD CONSTRAINT "_Attribuer_B_fkey" FOREIGN KEY ("B") REFERENCES "SOUS_ACTES"("ID_SActes") ON DELETE CASCADE ON UPDATE CASCADE;
