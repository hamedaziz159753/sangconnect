import prisma from "./database/prisma.js";
const donneur = await prisma.donneur.create({
    data: {
        nom: "Khelifi",
        prenom: "Yassine",
        groupeSanguin: "AB+"
    }
});

console.log(donneur);

await prisma.$disconnect();