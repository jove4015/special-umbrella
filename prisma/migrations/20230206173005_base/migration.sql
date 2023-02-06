-- CreateTable
CREATE TABLE "TestTable" (
    "id" SERIAL NOT NULL,
    "task_name" TEXT,
    "status" TEXT,
    "description" TEXT,
    "notes" TEXT,

    CONSTRAINT "TestTable_pkey" PRIMARY KEY ("id")
);
