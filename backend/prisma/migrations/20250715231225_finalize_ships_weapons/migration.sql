/*
  Warnings:

  - You are about to drop the column `weapons` on the `Ship` table. All the data in the column will be lost.
  - Added the required column `raceId` to the `Ship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ship" DROP COLUMN "weapons",
ADD COLUMN     "accel" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
ADD COLUMN     "armor" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "cost" INTEGER NOT NULL DEFAULT 1000000,
ADD COLUMN     "raceId" INTEGER NOT NULL,
ADD COLUMN     "rankId" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "recharge" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "shields" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "shieldsSlots" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "weaponsSlots" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "cargoSpace" SET DEFAULT 100;

-- CreateTable
CREATE TABLE "Race" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "goodId" INTEGER NOT NULL DEFAULT 0,
    "raceId" INTEGER,
    "racks" INTEGER NOT NULL DEFAULT 0,
    "stations" INTEGER NOT NULL DEFAULT 0,
    "accuracy" DOUBLE PRECISION NOT NULL DEFAULT 1.00,
    "volley" INTEGER NOT NULL DEFAULT 1,
    "ammunitionId" INTEGER,
    "generalDamage" INTEGER NOT NULL DEFAULT 0,
    "shieldDamage" INTEGER NOT NULL DEFAULT 0,
    "armorDamage" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ship" ADD CONSTRAINT "Ship_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ship" ADD CONSTRAINT "Ship_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_goodId_fkey" FOREIGN KEY ("goodId") REFERENCES "Good"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Weapon" ADD CONSTRAINT "Weapon_ammunitionId_fkey" FOREIGN KEY ("ammunitionId") REFERENCES "Good"("id") ON DELETE SET NULL ON UPDATE CASCADE;
