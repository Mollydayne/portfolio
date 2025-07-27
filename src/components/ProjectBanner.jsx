// components/ProjectBanner.jsx

export default function ProjectBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-[#1a1a1a] py-3 border-y border-[#333]">
      
      {/* Dégradé flouté à gauche */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

      {/* Dégradé flouté à droite */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

      {/* Bandeau animé */}
      <div className="whitespace-nowrap animate-marquee text-[#ffb563] font-bold text-xl tracking-widest uppercase flex items-center gap-6">
        
      

        {/* Texte qui se répète */}
        <span className="drop-shadow-[0_0_4px_#f85e00aa]">
          Alchimie visuelle • Poésie digitale • Récits interactifs • Esthétique pensée • Design narratif • 
        </span>
      </div>
    </div>
  )
}
