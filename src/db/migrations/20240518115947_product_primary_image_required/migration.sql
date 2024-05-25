/*
  Warnings:

  - Made the column `primaryImageId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_primaryImageId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "primaryImageId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_primaryImageId_fkey" FOREIGN KEY ("primaryImageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
