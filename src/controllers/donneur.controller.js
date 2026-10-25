import * as donneurService from "../services/donneur.service.js";
import { donneurSchema } from "../validators/donneur.validator.js"; 

export function getAll(req, res) {
    const donneurs = donneurService.getAll();
    res.json(donneurs);
}

export function getById(req, res, next) {

    try {

        const id = req.params.id;

        const donneur = donneurService.getById(id);

        if (!donneur) {

            const error = new Error(
                "Donneur introuvable"
            );

            error.statusCode = 404;

            throw error;
        }

        res.json(donneur);

    } catch (error) {

        next(error);
    }
}

export function create(req, res) {
    const resultat = donneurSchema.safeParse(req.body);

    // Si la validation Zod échoue
    if (!resultat.success) {
        console.log(resultat.error.issues);
        return res.status(400).json({
            message: "Données invalides",
            errors: resultat.error.issues
        });
    }

    // Si la validation réussit, on crée le donneur
    const nouveauDonneur = donneurService.create(resultat.data);
    
    res.status(201).json(nouveauDonneur);
}
export function update(req, res) {
    const id = Number(req.params.id);
    const donneur = donneurService.update(id, req.body);

    if (!donneur) {
        return res.status(404).json({
            message: "Donneur introuvable"
        });
    }

    res.json(donneur);
}

export function example(req, res, next) {

    try {

        // traitement

    } catch (error) {

        next(error);
    }
}