import { useState } from "react";
import { projets } from "../data/projets";

const FILTRES = ["Tous", "Java", "Web", "Embarqué"];

export default function Projects() {
  const [filtre, setFiltre] = useState("Tous");
  const visibles = filtre === "Tous" ? projets : projets.filter((p) => p.categorie === filtre);

  return (
    <section id="projets" className="section">
      <h2><span className="num">03.</span> Projets</h2>

      <div className="filters" role="tablist">
        {FILTRES.map((f) => (
          <button
            key={f}
            className={f === filtre ? "chip active" : "chip"}
            onClick={() => setFiltre(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects">
        {visibles.map((p) => (
          <article key={p.titre} className="project">
            <div className="project-top">
              <span className="folder">{"</>"}</span>
              {p.equipe && <span className="badge">En équipe</span>}
            </div>
            <h3>{p.titre}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.technos.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="links">
              <a href={p.code} target="_blank" rel="noreferrer">Code ↗</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Démo ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
