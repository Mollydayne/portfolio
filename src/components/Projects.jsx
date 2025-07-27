import ProjectBanner from '../components/ProjectBanner'
import ProjectsOverview from '../components/ProjectsOverview'


export default function Projects() {
  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-6 py-16">
      
      {/* Bannière animée */}
      <ProjectBanner />
            <ProjectsOverview />

      {/* Le reste de ta section projets ici */}
      <div className="mt-12">
        {/* Exemple de grille de projets */}
        {/* Ici tu ajoutes tes cartes ou composants de projets */}
      </div>
    </section>
  )
}
