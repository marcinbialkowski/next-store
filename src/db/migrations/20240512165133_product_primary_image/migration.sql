/*
  Warnings:

  - You are about to drop the `_ImageToProduct` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[primaryImageId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_ImageToProduct" DROP CONSTRAINT "_ImageToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_ImageToProduct" DROP CONSTRAINT "_ImageToProduct_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "primaryImageId" TEXT;

-- DropTable
DROP TABLE "_ImageToProduct";

-- CreateIndex
CREATE UNIQUE INDEX "Product_primaryImageId_key" ON "Product"("primaryImageId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_primaryImageId_fkey" FOREIGN KEY ("primaryImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
