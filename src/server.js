import http from "node:http";
import { sendJson } from "./utils/http.js";
import { handleDonneurRoutes } from "./routes/donneur.routes.js";

const port = 3000;

const server = http.createServer(async (req, res) => {

  const handled = await handleDonneurRoutes(req, res);

  if (handled) {
    return;
  }

  if (req.url === "/" && req.method === "GET") {
    sendJson(res, 200, {
      message: "Bienvenue dans SangConnect"
    });
    return;
  }

  sendJson(res, 404, {
    error: "Route non trouvée",
    path: req.url,
    method: req.method
  });
});

server.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});