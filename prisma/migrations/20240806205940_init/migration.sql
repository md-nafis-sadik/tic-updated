/*
  Warnings:

  - You are about to drop the column `parentServiceId` on the `Service` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_parentServiceId_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "parentServiceId",
ADD COLUMN     "parentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
