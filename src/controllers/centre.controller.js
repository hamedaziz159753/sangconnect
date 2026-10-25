import * as centreService from "../services/centre.service.js";

export function getAll(req, res) {
    res.json(centreService.getAll());
}

export function create(req, res) {
    const nouveauCentre = centreService.create(req.body);

    res.status(201).json(nouveauCentre);

    if (!resultat.success) {
        console.log(resultat.error.issues);
        return res.status(400).json({
            message: "Données invalides",
            errors: resultat.error.issues
        });
    }
}