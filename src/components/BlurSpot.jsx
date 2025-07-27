import { useEffect, useState } from "react";

export default function BlurSpot() {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: "40%", left: "40%" });

  useEffect(() => {
    let timeoutId;

    const triggerEffect = () => {
      // Position aléatoire sur l'écran
      const top = Math.random() * 80 + "%";
      const left = Math.random() * 80 + "%";
      setPosition({ top, left });

      setShow(true);

      // Cache après 1.2s
      setTimeout(() => setShow(false), 1200);

      // Relance dans 5-15s
      const delay = Math.random() * 10000 + 5000;
      timeoutId = setTimeout(triggerEffect, delay);
    };

    timeoutId = setTimeout(triggerEffect, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-40 w-60 h-60 bg-white/10 backdrop-blur-md rounded-full transition-opacity duration-500 ease-in-out ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
        filter: "blur(40px)",
        borderRadius: "40% 60% 60% 40% / 50% 40% 60% 50%", // blobish
      }}
    />
  );
}
