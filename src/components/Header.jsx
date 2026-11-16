export default function Header() {
  return (
    <header className="entete">
      <a href="#accueil" className="logo" aria-label="Mohammad Nasr Hasmi, retour en haut de la page">
        MNH<span aria-hidden="true">.</span>
      </a>
      <nav aria-label="Navigation principale">
        <a href="#projets">Projets</a>
        <a href="#apropos">À propos</a>
        <a href="#competences">Compétences</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
