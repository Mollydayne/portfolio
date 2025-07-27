// ResumeCard.jsx
import { useRef, useEffect, useState } from "react"

export default function ResumeCard({ children }) {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`p-6 text-white relative transition-all duration-1000 ${
        isVisible ? "animate-border" : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
