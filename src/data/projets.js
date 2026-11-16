const GITHUB = "https://github.com/mohammadnasrhasmi-beep";
const PAGES = "https://mohammadnasrhasmi-beep.github.io";

export const projets = [
  {
    titre: "Projets Java POO",
    description:
      "Cinq applications orientées objet : gestion d'un club sportif, d'un parc d'attractions, d'une bibliothèque, de formes géométriques et d'un compte bancaire.",
    technos: ["Java", "Héritage", "Polymorphisme", "Exceptions"],
    code: `${GITHUB}/java-poo-projets`,
    categorie: "Java",
  },
  {
    titre: "ESP32 · MicroPython",
    description:
      "Programmation d'un Arduino Nano ESP32 : LED RGB pilotée par bouton, scan du bus I2C et contrôle d'une matrice LED 8×8.",
    technos: ["MicroPython", "ESP32", "I2C", "Électronique"],
    code: `${GITHUB}/esp32-micropython`,
    categorie: "Embarqué",
  },
  {
    titre: "graph-your-x",
    description: "Projet réalisé en équipe lors d'un hackathon.",
    technos: ["React", "TypeScript", "Vite"],
    code: `${GITHUB}/graph-your-x`,
    categorie: "Web",
    equipe: true,
  },
  {
    titre: "ApiJeuRole",
    description:
      "API d'un jeu de rôle conçue en équipe dans le cours d'architecture logicielle : lobby, joueurs, créatures et exploration.",
    technos: ["Java", "Architecture", "Travail d'équipe"],
    code: `${GITHUB}/ApiJeuRole`,
    categorie: "Java",
    equipe: true,
  },
  {
    titre: "Mes débuts en web",
    description:
      "Mes premiers sites : un mini site scientifique sur Mars en JavaScript, une boutique de vêtements et une boutique de cookies.",
    technos: ["HTML", "CSS", "JavaScript", "DOM"],
    code: `${GITHUB}/web-debuts`,
    demo: `${PAGES}/web-debuts/mars/`,
    categorie: "Web",
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
};
