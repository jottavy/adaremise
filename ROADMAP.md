# ROADMAP — AdaRemise

## ✅ Ce qui est livré (V1)

- **L'écran « Qui es-tu ? »** : liste des bénévoles, on clique sur son nom pour que l'application sache qui travaille
- **Une barre de recherche sur les bénévoles**, ajoutée en plus du périmètre initial de la V1
- **Enregistrer un dépôt** : choix du donateur parmi ceux déjà en base, saisie de la date, du type (boutique ou domicile), puis ajout des objets un par un depuis la fiche du dépôt
- **La liste des objets**, filtrable par statut et par catégorie, avec la fiche détaillée de chacun
- **Le changement de statut d'un objet** via un menu déroulant : arrivé → en réparation → en rayon → vendu / recyclé
- **Un tableau de bord minimal** : nombre d'objets par statut, poids total reçu, nombre d'objets en rayon
- **Une application qui tourne en local sans surprise** : README avec trois commandes suffisantes pour la lancer sur une autre machine

## ❌ Ce qui n'est pas fait, et pourquoi

Par rapport à nos maquettes, certains éléments ont été volontairement laissés de côté pour rester dans le périmètre et le temps de la V1 :

- **Filtres sur les objets par id ou par nom** : non réalisés, ce n'était pas dans les filtres demandés pour la V1 (statut et catégorie)
- **Barre de recherche sur les objets** : nécessitait davantage d'informations et de traitement que ce que demandait la V1, et n'était pas jouable dans le temps imparti
- **Route PATCH pour modifier tous les éléments d'un objet** : envisagée mais non réalisée, priorité donnée au parcours de base (création + changement de statut)
- **Route DELETE pour supprimer un objet mal enregistré** : envisagée mais non réalisée, faute de temps
- **Filtres sur les dépôts** : envisagés pour faciliter la recherche, mais non réalisés en V1
- **Une barre de recherche générale sur l'application** : idée retenue pour une prochaine version, hors périmètre de la V1


Ces choix ont été faits pour livrer une V1 complète et stable sur les fonctionnalités demandées, plutôt que de disperser le temps disponible sur des ajouts non prioritaires.

## 🚀 Ce que contiendrait la V2

En plus des points ci-dessus (search bar générale, route PATCH, route DELETE, filtres sur les dépôts), la V2 apporterait :

- **Saisir une réparation** : l'objet concerné, le bénévole identifié, la durée, le résultat (réussie ou échouée)
- **Enregistrer une vente** portant sur plusieurs objets, avec le prix réellement payé et le mode de paiement
- **Le formulaire de dépôt complet** : saisir plusieurs objets d'un coup, sans repasser par la fiche
- **Créer un donateur absent de la base** directement depuis le formulaire de dépôt, et retrouver ses dépôts précédents
- **La vitrine publique** : catalogue des objets en rayon, avec les prix, un tri et un filtre par fourchette de prix
- **Un tableau de bord enrichi** : chiffre d'affaires, heures de bénévolat, taux de réussite des réparations, et un graphique
