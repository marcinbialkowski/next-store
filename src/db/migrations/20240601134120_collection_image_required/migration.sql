/*
  Warnings:

  - Made the column `imageId` on table `Collection` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_imageId_fkey";

-- AlterTable
ALTER TABLE "Collection" ALTER COLUMN "imageId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
