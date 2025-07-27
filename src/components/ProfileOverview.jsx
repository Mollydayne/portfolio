export default function ProfileOverview() {
  const softSkills = [
    "Créativité",
    "Autonomie",
    "Pédagogie",
    "Gestion du temps",
    "Apprentissage continu",
  ]

  const sections = [
    {
      id: "01",
      title: "Formation",
      content: (
        <>
          <p className="font-semibold">Holberton School Bordeaux</p>
          <p className="text-sm text-gray-300 mb-1">2024 – 2025</p>
          <p className="text-sm text-gray-300">
            Formation intensive en développement web fullstack.
          </p>
        </>
      ),
    },
    {
      id: "02",
      title: "Expérience",
      content: (
        <>
          <p className="font-semibold">Développeuse freelance</p>
          <p className="text-sm text-gray-300">2024 – aujourd’hui</p>
          <p className="text-sm mb-3 text-gray-300">
            Création de sites vitrines, gestion de projets clients.
          </p>
          <p className="font-semibold">Technicienne chez Free</p>
          <p className="text-sm text-gray-300">2018 – 2023</p>
          <p className="text-sm text-gray-300">
            Support technique et accompagnement client.
          </p>
        </>
      ),
    },
    {
      id: "03",
      title: "Compétences",
      content: (
        <ul className="list-disc pl-5 text-sm text-gray-300">
          <li>React, Express, PostgreSQL</li>
          <li>Tailwind CSS, API REST</li>
          <li>Responsive Design, Git, GitHub</li>
        </ul>
      ),
    },
  ]

  return (
    <section id="profile" className="bg-[#1a1a1a] text-white py-16 px-4 md:px-20">
      {/* Bandeau défilant des soft skills */}
      <div className="overflow-hidden whitespace-nowrap mb-16">
        <div className="animate-marquee text-orange-400 uppercase tracking-widest text-sm font-semibold">
          {softSkills.map((skill, index) => (
            <span key={index} className="mx-6">
              • {skill} •
            </span>
          ))}
        </div>
      </div>

      {/* Titre */}
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Parcours & Compétences</h2>

      {/* Grille des blocs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {sections.map((section) => (
          <div key={section.id} className="text-left">
            <div className="bg-orange-600 text-white text-xs font-bold w-fit px-3 py-1 rounded-full mb-2">
              {section.id}
            </div>
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <div>{section.content}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
