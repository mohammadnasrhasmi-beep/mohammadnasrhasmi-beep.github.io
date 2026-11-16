import { useEffect, useState } from "react";
import { liens } from "../data/projets";

const ROLES = ["Java & POO", "React", "MicroPython sur ESP32", "réseaux & sécurité"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="accueil" className="hero">
      <p className="kicker">Salut, moi c'est</p>
      <h1>Mohammad Nasr</h1>
      <p className="tagline">
        Étudiant en informatique qui code en <span key={index} className="role">{ROLES[index]}</span>
      </p>
      <p className="lead">
        En 2<sup>e</sup> année de Techniques de l'informatique au Cégep Marie-Victorin, à Montréal.
        J'aime construire des choses qui marchent pour vrai, du logiciel au matériel.
      </p>
      <div className="cta">
        <a className="btn primary" href="#projets">Voir mes projets</a>
        <a className="btn" href={liens.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </section>
  );
}
