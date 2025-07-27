import { useEffect, useState } from "react"
import LiquidGlass from './LiquidGlass'

export default function SpotlightSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Effet Liquid Glass en arrière-plan */}
      <LiquidGlass />

      {/* Cercle orange visible pour l'effet lampe torche */}
      <div
        className="absolute w-40 h-40 rounded-full bg-orange-400 opacity-30 pointer-events-none z-20"
        style={{
          transform: `translate(${mouse.x - 80}px, ${mouse.y - 80}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      {/* Texte blanc masqué sauf dans le masque */}
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
    </section>
  )
}
