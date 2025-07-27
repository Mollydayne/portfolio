import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Videos from '../components/Videos'
import Resume from '../components/Resume'
import SpotlightSection from '../components/SpotlightSection'

export default function Home() {
  return (
    <div className="snap-y snap-mandatory min-h-screen overflow-y-scroll scroll-smooth">
      {/* Section d'accueil avec monogramme, étoile animée et texte principal */}
      <section id="hero" className="snap-start min-h-screen">
        <Hero />
      </section>

      {/* Section effet Spotlight / vitre liquide */}
      <section id="SpotlightSection" className="snap-start min-h-screen">
        <SpotlightSection />
      </section>

      {/* Section About avec les cartes LinkedIn / GitHub / Email */}
      <section id="about" className="snap-start min-h-screen">
        <About />
      </section>

      {/* Section Vidéos pour découvrir mon univers en images */}
      <section id="videos" className="snap-start min-h-screen">
        <Videos />
      </section>

      {/* Section Projets cliquables avec navigation vers les détails */}
      <section id="projects" className="snap-start min-h-screen">
        <Projects />
      </section>

      {/* Section CV / Parcours avec effet d’apparition et mise en forme responsive */}
      <section id="resume" className="snap-start min-h-screen">
        <Resume />
      </section>

      {/* Footer (optionnel) – si tu veux l’activer, décommente la ligne ci-dessous */}
      {/* <Footer /> */}
    </div>
  )
}
