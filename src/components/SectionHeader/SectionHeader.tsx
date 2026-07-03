import './SectionHeader.css'
import ScrollReveal from '../animations/ScrollReveal'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  subtitle?: string
  light?: boolean
  centered?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = false,
}: SectionHeaderProps) {
  return (
    <ScrollReveal>
      <header className={`section-header ${light ? 'section-header--light' : ''} ${centered ? 'section-header--centered' : ''}`}>
        <span className="section-header__eyebrow">{eyebrow}</span>
        <h2 className="section-header__title">{title}</h2>
        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </header>
    </ScrollReveal>
  )
}
