import { useEffect } from 'react'
import ScrollReveal from '../components/animations/ScrollReveal'
import './MemorialPage.css'

const operatives = [
  {
    name: 'Thelle Simon "Terror" Mogoerane',
    alias: 'Seiso Moletsane',
    lifespan: '1959 – 1983',
    role: 'G5 Unit MK Operative',
    bio: 'Born in Vosloorus, Terror Mogoerane became politically active following the 1976 Soweto Uprising. At just 17, he left South Africa for military training in Angola and East Germany. As a member of the elite Group of 5 (G5) unit under the command of Siphiwe Nyanda, he led operations targeting police stations. He was captured in Hamanskraal, sentenced to death, and executed at Pretoria Gallows on 9 June 1983.',
  },
  {
    name: 'Jerry Semano Mosololi',
    alias: 'Dragon Mosepedi',
    lifespan: '1957 – 1983',
    role: 'G5 Unit MK Operative',
    bio: 'An operative in the G5 unit who worked closely with Terror Mogoerane on critical operations. Jerry showed exceptional courage in training and active field missions. Arrested on 28 December 1981 alongside Mogoerane at their base near the Apies River, Jerry remained resolute during their trial and faced the hangman\'s noose with dignity on 9 June 1983.',
  },
  {
    name: 'Marcus Thabo Motaung',
    alias: 'Abey Lesolang',
    lifespan: '1955 – 1983',
    role: 'MK Operative',
    bio: 'Marcus Thabo Motaung was an active underground operative who played a vital logistics and support role. Arrested subsequently, he was tried alongside Mogoerane and Mosololi as the Moroka Three. Despite intense international appeals for clemency from the United Nations Security Council, he was executed in Pretoria on 9 June 1983.',
  },
]

const galleryImages = [
  {
    src: '/memorialPhotos1.webp',
    alt: 'Commemoration service and tribute gathering honouring the Moroka Three',
    caption: 'Remembrance Service: Gathering of family and foundation members to honour the revolutionary legacy of the Moroka Three.',
  },
  {
    src: '/m3.webp',
    alt: 'Memorial tribute ceremony and guests',
    caption: 'Honouring the Fallen: Guests gathered inside the memorial chamber to pay respect to the cadres.',
  },
  {
    src: '/m4.webp',
    alt: 'Commemorative exhibits and historical archives of the struggle',
    caption: 'Struggle Archives: Documentation outlining the history and sacrifice of Simon Thelle Mogoerane.',
  },
  {
    src: '/m5.webp',
    alt: 'Solemn tribute monument and remembrance gathering',
    caption: 'Lest We Forget: Commemoration and tribute ceremony preserving the history of our stalwarts.',
  },
  {
    src: '/m6.webp',
    alt: 'Dignitaries and guests at the memorial service briefing',
    caption: 'Preserving History: Briefing session and historical addresses during the memorial tribute program.',
  },
  {
    src: '/m7.webp',
    alt: 'Guests gathering outside the memorial site building',
    caption: 'Annual Commemoration: Excursion group gathering outside the memorial site honouring Terror and the Moroka Three.',
  },
]

export default function MemorialPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <main className="memorial-page" id="main-content">
      {/* Hero Header */}
      <section className="memorial-page__hero">
        <div className="memorial-page__hero-overlay" aria-hidden="true" />
        <div className="container memorial-page__hero-inner">
          <span className="memorial-page__eyebrow">Lest We Forget</span>
          <h1 className="memorial-page__title">Memorial &amp; Historical Archives</h1>
          <p className="memorial-page__subtitle">
            Honouring the courage, sacrifice, and revolutionary legacy of the Moroka Three and the struggle for a democratic South Africa.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="container memorial-page__container">
        
        {/* Historical Narrative */}
        <section className="memorial-page__section">
          <ScrollReveal>
            <div className="memorial-page__intro-card">
              <h2 className="memorial-page__section-title">The Moroka Three Legacy</h2>
              <div className="memorial-page__divider" />
              <p>
                The Moroka Three (Thelle Simon "Terror" Mogoerane, Jerry Semano Mosololi, and Marcus Thabo Motaung) 
                were members of Umkhonto we Sizwe (MK), the armed wing of the African National Congress (ANC). 
                Struggling against the oppression of the apartheid state, they conducted high-risk operations 
                targeting symbols of state power, including the Moroka and Orlando police stations.
              </p>
              <p>
                Following their arrest in late 1981, they stood trial for High Treason in a highly publicized court case 
                in 1982. Refusing to plead for mercy from a court of an illegitimate regime, they were sentenced to death. 
                On the morning of <strong>9 June 1983</strong>, despite worldwide campaigns for clemency and a formal 
                resolution from the UN Security Council, they were executed at the Pretoria Gallows. 
                Their courage remains a foundational pillar of the Thelle Mogoerane Foundation.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Profiles */}
        <section className="memorial-page__section">
          <div className="memorial-page__section-header">
            <span className="memorial-page__badge">Biographies</span>
            <h2 className="memorial-page__section-title">The Cadres</h2>
            <p className="memorial-page__section-subtitle">
              Detailed historical profiles of the three young soldiers executed together for their fight for justice.
            </p>
          </div>

          <div className="memorial-page__profiles-grid">
            {operatives.map((op, idx) => (
              <ScrollReveal key={op.name} delay={idx * 0.1}>
                <article className="memorial-page__profile-card">
                  <div className="memorial-page__profile-header">
                    <span className="memorial-page__profile-lifespan">{op.lifespan}</span>
                    <h3 className="memorial-page__profile-name">{op.name}</h3>
                    <span className="memorial-page__profile-role">{op.role}</span>
                  </div>
                  <div className="memorial-page__profile-body">
                    <div className="memorial-page__alias-tag">
                      <span className="alias-label">MK Code Name</span>
                      <strong className="alias-value">"{op.alias}"</strong>
                    </div>
                    <p className="memorial-page__profile-bio">{op.bio}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>



        {/* Gallery */}
        <section className="memorial-page__section">
          <div className="memorial-page__section-header">
            <span className="memorial-page__badge">Archive Photos</span>
            <h2 className="memorial-page__section-title">Memorial Gallery</h2>
            <p className="memorial-page__section-subtitle">
              Visual records of TMF activities, learner excursions, and memorial visits preserving the history of our stalwarts.
            </p>
          </div>

          <div className="memorial-page__gallery-grid">
            {galleryImages.map((img, idx) => (
              <ScrollReveal key={img.src} delay={idx * 0.08}>
                <figure className="memorial-page__gallery-item">
                  <div className="memorial-page__gallery-img-wrap">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="memorial-page__gallery-img"
                    />
                  </div>
                  <figcaption className="memorial-page__gallery-caption">
                    <p>{img.caption}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Lest We Forget Solemn Tribute */}
        <section className="memorial-page__tribute-section">
          <ScrollReveal>
            <div className="memorial-page__tribute-card">
              <h2 className="memorial-page__tribute-title">Lest We Forget</h2>
              <div className="memorial-page__tribute-divider" />
              <div className="memorial-page__tribute-names">
                <div className="memorial-page__tribute-name">Thelle Simon Mogoerane</div>
                <div className="memorial-page__tribute-name">Jerry Semano Mosololi</div>
                <div className="memorial-page__tribute-name">Marcus Thabo Motaung</div>
              </div>
              <p className="memorial-page__tribute-footer">Umkhonto we Sizwe Cadres &bull; Executed 9 June 1983</p>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  )
}
