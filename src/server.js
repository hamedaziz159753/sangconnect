import http from "node:http";
import { sendJson } from "./utils/http.js";

const port = 3000;

console.log("Bienvenue dans SangConnect");
console.log("Node.js est opérationnel");

const server = http.createServer((req, res) => {

  if (req.url === "/" && req.method === "GET") {
    sendJson(res, 200, {
      message: "Bienvenue dans SangConnect",
      application: "Gestion des dons de sang"
    });

    return;
  }

  if (req.url === "/api/health" && req.method === "GET") {
    sendJson(res, 200, {
      status: "ok",
      application: "SangConnect",
      timestamp: new Date().toISOString(),
      nodeVersion: process.version
    });

    return;
  }

  if (req.url === "/api/welcome" && req.method === "GET") {
    sendJson(res, 200, {
      message: "Bienvenue dans l’API SangConnect",
      description: "Gestion des dons de sang"
    });

    return;
  }

  if (req.url === "/api/info" && req.method === "GET") {
    sendJson(res, 200, {
      application: "SangConnect",
      version: "1.0.0",
      environment: "development",
      nodeVersion: process.version
    });

    return;
  }
 if (req.url === "/api/diagnostic" && req.method === "GET") {
    sendJson(res, 200, {
      method: req.method,
      url: req.url,
      date: new Date().toISOString(),
      headers: req.headers
    });

    return;
  }

 if (req.url === "/api/version" && req.method === "GET") {
  sendJson(res, 200, {
    application: "SangConnect",
    apiVersion: "1.0.0",
    nodeVersion: process.version,
    environment: "development"
  });

  return;
}
  sendJson(res, 404, {
    error: "Route non trouvée",
    path: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });
});

server.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});