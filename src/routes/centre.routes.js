
import express from "express";
import { validate } from "../middlewares/validate.js";
import { centreSchema } from "../validators/centre.validator.js";
import {
    getAll,
    create
} from "../controllers/centre.controller.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", validate(centreSchema, "body"), create);

export default router;
