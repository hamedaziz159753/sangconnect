/*
  Warnings:

  - Added the required column `ville` to the `Donneur` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Donneur` ADD COLUMN `ville` VARCHAR(191) NOT NULL;
