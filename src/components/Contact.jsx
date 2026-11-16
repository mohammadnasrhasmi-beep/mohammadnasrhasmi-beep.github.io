import { liens } from "../data/projets";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2><span className="num">04.</span> Contact</h2>
      <p>
        Je cherche des occasions d'apprendre : stage, projet ou collaboration.
        N'hésite pas à m'écrire !
      </p>
      <a className="btn primary" href={`mailto:${liens.email}`}>Me contacter</a>
      <div className="socials">
        <a href={liens.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={liens.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={liens.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </section>
  );
}
