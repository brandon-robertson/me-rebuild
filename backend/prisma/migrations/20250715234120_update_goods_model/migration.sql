/*
  Warnings:

  - You are about to drop the column `basePrice` on the `Good` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Good" DROP COLUMN "basePrice",
ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "raceId" INTEGER,
ADD COLUMN     "tech" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "type" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Good" ADD CONSTRAINT "Good_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;
