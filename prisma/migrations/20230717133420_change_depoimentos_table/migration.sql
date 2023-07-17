/*
  Warnings:

  - You are about to drop the `Depoimentos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Depoimentos";

-- CreateTable
CREATE TABLE "depoimentos" (
    "id" TEXT NOT NULL,
    "personName" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "depoimentos_pkey" PRIMARY KEY ("id")
);
