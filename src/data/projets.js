const GITHUB = "https://github.com/mohammadnasrhasmi-beep";
const PAGES = "https://mohammadnasrhasmi-beep.github.io";

/*
  SOURCE UNIQUE DES PROJETS
  -------------------------
  Pour ajouter un projet : copier un objet ci-dessous et changer les valeurs.

  Champs obligatoires
    titre        nom du projet
    description  ce que le projet fait, en une ou deux phrases
    technos      liste de technologies
    code         lien vers le dépôt GitHub

  Champs facultatifs (s'ils sont absents ou vides, rien ne s'affiche)
    demo         lien vers une démo en ligne
    contexte     où et quand (cours, hackathon…)
    role         ta part du travail dans une équipe
    equipe       true si c'est un projet d'équipe
    original     lien vers le dépôt de l'équipe, quand « code » pointe vers ton fork
    vedette      true = grande fiche en haut de la section (2 ou 3 au maximum)
    pratique     liste de ce que tu y as pratiqué (affichée sur les fiches vedettes)
    appris       une phrase personnelle : « ce que j'en retiens »
    image        chemin d'une capture ou photo placée dans public/ (ex. "/images/esp32.jpg")
    imageAlt     description de l'image pour les lecteurs d'écran
    visuel       dessin affiché quand il n'y a pas d'image :
                 "matrice" = la matrice LED 8×8, "graphe" = un graphe de préalables
    extrait      quelques lignes de code ou de requêtes affichées quand il n'y a pas d'image
*/
export const projets = [
  {
    titre: "ESP32 · MicroPython",
    vedette: true,
    contexte: "Cours de programmation de plateformes embarquées",
    description:
      "Mini-projets sur un Arduino Nano ESP32 : une LED RGB qui change de couleur à chaque appui de bouton, un scan du bus I2C et le pilotage d'une matrice LED 8×8, une rangée et un octet à la fois.",
    pratique: [
      "Bus I2C et registres du contrôleur HT16K33",
      "Opérations bit à bit pour allumer une LED précise",
      "GPIO et détection de front montant sur un bouton",
    ],
    // À COMPLÉTER : une phrase à toi sur ce que tu retiens de ce projet.
    appris: "",
    // À COMPLÉTER : une photo du montage, ex. image: "/images/esp32.jpg"
    visuel: "matrice",
    technos: ["MicroPython", "ESP32", "I2C", "Électronique"],
    code: `${GITHUB}/esp32-micropython`,
  },
  {
    titre: "ApiJeuRole",
    vedette: true,
    equipe: true,
    contexte: "Cours d'architecture logicielle",
    role: "Les stories L3 (rejoindre un lobby) et L4 (quitter un lobby), avec leurs tests. Le reste de l'API a été écrit par mes coéquipiers.",
    original: "https://github.com/Dav-253/ApiJeuRole",
    description:
      "API REST d'un jeu de rôle conçue en équipe : on crée un compte, on se connecte, on rejoint un lobby avec son héros et on lance la partie. Chaque domaine (joueur, héros, lobby, partie, combat) est séparé en couches.",
    pratique: [
      "Architecture en couches : API, application, domaine, infrastructure",
      "Tests unitaires avec JUnit et Maven",
      "Travail en équipe avec branches, issues et pull requests",
    ],
    // À COMPLÉTER : une phrase à toi sur ce que tu retiens de ce projet.
    appris: "",
    extrait: [
      "POST   /players",
      "POST   /sessions",
      "POST   /lobbies",
      "PUT    /lobbies/{id}/players/{id}/hero",
      "POST   /lobbies/{id}/game",
      "DELETE /lobbies/{id}/players/{id}",
    ],
    technos: ["Java", "Jersey", "Maven", "JUnit"],
    code: `${GITHUB}/ApiJeuRole`,
  },
  {
    titre: "graph-your-x",
    vedette: true,
    equipe: true,
    contexte: "HackDécouverte 2026",
    role: "Le backend FastAPI (les routes qui servent les sujets et leur graphe de préalables, les données de départ) et le README. Le reste a été fait par mes coéquipiers.",
    original: "https://github.com/GermanViter/graph-your-x",
    description:
      "Application web faite en équipe pendant un hackathon. On choisit un objectif, par exemple Machine Learning, et elle affiche le graphe de tous les préalables à maîtriser avant, y compris les préalables des préalables. On coche ce qu'on a déjà fait et elle montre ce qu'on peut suivre maintenant.",
    // À COMPLÉTER : une phrase à toi sur ce que tu retiens de ce projet.
    appris: "",
    // À COMPLÉTER : une capture de l'application, ex. image: "/images/graph-your-x.png"
    visuel: "graphe",
    technos: ["React 19", "TypeScript", "Vite", "FastAPI", "SQLite"],
    code: `${GITHUB}/graph-your-x`,
  },
  {
    titre: "Projets Java POO",
    contexte: "Cours de programmation orientée objet",
    description:
      "Cinq applications orientées objet : gestion d'un club sportif, d'un parc d'attractions, d'une bibliothèque, de formes géométriques et d'un compte bancaire.",
    technos: ["Java", "Héritage", "Polymorphisme", "Exceptions"],
    code: `${GITHUB}/java-poo-projets`,
  },
  {
    titre: "Mes débuts en web",
    contexte: "Cours de création de sites web",
    description:
      "Mes premiers sites : un mini site scientifique sur Mars en JavaScript, une boutique de vêtements et une boutique de cookies.",
    technos: ["HTML", "CSS", "JavaScript", "DOM"],
    code: `${GITHUB}/web-debuts`,
    demo: `${PAGES}/web-debuts/mars/`,
  },
];

export const competences = [
  { groupe: "Langages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML / CSS"] },
  { groupe: "Frameworks & outils", items: ["React", "Vite", "JavaFX", "Maven", "Node.js", "Git / GitHub"] },
  { groupe: "Systèmes & réseaux", items: ["Linux (Debian, Rocky)", "VMware", "Packet Tracer", "Wireshark", "SQL Server"] },
  { groupe: "Embarqué", items: ["MicroPython", "Arduino Nano ESP32", "I2C", "GPIO"] },
];

export const liens = {
  github: GITHUB,
  linkedin: "https://www.linkedin.com/in/mohammad-hasmi-a7507b372/",
  email: "mohammadnasrhasmi@gmail.com",
  instagram: "https://www.instagram.com/momorcm_/",
  // Fichier placé dans public/. Mets "" pour cacher le bouton « CV ».
  cv: "/cv-mohammad-nasr.pdf",
};
