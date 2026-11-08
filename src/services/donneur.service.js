import * as donneurRepository
    from "../repositories/donneur.repository.js";

export async function getAll() {

    return donneurRepository.findAll();
}
export async function getById(id) {

    const donneur =
        await donneurRepository.findById(id);

    if (!donneur) {

        const error = new Error(
            "Donneur introuvable"
        );

        error.statusCode = 404;

        throw error;
    }

    return donneur;
}
export async function create(data) {

    return donneurRepository.create(data);
}
export async function update(id, data) {

    await getById(id);

    return donneurRepository.update(
        id,
        data
    );
}
export async function remove(id) {

    await getById(id);

    await donneurRepository.remove(id);
}