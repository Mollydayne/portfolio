export default function ResumeOverview() {
  const projects = [
    {
      id: 'Formation',
      title: 'Titre RNCP V - Développeur Web',
      description: 'Juillet 2025, Holberton School Bordeaux, bac +2',
    },
    {
      id: 'Expériences',
      title: 'Technicienne SAV',
      description: [
        'Diagnostic et résolution de problèmes techniques complexes',
        'Travail sous pression avec des objectifs de satisfaction client',
        'Analyse de logs et suivi d’incidents via outils internes',
        'Identification et résolution efficace des dysfonctionnements',
        'Appels & mails, entrants et sortants',
      ],
    },
  ];

  return (
    <section className="bg-[#1a1a1a] text-white pt-6 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Titre + miniature du CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start">
          <h2 className="text-5xl md:text-7xl lg:text-8xl leading-none font-black text-gray-300 tracking-tight uppercase break-words">
            Parcours
          </h2>

          <div className="flex flex-col items-center md:items-end self-end">
            <img
              src="/cv-thumbnail.png"
              alt="Miniature CV"
              className="w-32 max-w-full h-auto rounded-lg shadow-md mb-2"
            />
            <a
              href="/cv-clarisse.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f85e00] text-black font-bold px-4 py-2 rounded-full hover:bg-[#ff7f2a] transition"
            >
              Voir le CV
            </a>
          </div>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                proj.title === 'Titre RNCP V - Développeur Web'
                  ? 'justify-start'
                  : 'justify-between'
              } gap-2 p-4 border border-[#333] rounded-lg transition-shadow duration-300 hover:shadow-[0_0_25px_#f85e00aa] hover:bg-[#2a2a2a]`}
            >
              {/* Badge */}
              <span className="bg-[#f85e00] text-black rounded-full px-4 py-1 w-fit font-bold text-sm">
                {proj.id}
              </span>

              {/* Titre */}
              {proj.title && (
                <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
              )}

              {/* Description */}
              {Array.isArray(proj.description) ? (
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {proj.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400 mt-0">{proj.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
