import { z } from "zod";

export const centreSchema = z.object({

    nom: z.string().min(2),

    ville: z.string().min(2),

    adresse: z.string().min(3),

    telephone: z.string().min(8)

});


export function validate(schema, source) {
    return (req, res, next) => {
        const result = schema.safeParse(req[source]);

        if (!result.success) {
            const errors = result.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: getErrorMessage(issue)
            }));

            return res.status(400).json({
                message: "Données invalides",
                errors
            });
        }

        if (source === "body") {
            req.body = result.data;
        }

        next();
    };
}

function getErrorMessage(issue) {
    const messages = {
        nom: "Le nom doit contenir au moins 2 caractères",
        ville: "La ville doit contenir au moins 2 caractères",
        adresse: "L'adresse doit contenir au moins 3 caractères",
        telephone: "Le téléphone doit contenir au moins 8 caractères"
    };

    const field = issue.path[0];

    if (issue.code === "too_small" && typeof field === "string") {
        return messages[field] || issue.message;
    }

    return issue.message;
}
