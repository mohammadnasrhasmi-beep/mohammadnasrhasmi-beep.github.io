import { liens } from "../data/projets";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 data-apparition><span className="num">04</span> Contact</h2>
      <div className="contact-bloc" data-apparition>
        <p className="contact-phrase">
          Je cherche des occasions d'apprendre : stage, projet ou collaboration.
          N'hésite pas à m'écrire !
        </p>
        <a className="courriel" href={`mailto:${liens.email}`}>{liens.email}</a>
        <ul className="reseaux">
          <li><a href={liens.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></li>
          <li><a href={liens.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></li>
          <li><a href={liens.instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a></li>
          {liens.cv && (
            <li><a href={liens.cv} target="_blank" rel="noreferrer">CV (PDF)</a></li>
          )}
        </ul>
      </div>
    </section>
  );
}
