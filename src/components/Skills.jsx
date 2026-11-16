import { competences } from "../data/projets";

export default function Skills() {
  return (
    <section id="competences" className="section">
      <h2 data-apparition><span className="num">03</span> Compétences</h2>
      <dl className="competences" data-apparition>
        {competences.map((bloc) => (
          <div key={bloc.groupe} className="competence">
            <dt>{bloc.groupe}</dt>
            <dd>
              <ul>
                {bloc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
