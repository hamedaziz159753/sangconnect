import express from "express";
import { validate } from "../middlewares/validate.js";

import {
    donneurSchema,
    updateDonneurSchema,
    donneurQuerySchema,
    idSchema
} from "../validators/donneur.validator.js";

import {
    getAll,
    getById,
    create,
    update
} from "../controllers/donneur.controller.js";

const router = express.Router();

router.get(
    "/",
    validate(donneurQuerySchema, "query"),
    getAll
);

router.get(
    "/:id",
    validate(idSchema, "params"),
    getById
);

router.post(
    "/",
    validate(donneurSchema, "body"),
    create
);

router.put(
    "/:id",
    validate(idSchema, "params"),
    validate(donneurSchema, "body"),
    update
);

router.patch(
    "/:id",
    validate(idSchema, "params"),
    validate(updateDonneurSchema, "body"),
    update
);

export default router;