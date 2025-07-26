import MonogrammeBackground from './MonogrammeBackground'
import SpinningStar from './SpinningStar'
import ClickableStar from './ClickableStar'
import HeroText from './HeroText'


export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-[#727272] text-black overflow-hidden">
      <MonogrammeBackground />
      <SpinningStar />
      <ClickableStar />

      <div className="relative z-10 flex justify-center items-center h-full">
               <HeroText />

      </div>
    </div>
  )
}
