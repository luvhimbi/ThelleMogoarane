// Replace with your Google Analytics Measurement ID (e.g. G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = 'G-JTTS2J4STZ'

let initialized = false

export function initAnalytics() {
  if (initialized || !GA_MEASUREMENT_ID) {
    return
  }

  // Load gtag.js script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  })

  initialized = true
}

export function trackPageView(path: string) {
  if (!initialized) return
  window.dataLayer?.push('event', 'page_view', {
    page_path: path,
  })
}

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: unknown[]
  }
}
