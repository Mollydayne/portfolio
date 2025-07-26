export default function Videos() {
  return (
    <section
      id="videos"
      className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center px-6 md:px-20 py-20"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          On fait connaissance ? 
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vidéo NomNom */}
          <div className="w-full aspect-video shadow-lg rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wxovjJts1qU"
              title="Présentation Nomnom"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Vidéo Interview École */}
          <div className="w-full aspect-video shadow-lg rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/x8nH8rQTZIQ"
              title="Interview Clarisse Holberton"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
