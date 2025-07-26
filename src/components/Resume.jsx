export default function Resume() {
  const skills = [
    { name: "C", img: "/logos/c.png" },
    { name: "Python", img: "/logos/python.png" },
    { name: "Node.js", img: "/logos/node.png" },
    { name: "MySQL", img: "/logos/mysql.png" },
    { name: "API", img: "/logos/api.png" },
    { name: "HTML5", img: "/logos/html.png" },
    { name: "CSS3", img: "/logos/css.png" },
    { name: "Figma", img: "/logos/figma.png" },
    { name: "Photoshop", img: "/logos/photoshop.png" },
    { name: "Blender", img: "/logos/blender.png" },
    { name: "Tailwind CSS", img: "/logos/tailwind.png" },
    { name: "React", img: "/logos/react.png" },
    { name: "JavaScript", img: "/logos/javascript.png" },
  ];

  return (
    <section className="h-screen snap-start bg-neutral-900 text-white flex flex-col justify-between px-6 py-12">
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* FORMATION */}
        <div className="border border-gray-700 p-6 rounded-lg w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Formation</h2>
          <p className="text-sm text-gray-400">2024 - 2025</p>
          <p className="font-semibold">Holberton School Bordeaux</p>
          <p className="text-sm text-gray-300">Formation intensive en développement web fullstack</p>
        </div>

        {/* EXPÉRIENCE */}
        <div className="border border-gray-700 p-6 rounded-lg w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Expérience</h2>
          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <p className="text-gray-400">2024 - aujourd’hui</p>
              <p className="font-semibold">Développeuse freelance</p>
              <p>Création de sites vitrines, gestion de projets clients</p>
            </div>
            <div>
              <p className="text-gray-400">2018 - 2023</p>
              <p className="font-semibold">Technicienne chez Free</p>
              <p>Support technique et accompagnement client</p>
            </div>
          </div>
        </div>

        {/* COMPÉTENCES */}
        <div className="border border-gray-700 p-6 rounded-lg w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Compétences</h2>
          <ul className="list-disc ml-5 text-sm text-gray-300">
            <li>React, Express, SQL</li>
            <li>Responsive Design, Tailwind</li>
            <li>Gestion de projet, autonomie</li>
            <li>Créativité & pédagogie</li>
          </ul>
          <h3 className="mt-6 font-semibold">Langues</h3>
          <ul className="text-sm text-gray-300">
            <li>Français (natif)</li>
            <li>Anglais (intermédiaire avancé, C1)</li>
          </ul>
        </div>
      </div>

      {/* LOGOS */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <h3 className="text-center text-lg font-semibold mb-4">Technologies maîtrisées</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-sm text-gray-300">
              <img src={skill.img} alt={skill.name} className="w-10 h-10 object-contain" />
              <span className="mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
