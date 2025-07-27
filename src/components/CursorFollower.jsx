import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CursorFollower() {
  const follower = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Vérifie si on est sur un écran tactile
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    if (isTouchDevice) {
      setIsVisible(false);
      return; // on ne met aucun eventListener
    }

    const setX = gsap.quickTo(follower.current, "x", { duration: 0.4 });
    const setY = gsap.quickTo(follower.current, "y", { duration: 0.4 });

    let last = { x: 0, y: 0, time: Date.now() };

const move = (e) => {
  // Récupère le timestamp actuel en millisecondes
  const now = Date.now();

  // Calcule le temps écoulé depuis le dernier mouvement
  const dt = now - last.time;

  // Calcule le déplacement du curseur depuis la dernière position (axe X et Y)
  const dx = e.clientX - last.x;
  const dy = e.clientY - last.y;

  // Calcule la vitesse du curseur en pixels par milliseconde
  // Formule : distance / temps
  const speed = Math.sqrt(dx * dx + dy * dy) / dt;

  // Met à jour la position du cercle à la position actuelle de la souris
  // On retire 15px pour centrer le cercle par rapport au curseur
  setX(e.clientX - 15);
  setY(e.clientY - 15);

  // Calcule un facteur d'échelle en fonction de la vitesse du curseur
  // Limite la déformation maximale à 0.5 pour éviter un effet trop extrême
  const scale = 1 + Math.min(speed * 0.5, 0.5);

  // Anime le cercle avec une déformation selon la direction du mouvement
  // - scaleX : étirement horizontal
  // - scaleY : étirement vertical
  // - rotation : angle du mouvement pour orienter la forme
  gsap.to(follower.current, {
    scaleX: 1 + scale * (dx / (Math.abs(dx) + Math.abs(dy) || 1)) * 0.2,
    scaleY: 1 + scale * (dy / (Math.abs(dx) + Math.abs(dy) || 1)) * 0.2,
    rotation: Math.atan2(dy, dx) * 180 / Math.PI,
    duration: 0.3, // durée de l'animation en secondes
  });

  // Sauvegarde les nouvelles coordonnées et l'heure pour la prochaine frame
  last = { x: e.clientX, y: e.clientY, time: now };
};


    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Si on est sur mobile, on ne rend rien du tout
  if (!isVisible) return null;

  return (
    <div
      ref={follower}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: "rgba(255,165,0,0.6)",
        filter: "blur(8px)",
        transformOrigin: "center center",
      }}
    />
  );
}
