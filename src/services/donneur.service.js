import {
  findAll,
  findById,
  searchByCity
} from "../repositories/donneur.repository.js";

export async function getAllDonneurs() {
  return await findAll();
}

export async function getDonneurById(id) {
  const donneur = await findById(id);

  if (!donneur) {
    throw new Error("Donneur introuvable");
  }

  return donneur;
}

export async function getDonneursByCity(ville) {
  return await searchByCity(ville);
}