import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SeoHead from '../Seo/SeoHead'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import CookieConsent from '../CookieConsent/CookieConsent'
import { trackPageView } from '../../utils/analytics'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  useEffect(() => {
    trackPageView(pathname)
  }, [pathname])

  return (
    <div className="app">
      <SeoHead />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  )
}

