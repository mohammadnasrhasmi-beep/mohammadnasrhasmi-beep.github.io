import { competences } from "../data/projets";

export default function Skills() {
  return (
    <section id="competences" className="section">
      <h2><span className="num">02.</span> Compétences</h2>
      <div className="skills">
        {competences.map((bloc) => (
          <div key={bloc.groupe} className="skill-card">
            <h3>{bloc.groupe}</h3>
            <ul>
              {bloc.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
