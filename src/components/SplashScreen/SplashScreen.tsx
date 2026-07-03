import { useEffect, useState } from 'react'
import './SplashScreen.css'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Show splash for 1.5 seconds, then fade out
    const timer = setTimeout(() => {
      setIsFading(true)
      // Wait for fade animation to complete before removing from DOM
      setTimeout(() => setIsVisible(false), 500)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`splash-screen ${isFading ? 'splash-screen--fade-out' : ''}`}>
      <div className="splash-screen__content">
        <img src="/Capture.webp" alt="Thelle Mogoerane Foundation" className="splash-screen__logo" />
        <div className="splash-screen__loader"></div>
      </div>
    </div>
  )
}
