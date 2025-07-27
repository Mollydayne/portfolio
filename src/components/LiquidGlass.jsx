import { useEffect, useState } from "react";

export default function LiquidGlass() {
  const [blobs, setBlobs] = useState([]);

  useEffect(() => {
    // Crée plusieurs blobs avec des positions et délais différents
    const newBlobs = Array.from({ length: 3 }).map(() => ({
      id: crypto.randomUUID(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setBlobs(newBlobs);
  }, []);

  return (
<div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Filtre de distorsion type verre */}
          <filter id="glassDistort">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {blobs.map((blob, index) => (
          <circle
            key={blob.id}
            r="150"
            fill="white"
            opacity="0.05"
            filter="url(#glassDistort)"
            style={{
              animation: `moveBlob 10s ease-in-out ${blob.delay}s infinite alternate`,
              transformOrigin: "center",
            }}
            cx={`${blob.left}%`}
            cy={`${blob.top}%`}
          />
        ))}
      </svg>

      {/* Animation des blobs */}
      <style jsx>{`
        @keyframes moveBlob {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          100% {
            transform: scale(1.5) translate(50px, -50px);
          }
        }
      `}</style>
    </div>
  );
}
