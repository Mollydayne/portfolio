export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center px-6 md:px-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* PHOTO */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/molly.jpg"
            alt="Clarisse"
            className="rounded-2xl w-[340px] h-[440px] object-cover shadow-[0_8px_30px_rgba(0,0,0,0.4)] border-[4px] border-[#2f2f2f]"
          />
        </div>

        {/* TEXTE */}
        <div className="text-left font-light">
          <h1 className="text-6xl md:text-7xl font-black text-[#d6d6d6] leading-tight mb-6">
            BONJOUR<span className="text-primary"> !</span>
          </h1>

          <p className="text-[#dcdcdc] text-lg mb-4 leading-relaxed">
            Moi c’est Clarisse, développeuse créatrice d'expériences digitales utiles et bien pensées.
          </p>
          <p className="text-[#dcdcdc] text-lg mb-4 leading-relaxed">
            Avant, j’étais technicienne chez Free. Aujourd’hui, je crée des applis web qui allient esthétique, accessibilité et impact.
          </p>
          <p className="text-[#dcdcdc] text-lg leading-relaxed">
            Et en dehors du code ? J’organise des murder parties, je cours des semi-marathons, je bricole des gadgets que j'imprime en 3D où j'ajoute des arduinos.
          </p>

          {/* CONTACT */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:cl.w.perez@gmail.com"
              className="bg-[#f85e00] hover:bg-[#e24f00] text-black font-semibold px-6 py-2 rounded-full transition"
            >
              cl.w.perez@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/cl-perez/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f85e00] hover:bg-[#e24f00] text-black font-semibold px-6 py-2 rounded-full transition"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/Mollydayne"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f85e00] hover:bg-[#e24f00] text-black font-semibold px-6 py-2 rounded-full transition"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
