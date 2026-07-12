-- CreateTable
CREATE TABLE "CarrierActivity" (
    "id" TEXT NOT NULL,
    "carrierId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CarrierActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarrierActivity" ADD CONSTRAINT "CarrierActivity_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier"("id") ON DELETE CASCADE ON UPDATE CASCADE;
