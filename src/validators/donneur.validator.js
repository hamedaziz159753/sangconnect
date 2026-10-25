
import { z } from "zod";

export const donneurSchema = z.object({
    nom: z.string().min(1),
    prenom: z.string().min(1),
    groupeSanguin: z.enum([
        "A+", "A-", "B+", "B-",
        "AB+", "AB-", "O+", "O-"
    ]),
    ville: z.string().min(1)
});

export const donneurQuerySchema = z.object({
    groupeSanguin: z.enum([
        "A+", "A-", "B+", "B-",
        "AB+", "AB-", "O+", "O-"
    ]).optional()
});

export const idSchema = z.object({
    id: z.coerce.number().int().positive()
});

export const updateDonneurSchema = donneurSchema.partial();

