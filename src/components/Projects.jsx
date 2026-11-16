import { projets } from "../data/projets";
import { BALAYAGE } from "../data/motifs";
import MatriceLed from "./MatriceLed";
import GraphePrealables from "./GraphePrealables";

// Les liens « Code » et « Démo », communs aux deux types de cartes.
function LiensProjet({ projet }) {
  return (
    <p className="liens-projet">
      <a
        href={projet.code}
        target="_blank"
        rel="noreferrer"
        aria-label={`${projet.original ? "Mon fork" : "Code"} de ${projet.titre} sur GitHub`}
      >
        {projet.original ? "Mon fork" : "Code"} <span aria-hidden="true">↗</span>
      </a>
      {projet.original && (
        <a href={projet.original} target="_blank" rel="noreferrer" aria-label={`Dépôt de l'équipe pour ${projet.titre}`}>
          Dépôt de l'équipe <span aria-hidden="true">↗</span>
        </a>
      )}
      {projet.demo && (
        <a href={projet.demo} target="_blank" rel="noreferrer" aria-label={`Démo de ${projet.titre}`}>
          Démo <span aria-hidden="true">↗</span>
        </a>
      )}
    </p>
  );
}

function Technos({ liste }) {
  return (
    <ul className="technos" aria-label="Technologies">
      {liste.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

// La ligne « contexte · en équipe · rôle » au-dessus du titre.
function Contexte({ projet }) {
  const morceaux = [projet.contexte, projet.equipe && "Projet d'équipe"].filter(Boolean);
  if (morceaux.length === 0) return null;
  return <p className="contexte">{morceaux.join(" · ")}</p>;
}

// Le visuel d'une fiche vedette : image si fournie, sinon matrice ou extrait.
function Visuel({ projet }) {
  if (projet.image) {
    return (
      <div className="visuel">
        <img src={projet.image} alt={projet.imageAlt || ""} loading="lazy" />
      </div>
    );
  }
  if (projet.visuel === "matrice") {
    return (
      <div className="visuel visuel-carte">
        <MatriceLed motifs={[BALAYAGE]} description="Matrice LED 8×8 affichant le motif de balayage du projet" />
        <p className="serigraphie" aria-hidden="true">SDA A4 · SCL A5 · 0x70</p>
      </div>
    );
  }
  if (projet.visuel === "graphe") {
    return (
      <div className="visuel visuel-carte">
        <GraphePrealables />
      </div>
    );
  }
  if (projet.extrait) {
    return (
      <div className="visuel visuel-carte">
        <pre className="extrait" aria-label="Exemples de requêtes">
          <code>{projet.extrait.join("\n")}</code>
        </pre>
      </div>
    );
  }
  return null;
}

function FicheVedette({ projet }) {
  return (
    <article className="fiche" data-apparition>
      <Visuel projet={projet} />
      <div className="fiche-texte">
        <Contexte projet={projet} />
        <h3>{projet.titre}</h3>
        <p className="description">{projet.description}</p>

        {projet.role && (
          <p className="role">
            <span className="mini-titre">Ma part</span> {projet.role}
          </p>
        )}

        {projet.pratique?.length > 0 && (
          <>
            <p className="mini-titre">Ce que j'y ai pratiqué</p>
            <ul className="pratique">
              {projet.pratique.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </>
        )}

        {projet.appris && (
          <p className="appris">
            <span className="mini-titre">Ce que j'en retiens</span> {projet.appris}
          </p>
        )}

        <Technos liste={projet.technos} />
        <LiensProjet projet={projet} />
      </div>
    </article>
  );
}

function CarteProjet({ projet }) {
  return (
    <article className="carte" data-apparition>
      <Contexte projet={projet} />
      <h3>{projet.titre}</h3>
      <p className="description">{projet.description}</p>
      {projet.role && (
        <p className="role">
          <span className="mini-titre">Ma part</span> {projet.role}
        </p>
      )}
      <Technos liste={projet.technos} />
      <LiensProjet projet={projet} />
    </article>
  );
}

export default function Projects() {
  const vedettes = projets.filter((p) => p.vedette);
  const autres = projets.filter((p) => !p.vedette);

  return (
    <section id="projets" className="section">
      <h2 data-apparition><span className="num">01</span> Projets</h2>

      <div className="fiches">
        {vedettes.map((p) => (
          <FicheVedette key={p.titre} projet={p} />
        ))}
      </div>

      {autres.length > 0 && (
        <>
          <p className="sous-titre" data-apparition>Autres projets</p>
          <div className="cartes">
            {autres.map((p) => (
              <CarteProjet key={p.titre} projet={p} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
