import { useState, useEffect } from 'react'
import { initAnalytics } from '../../utils/analytics'
import './CookieConsent.css'

const COOKIE_KEY = 'tmf_cookie_consent'

type ConsentValue = 'accepted' | 'declined'

function getStoredConsent(): ConsentValue | null {
  try {
    const value = localStorage.getItem(COOKIE_KEY)
    if (value === 'accepted' || value === 'declined') return value
    return null
  } catch {
    return null
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored === null) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
    if (stored === 'accepted') {
      initAnalytics()
    }
  }, [])

  function handleAccept() {
    try {
      localStorage.setItem(COOKIE_KEY, 'accepted')
    } catch { /* storage full or blocked */ }
    initAnalytics()
    setVisible(false)
  }

  function handleDecline() {
    try {
      localStorage.setItem(COOKIE_KEY, 'declined')
    } catch { /* storage full or blocked */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <div className="cookie-consent__inner">
        <div className="cookie-consent__content">
          <h3 className="cookie-consent__title">We value your privacy</h3>
          <p className="cookie-consent__text">
            We use cookies and similar technologies to analyse site traffic and improve your
            experience. By accepting, you consent to our use of analytics cookies in accordance
            with our{' '}
            <a href="/privacy-policy">Privacy Policy</a> and the{' '}
            <a href="/popi-act">POPI Act</a>.
          </p>
        </div>
        <div className="cookie-consent__actions">
          <button
            type="button"
            className="btn btn-primary cookie-consent__btn"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            type="button"
            className="btn btn-outline cookie-consent__btn"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
