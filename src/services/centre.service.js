
const centres = [];

export function getAll() {
    return centres;
}

export function create(centreData) {
    const nouveauCentre = {
        id: centres.length + 1,
        ...centreData
    };

    centres.push(nouveauCentre);
    return nouveauCentre;
}
