import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import useApparition from "./hooks/useApparition";

const ANNEE = new Date().getFullYear();

export default function App() {
  useApparition();

  return (
    <>
      <a className="saut" href="#contenu">Aller au contenu</a>
      <Header />
      <main id="contenu">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer>Conçu et codé avec React · {ANNEE}</footer>
    </>
  );
}
