1) Initialiser l'attribut "don" comme une table vide .
2) C'est une clé étrangére pour lier avec la classe donneur.
3) donneurId est un attribut du clé étrangére mais donneur c'est le nom du l'attrbut pour l'affecter le nom de table "Donneur".
4) pour referencier avec la table liée(Donneur) .

8. Activité 3 — Comprendre les clés étrangères

1) pour interagir avec la table Donneur via la clé primaire "donneurId" .
2) cal'attribut "nom" n'est pas l'identificateur du table.
3) Si on omet la liaison,l'attribut donneurId n'a aucun sens dans la table "don".
4) assurer la relation .

10. Activité 5 — Créer un don avec Prisma
1) pour lier avec le donneur qui a l'id 1 et avec le centre contenant l'id 1.


14. Question importante
 La différence réside dans l'affichage puisqu'avec l'option "include" affiche les donneurs ayant un centre de don et le don,sans cette option,il n'affiche pas le donneur avec ses informations intégrales .

16. Activité 8 — Récupérer les dons d'un donneur
 1) Le premier bloc du code resulte les dons du donneur 1 ,le deuxiéme    nous montre le donneur 1 qui a le ou les dons .


17. Activité 9 — Rechercher selon le groupe sanguin


18. Activité 10 — Filtrer par centre
Question:
recherche par id.
recherche par ville Du centre  .


19. Activité 11 — Trier les dons

ASC signifie tri en ordre croissant .
DESC signifie tri en ordre décroissant .

21. Activité 13 — Pagination
(3-1)*10

23. Activité 15 — Compter les résultats

total permet de donner le nombre de dons totals