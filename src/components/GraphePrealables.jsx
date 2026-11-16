/*
  Petit schéma d'un graphe de préalables, pour la fiche graph-your-x.
  C'est une illustration du principe (fait → disponible → objectif),
  pas une capture de la vraie application.
*/
const NOEUDS = [
  { id: "a", x: 40, y: 40, etat: "fait" },
  { id: "b", x: 40, y: 110, etat: "fait" },
  { id: "c", x: 40, y: 180, etat: "fait" },
  { id: "d", x: 120, y: 75, etat: "disponible" },
  { id: "e", x: 120, y: 160, etat: "disponible" },
  { id: "f", x: 200, y: 110, etat: "bloque" },
  { id: "g", x: 270, y: 110, etat: "objectif" },
];

const LIENS = [
  ["a", "d"], ["b", "d"], ["b", "e"], ["c", "e"], ["d", "f"], ["e", "f"], ["f", "g"],
];

const position = (id) => NOEUDS.find((n) => n.id === id);

export default function GraphePrealables() {
  return (
    <figure className="graphe">
      <svg
        viewBox="0 0 310 220"
        role="img"
        aria-label="Schéma d'un graphe de préalables : des sujets déjà faits débloquent les suivants, jusqu'à l'objectif"
      >
        {LIENS.map(([de, vers]) => {
          const a = position(de);
          const b = position(vers);
          return <line key={de + vers} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
        })}
        {NOEUDS.map((n) => (
          <circle key={n.id} cx={n.x} cy={n.y} r={n.etat === "objectif" ? 17 : 12} className={n.etat} />
        ))}
        {/* Crochets sur les sujets déjà faits */}
        {NOEUDS.filter((n) => n.etat === "fait").map((n) => (
          <path key={n.id} className="crochet" d={`M${n.x - 5} ${n.y} l4 4 l7 -8`} />
        ))}
      </svg>
      <figcaption className="serigraphie" aria-hidden="true">Fait · Disponible · Objectif</figcaption>
    </figure>
  );
}
