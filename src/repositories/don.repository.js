import prisma from "../database/prisma.js";

export function findAll({ skip, take } = {}) {
    return prisma.don.findMany({
        skip,
        take,
        include: {
            donneur: true,
            centre: true
        },
        orderBy: {
            dateDon: "desc"
        }
    });
}

export function findById(id) {
    return prisma.don.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            donneur: true,
            centre: true
        }
    });
}

export function findByDonneur(donneurId) {
    return prisma.don.findMany({
        where: {
            donneurId: Number(donneurId)
        },
        include: {
            centre: true
        },
        orderBy: {
            dateDon: "desc"
        }
    });
}
