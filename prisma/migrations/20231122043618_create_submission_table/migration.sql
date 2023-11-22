-- CreateTable
CREATE TABLE "Submission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nominee" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL
);
