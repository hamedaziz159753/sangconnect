const donneurs = [
    {
        id: 1,
        nom: "Ben Ali",
        prenom: "Ahmed",
        groupeSanguin: "A+"
    },
    {
        id: 2,
        nom: "Trabelsi",
        prenom: "Sami",
        groupeSanguin: "O+"
    }
];

export function getAll() {
    return donneurs;
}

export function getById(id) {
    return donneurs.find(
        donneur => donneur.id === id
    );
}

export function create(donneurData) {
    const nouveauDonneur = {
        id: donneurs.length + 1, // Génère un ID simple
        ...donneurData,
        createdAt: new Date()
    };
    
    donneurs.push(nouveauDonneur);
    return nouveauDonneur;
}


export function update(id, donneurData) {
    const donneur = getById(id);

    if (!donneur) {
        return null;
    }

    Object.assign(donneur, donneurData);

    return donneur;
}
