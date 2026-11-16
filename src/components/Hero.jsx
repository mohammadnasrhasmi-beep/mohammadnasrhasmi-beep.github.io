import { liens } from "../data/projets";
import { LETTRE_M, LETTRE_N, LETTRE_H } from "../data/motifs";
import MatriceLed from "./MatriceLed";

export default function Hero() {
  return (
    <section id="accueil" className="accueil">
      <div className="accueil-texte">
        <p className="etiquette">
          <span className="pastille" aria-hidden="true" />
          À la recherche d'un stage
        </p>
        <h1>Mohammad Nasr Hasmi</h1>
        <p className="accroche">
          J'aime construire des choses qui marchent pour vrai, du logiciel au matériel.
        </p>
        <p className="reperes">
          2<sup>e</sup> année de Techniques de l'informatique · Cégep Marie-Victorin, Montréal
        </p>
        <div className="actions">
          <a className="bouton plein" href="#projets">Voir mes projets</a>
          {liens.cv && (
            <a className="bouton" href={liens.cv} target="_blank" rel="noreferrer">
              CV (PDF)
            </a>
          )}
          <a className="bouton" href={liens.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="accueil-visuel">
        <MatriceLed
          motifs={[LETTRE_M, LETTRE_N, LETTRE_H]}
          description="Matrice LED 8×8 qui affiche les initiales M, N et H"
        />
        <p className="serigraphie" aria-hidden="true">U1 · HT16K33 · 0x70</p>
      </div>
    </section>
  );
}
