-- CreateTable
CREATE TABLE "Depoimentos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "texto" TEXT NOT NULL,

    CONSTRAINT "Depoimentos_pkey" PRIMARY KEY ("id")
);
