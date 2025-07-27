import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Videos from '../components/Videos'
import Resume from '../components/Resume'
import SpotlightSection from '../components/SpotlightSection'



export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <section id="hero" className="snap-start h-screen">
        <Hero />
      </section>

<section id="SpotlightSection" className="snap-start h-screen">
        <SpotlightSection />
      </section>

      <section id="about" className="snap-start h-screen">
        <About />
      </section>

      <section id="resume" className="snap-start h-screen overflow-y-auto">
  <Resume />
</section>

      <section id="videos" className="snap-start h-screen">
        <Videos />
      </section>

      <section id="projects" className="snap-start h-screen">
        <Projects />
      </section>

      
    </div>
  )
}
