export default function ClickableStar() {
  return (
    <a
      href="https://stars.chromeexperiments.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-4 right-4 z-50 hover:scale-110 transition-transform duration-300"
      title="Clique si tu aimes les étoiles !"
    >
      <img
        src="/star.png"
        alt="Hidden star"
        className="w-8 h-8 pointer-events-auto"
      />
    </a>
  )
}
