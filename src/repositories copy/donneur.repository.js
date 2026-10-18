const donneurs = [
  {
    id: 1,
    nom: "Ben Ali",
    prenom: "Ahmed",
    groupeSanguin: "O+",
    ville: "Tunis"
  },
  {
    id: 2,
    nom: "Mokni",
    prenom: "Saif",
    groupeSanguin: "A+",
    ville: "Tunis"
  },
  {
    id: 3,
    nom: "Ben Motaz",
    prenom: "Aziz",
    groupeSanguin: "B+",
    ville: "Sfax"
  }
];

export async function findAll() {
  return donneurs;
}

export async function findById(id) {
  return donneurs.find(donneur => donneur.id === id);
}

export async function searchByCity(city) {
  return donneurs.filter(
    donneur => donneur.ville.toLowerCase() === city.toLowerCase()
  );
}