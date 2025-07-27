import { useEffect, useState } from "react"
import LiquidGlass from './LiquidGlass'

export default function SpotlightSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

  // Gestion de la position de la souris
  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  // Détection du tactile (mobile ou tablette)
  useEffect(() => {
    const handleTouchStart = () => setIsTouch(true)
    window.addEventListener("touchstart", handleTouchStart, { once: true })
    return () => window.removeEventListener("touchstart", handleTouchStart)
  }, [])

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Arrière-plan LiquidGlass */}
      <LiquidGlass />

      {/* Version desktop avec spotlight */}
      {!isTouch && (
        <>
          {/* Cercle orange qui suit la souris */}
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              transform: `translate(${mouse.x - 80}px, ${mouse.y - 80}px)`,
              transition: "transform 0.05s linear",
            }}
          >
            <div className="w-40 h-40 rounded-full bg-orange-400 opacity-30 relative" />
          </div>

          {/* Texte masqué sauf sous le spotlight */}
          <div
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
            style={{
              WebkitMaskImage: `radial-gradient(circle 10vw at ${mouse.x}px ${mouse.y}px, white 98%, transparent 100%)`,
              maskImage: `radial-gradient(circle 10vw at ${mouse.x}px ${mouse.y}px, white 98%, transparent 100%)`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskSize: "cover",
            }}
          >
            <p className="font-grenze text-white text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] text-center px-4 leading-tight">
              Je façonne des expériences performantes et esthétiques.
            </p>
          </div>
        </>
      )}

      {/* Version mobile/tablette sans spotlight */}
      {isTouch && (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
          <p className="font-grenze text-white text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] leading-tight animate-fadeInUp">
            Je façonne des expériences performantes et esthétiques.
          </p>
        </div>
      )}
    </section>
  )
}
