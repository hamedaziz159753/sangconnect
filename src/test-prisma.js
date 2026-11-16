import express from "express";
import prisma from "./database/prisma.js";

const app = express();

app.get("/api/dons", async (req, res) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const skip = (page - 1) * limit;
    const total = await prisma.don.count();

    const dons = await prisma.don.findMany({
        skip,
        take: limit,
    });

    res.json({
    data: dons,
    pagination: {
        page,
        limit,
        total
    }
});
});
const donneurs = await prisma.donneur.findMany();

for (const donneur of donneurs) {

    const dons = await prisma.don.findMany({
       select: {
    id: true,
    volume: true,

    donneur: {
        select: {
            nom: true,
            groupeSanguin: true
        }
    },

    centre: {
        select: {
            nom: true
        }
    }
}
    });

    console.log(donneur.nom, dons);
}
app.listen(3000, () => {
    console.log("Serveur démarré sur http://localhost:3000");
});
