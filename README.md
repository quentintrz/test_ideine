# Tableau hiérarchique de permissions React

## Description

Ce projet est une application React qui affiche un tableau hiérarchique des permissions à partir d’une structure JSON. Chaque nœud de l’arbre représente un élément pouvant avoir des permissions "Lire" et "Modifier".  

L’utilisateur peut :  
- Déplier ou replier chaque nœud pour afficher ou masquer ses enfants  
- Cocher/décocher les permissions "Lire" et "Modifier" pour chaque nœud  
- Propager automatiquement la sélection ou la désélection des permissions du parent vers les enfants et inversement  
- Voir un résumé sous forme de listes des nœuds feuilles ayant les permissions activées  

---

## Fonctionnalités principales

- Affichage hiérarchique en tableau avec indentation selon la profondeur  
- Deux colonnes de permissions (Lire, Modifier) avec cases à cocher  
- Gestion d’état centralisée via `useReducer` pour synchroniser les permissions  
- Propagation des cases cochées/décochées entre parents et enfants  
- Résumé dynamique des nœuds feuilles sélectionnés pour chaque permission  


