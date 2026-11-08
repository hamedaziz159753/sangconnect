/*
  Warnings:

  - Added the required column `telephone` to the `Donneur` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Donneur` ADD COLUMN `telephone` VARCHAR(191) NOT NULL;
