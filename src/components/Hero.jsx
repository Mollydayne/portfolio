import MonogrammeBackground from './MonogrammeBackground'
import SpinningStar from './SpinningStar'
import ClickableStar from './ClickableStar'
import HeroText from './HeroText'
import LiquidGlass from './LiquidGlass' 

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-[#727272] text-black overflow-hidden">
      {/* Fond décoratif */}
      <MonogrammeBackground />

      {/* Éléments visuels en arrière-plan */}
      <SpinningStar />
      <ClickableStar />

      {/* Effet de flou organique limité à Hero */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <LiquidGlass />
      </div>

      {/* Texte principal */}
      <div className="relative z-20 flex justify-center items-center h-full">
        <HeroText />
      </div>
    </div>
  )
}
