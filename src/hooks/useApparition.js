import { useEffect } from "react";

/*
  Apparition au défilement.
  Tout élément qui porte l'attribut data-apparition reçoit la classe "visible"
  quand il entre dans l'écran. L'animation elle-même est dans index.css.
  Si l'utilisateur a demandé moins d'animations, on ne fait rien : tout reste visible.
*/
export default function useApparition() {
  useEffect(() => {
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduit || !("IntersectionObserver" in window)) return;

    const racine = document.documentElement;
    racine.classList.add("apparition-active");

    const observateur = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (entree.isIntersecting) {
            entree.target.classList.add("visible");
            observateur.unobserve(entree.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll("[data-apparition]").forEach((el) => observateur.observe(el));

    return () => {
      observateur.disconnect();
      racine.classList.remove("apparition-active");
    };
  }, []);
}
