// components/ProjectsOverview.jsx

export default function ProjectsOverview() {
  // Liste des projets à afficher
  const projects = [
    {
      id: '01',
      title: 'NomNom',
      description:
        'Application de gestion de livraisons pour traiteurs indépendants, hébergée, déployée et fonctionnelle (React, Node.js, PostgreSQL, express).',
    },
    {
      id: '02',
      title: 'Petit Signal – TBM',
      description:
        'Mini ordinateur imprimé en 3D, connecté (arduino ESP32) affichant les prochains trams en temps réel.',
    },
    {
      id: '03',
      title: 'Claw Machine',
      description:
        'Machine à pince en pixel art interactive, inspirée des fêtes foraines.',
    },
    {
      id: '04',
      title: 'HBNB',
      description:
        'Clone du site Airbnb développé en fullstack dans le cadre de ma formation chez Holberton (Python, SQL, HTML/CSS).',
    },
    {
      id: '05',
      title: 'Simple Shell',
      description:
        'Reproduction d’un shell Unix basique en langage C dans le cadre de ma formation chez Holberton.',
    },
    {
      id: '06',
      title: 'Printf',
      description:
        'Réécriture de la fonction printf en C, dans le cadre de ma formation chez Holberton.',
    },
  ]

  return (
    <section className="bg-[#1a1a1a] text-white pt-6 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl leading-none font-black text-gray-300 tracking-tight mb-12 uppercase">
          Projets
        </h2>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col gap-2 p-4 rounded-lg transition-shadow duration-300 hover:shadow-[0_0_25px_#f85e00aa] hover:bg-[#2a2a2a]"
            >
              {/* Badge numéro */}
              <span className="bg-[#f85e00] text-black rounded-full px-4 py-1 w-fit font-bold text-sm">
                {proj.id}
              </span>

              {/* Titre du projet */}
              <h3 className="text-xl font-semibold">{proj.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-400">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
