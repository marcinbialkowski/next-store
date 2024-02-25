/*
  Warnings:

  - A unique constraint covering the columns `[productId,orderId]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_productId_orderId_key" ON "OrderItem"("productId", "orderId");
