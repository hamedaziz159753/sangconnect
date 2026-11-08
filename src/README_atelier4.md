4. Vérifier l'installation d'Express.js
1) Car on a deja fait la commande "npm i express" permettant d'installer ce framework là.


7. Installation de Zod
1) Aprés l'execution de la commande"npm install zod", j'ai observré que les deux fichiers package-lock.json et package.json sont modifiés avec mot "M" apparue.

8. Première découverte de Zod
j'ai observé une resultat de type objet en donnant le statut d'opération comme true dans la clé "success" et une autre clé "data" contenant une réponse présentant les données ajoutés sous forme objet aussi

13. Tester le schéma
Question 3:
Dans le 1er cas,il nous a affiché "true" car les données surtout l'attribut du sang et nom respectent les normes existés.mais complétement différent dans la 2eme cas.

21. Tester avec des données invalides
Question 4

 Car il ne reconnait pas les données insérées.donc directement les données ne se passent pas à l'étape de validation.

 26. Tester l'identifiant
 Question 5
 Parce que l'id est le champ primordial pour récupérer les données liées à ce l'id.

 29. Tester les paramètres de requête
 Question 6
 Optional() rend le paramétre pas obligatoire.

 34. Exercice 1 — Tester toutes les validations


 --cas1: 
 curl -i -X PUT http://localhost:3000/api/donneurs/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Khelifi",
    "prenom": "Yassine",
    "groupeSanguin": "A+",
    "ville": "Tunis"
  }'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 80
ETag: W/"50-jxC4byrAZtU6xT1x8PpYPrh41iQ"
Date: Sun, 25 Oct 2026 14:06:46 GMT
Connection: keep-alive
Keep-Alive: timeout=5
 
 
 --- cas2 curl -i -X POST http://localhost:3000/api/donneurs   -H "Content-Type: application/json"   -d '{
    "nom": "A",
    "prenom": "Yassine",
    "groupeSanguin": "A+",
    "ville": "Tunis"
  }'
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 113
ETag: W/"71-9GPhnKQ2PUIw9VnOS7VM53zdZlw"
Date: Sun, 25 Oct 2026 14:09:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":3,"nom":"A","prenom":"Yassine","groupeSanguin":"A+","ville":"Tunis","createdAt":"2026-10-25T14:09:50.945Z"}






---cas 3: curl -i -X POST http://localhost:3000/api/donneurs \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Khelifi",
    "prenom": "Yassine",
    "groupeSanguin": "XYZ",
    "ville": "Tunis"
  }'
HTTP/1.1 400 Bad Request
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 248
ETag: W/"f8-f5f3EoyaufzAq7PJX4jl6lkzRzA"
Date: Sun, 25 Oct 2026 14:11:43 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"Données invalides","errors":[{"code":"invalid_value","values":["A+","A-","B+","B-","AB+","AB-","O+","O-"],"path":["groupeSanguin"],"message":"Invalid option: expected one of \"A+\"|\"A-\"|\"B+\"|\"B-\"|\"AB+\"|\"AB-\"|\"O+\"|\"O-\""}]}




---cas 4:
curl -i -X POST http://localhost:3000/api/donneurs \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Khelifi",
    "groupeSanguin": "A+",
    "ville": "Tunis"
  }'
HTTP/1.1 400 Bad Request
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 168
ETag: W/"a8-o3sPOz3SkwzWbWHGPPNOXrYOyE4"
Date: Sun, 25 Oct 2026 14:14:25 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"Données invalides","errors":[{"expected":"string","code":"invalid_type","path":["prenom"],"message":"Invalid input: expected string, received undefined"}]}



--cas5:curl -i -X POST http://localhost:3000/api/donneurs/abc
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Security-Policy: default-src 'none'
X-Content-Type-Options: nosniff
Content-Type: text/html; charset=utf-8
Content-Length: 156
Date: Sun, 25 Oct 2026 14:17:03 GMT
Connection: keep-alive
Keep-Alive: timeout=5

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot POST /api/donneurs/abc</pre>
</body>
</html>




--cas 6:  curl -i -X POST http://localhost:3000/api/donneurs?groupeSanguin=XYZ
HTTP/1.1 400 Bad Request
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 160
ETag: W/"a0-gaOdYDI9Dwm47aeUBSWOWRbeT6k"
Date: Sun, 25 Oct 2026 14:17:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"Données invalides","errors":[{"expected":"object","code":"invalid_type","path":[],"message":"Invalid input: expected object, received undefined"}]}



GRANT ALL PRIVILEGES
ON *.*
TO 'sangconnect'@'localhost';