import {
  listDonneurs,
  showDonneur,
  searchDonneursByCity
} from "../controllers/donneur.controller.js";

export async function handleDonneurRoutes(req, res) {

  const url = new URL(req.url, "http://localhost:3000");

  if (
    url.pathname === "/api/donneurs" &&
    url.searchParams.has("ville") &&
    req.method === "GET"
  ) {
    const ville = url.searchParams.get("ville");

    await searchDonneursByCity(req, res, ville);

    return true;
  }

  if (
    url.pathname === "/api/donneurs" &&
    req.method === "GET"
  ) {
    await listDonneurs(req, res);

    return true;
  }

  const match = url.pathname.match(/^\/api\/donneurs\/(\d+)$/);

  if (match && req.method === "GET") {
    const id = Number(match[1]);

    await showDonneur(req, res, id);

    return true;
  }

  return false;
}