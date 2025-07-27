export default function SpotlightCard({ image, buttonLabel, buttonLink }) {
  const isPortraitPhoto = image === "/molly.jpg";

  return (
    <div className="group relative bg-[#1b1b1b] border border-neutral-700 rounded-xl overflow-hidden w-full max-w-[320px] h-[450px] p-4 flex flex-col justify-between shadow-md transition duration-300 ease-in-out hover:border-orange-500 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)] hover:scale-[1.015]">
      
      {/* Image */}
      <div className="w-full h-[65%] rounded-md overflow-hidden flex items-center justify-center bg-black">
        <img
          src={image}
          alt={buttonLabel}
          className={`h-full ${isPortraitPhoto ? 'object-contain' : 'object-cover'}`}
        />
      </div>

      {/* Bouton */}
      <div className="text-center mt-4">
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded-full transition"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  )
}
