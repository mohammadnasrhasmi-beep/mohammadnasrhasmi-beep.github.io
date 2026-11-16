# Portfolio · Mohammad Nasr Hasmi

Mon site portfolio, construit avec **React** et **Vite**, et déployé automatiquement sur **GitHub Pages** à chaque push.

🔗 **https://mohammadnasrhasmi-beep.github.io**

## Lancer en local

```bash
npm install
npm run dev
```

## Ajouter un projet

Tous les projets et compétences sont dans `src/data/projets.js` : il suffit d'ajouter un objet à la liste.
Les champs possibles sont expliqués en haut du fichier. Avec `vedette: true`, le projet passe en grande fiche.

## Où changer quoi

- **Couleurs et polices** : les variables au début de `src/index.css`.
- **Liens et CV** : l'objet `liens` dans `src/data/projets.js` (le PDF est dans `public/`).
- **Aperçu du lien sur LinkedIn** : les balises `og:` dans `index.html` et l'image `public/og.png`.
