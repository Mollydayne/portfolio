export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center px-6 md:px-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* PHOTO - Responsive */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/molly.jpg"
            alt="Portrait de Clarisse Perez"
            className="rounded-2xl w-full max-w-[340px] h-auto object-cover shadow-[0_8px_30px_rgba(0,0,0,0.4)] border-[4px] border-[#2f2f2f]"
          />
        </div>

        {/* TEXTE - Responsive et accessible */}
        <div className="text-left font-light">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#d6d6d6] leading-tight mb-6">
            BONJOUR<span className="text-primary"> !</span>
          </h2>

          <p className="text-[#f0f0f0] text-lg mb-4 leading-relaxed">
            Moi c’est Clarisse, développeuse créatrice d'expériences digitales utiles et bien pensées.
          </p>
          <p className="text-[#f0f0f0] text-lg mb-4 leading-relaxed">
            Avant, j’étais technicienne chez Free. Aujourd’hui, je crée des applis web qui allient esthétique, accessibilité et impact.
          </p>
          <p className="text-[#f0f0f0] text-lg leading-relaxed">
            Et en dehors du code ? J’organise des murder parties, je cours des semi-marathons, je bricole des gadgets que j'imprime en 3D ou j’ajoute des Arduinos.
          </p>

          {/* BOUTONS CONTACT - Ajout effet hover & tactile-friendly */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              {
                label: "cl.w.perez@gmail.com",
                href: "mailto:cl.w.perez@gmail.com",
                aria: "Envoyer un mail à Clarisse",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/cl-perez/",
                aria: "Voir le profil LinkedIn de Clarisse",
              },
              {
                label: "GitHub",
                href: "https://github.com/Mollydayne",
                aria: "Voir le GitHub de Clarisse",
              },
            ].map(({ label, href, aria }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={aria}
                className="bg-[#f85e00] hover:bg-[#e24f00] text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg active:scale-100"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
