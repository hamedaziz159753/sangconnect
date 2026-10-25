import { z } from "zod";
import  {donneurSchema } from "./validators/donneur.validator.js";
import { create } from "./controllers/donneur.controller.js";



const schema = z.object({
    nom: z.string(),
    prenom: z.string()
});

const donneur = {
    nom: "",
    prenom: "Ahmed",
    groupeSanguin: "XYZ"
};
const resultat = donneurSchema.safeParse(donneur);

if (!resultat.success) {
    console.log(resultat.error.issues);
}

console.log(resultat.success);