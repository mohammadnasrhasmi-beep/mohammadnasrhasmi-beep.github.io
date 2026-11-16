import { useEffect, useState } from "react";

/*
  Matrice LED 8×8 dessinée en CSS, comme celle du projet ESP32.
  Les motifs (8 octets chacun) sont dans src/data/motifs.js.
  Avec plusieurs motifs, la matrice passe de l'un à l'autre.
*/
export default function MatriceLed({ motifs, description, delai = 2400 }) {
  const [index, setIndex] = useState(0);

  // Alterne entre les motifs, sauf si l'utilisateur préfère moins d'animations.
  useEffect(() => {
    if (motifs.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % motifs.length), delai);
    return () => clearInterval(id);
  }, [motifs.length, delai]);

  const motif = motifs[index];

  return (
    <div className="matrice" role="img" aria-label={description}>
      {motif.map((octet, rangee) =>
        [...Array(8)].map((_, colonne) => {
          const allumee = (octet >> (7 - colonne)) & 1;
          return <span key={`${rangee}-${colonne}`} className={allumee ? "led allumee" : "led"} />;
        })
      )}
    </div>
  );
}
