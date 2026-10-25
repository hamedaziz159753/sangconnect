import express from "express";

import donneurRoutes from "./routes/donneur.routes.js";
import { donneurSchema } from "./validators/donneur.validator.js";
import { errorHandler }
from "./middlewares/errorHandler.js";
import centreRoutes from "./routes/centre.routes.js";
const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Bienvenue dans l'API SangConnect"
    });
});

app.use("/api/donneurs", donneurRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

app.use("/api/donneurs", donneurRoutes);

app.use(errorHandler);

app.use("/api/centres", centreRoutes);