-- CreateEnum
CREATE TYPE "CarrierStatus" AS ENUM ('LEAD', 'ACTIVE', 'INACTIVE', 'BLACKLISTED');

-- CreateEnum
CREATE TYPE "EquipmentType" AS ENUM ('DRY_VAN', 'REEFER', 'FLATBED', 'STEP_DECK', 'POWER_ONLY', 'HOTSHOT', 'BOX_TRUCK');

-- CreateTable
CREATE TABLE "Carrier" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "ownerName" TEXT,
    "mcNumber" TEXT NOT NULL,
    "dotNumber" TEXT,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "equipment" "EquipmentType" NOT NULL,
    "preferredLanes" TEXT,
    "status" "CarrierStatus" NOT NULL DEFAULT 'LEAD',
    "notes" TEXT,
    "lastContact" TIMESTAMP(3),
    "nextFollowUp" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Carrier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carrier_mcNumber_key" ON "Carrier"("mcNumber");
