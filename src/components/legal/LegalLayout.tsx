import { Link } from 'react-router-dom'
import { FOUNDATION } from '../../constants/foundation'
import './LegalLayout.css'
import type { ReactNode } from 'react'

type LegalLayoutProps = {
  title: string
  children: ReactNode
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <main className="legal-page" id="main-content">
      <div className="container legal-page__inner">
        <Link to="/" className="legal-page__back">
          &larr; Back to home
        </Link>

        <header className="legal-page__header">
          <p className="legal-page__eyebrow">{FOUNDATION.name}</p>
          <h1 className="legal-page__title">{title}</h1>
          <p className="legal-page__updated">Last updated: {FOUNDATION.lastUpdated}</p>
        </header>

        <article className="legal-page__content">{children}</article>

        <nav className="legal-page__nav" aria-label="Related legal documents">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/popi-act">POPI Act</Link>
          <Link to="/dmca">DMCA</Link>
        </nav>
      </div>
    </main>
  )
}
