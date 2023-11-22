/*
  Warnings:

  - You are about to drop the column `email` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `name` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Submission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nominee" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL
);
INSERT INTO "new_Submission" ("categoryId", "id", "nominee", "reason") SELECT "categoryId", "id", "nominee", "reason" FROM "Submission";
DROP TABLE "Submission";
ALTER TABLE "new_Submission" RENAME TO "Submission";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
