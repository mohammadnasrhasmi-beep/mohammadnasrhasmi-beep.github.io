export default function About() {
  return (
    <section id="apropos" className="section">
      <h2 data-apparition><span className="num">02</span> À propos</h2>
      <div className="apropos" data-apparition>
        <div className="apropos-texte">
          <p>
            Je suis étudiant en <strong>Techniques de l'informatique</strong> au Cégep Marie-Victorin.
            Cette session, je touche à l'architecture logicielle, la conception de réseaux,
            la sécurité informatique et la programmation de plateformes embarquées.
          </p>
          <p>
            En dehors des cours, j'ai participé à un <strong>hackathon</strong>, je monte un
            <strong> homelab</strong> avec de vieux PC et j'expérimente avec l'IA, comme un bot
            Minecraft piloté par un modèle de langage. Le gaming reste souvent ma source d'idées.
          </p>
        </div>

        <dl className="en-bref">
          <div>
            <dt>Formation</dt>
            <dd>DEC en Techniques de l'informatique, en cours</dd>
          </div>
          <div>
            <dt>Collège</dt>
            <dd>Cégep Marie-Victorin, Montréal</dd>
          </div>
          <div>
            <dt>Langues</dt>
            <dd>Français, anglais</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
