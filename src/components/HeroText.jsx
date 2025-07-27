export default function HeroText() {
  const letters = "PORTFOLIO".split("")

  return (
    <div className="relative z-10 px-6 pt-10 text-white font-[Ledger]">
      {/* Date en haut */}
      <p className="text-sm uppercase tracking-widest mb-2">2025</p>

      {/* Titre composé de lettres individuelles avec effet au survol */}
      <h1 className="text-[10vw] font-extrabold leading-none text-gray-100 flex gap-[0.1em] flex-wrap">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-300 ease-in-out hover:scale-125"
          >
            {letter}
          </span>
        ))}
      </h1>

      {/* Infos en bas */}
      <div className="flex justify-between text-md mt-4 border-t border-white/30 pt-2 tracking-wide">
        <span className="opacity-80">Clarisse Perez</span>
        <span className="opacity-80">Développeuse</span>
      </div>
    </div>
  )
}
