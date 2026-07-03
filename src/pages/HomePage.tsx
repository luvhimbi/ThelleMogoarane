import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import ScrollReveal from '../components/animations/ScrollReveal'
import {
  IconCivic,
  IconEducation,
  IconEntrepreneurship,
  IconGlobe,
  IconHospital,
  IconMail,
  IconMapPin,
  IconMuseum,
  IconPhone,
  IconSoccer,
} from '../components/Icons/Icons'
import '../App.css'

const values = [
  {
    title: 'Ubuntu',
    description:
      'We uphold the African philosophy of Ubuntu: "I am because we are." We recognize our interdependence and mutual responsibility as human beings.',
  },
  {
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, seeking quality, innovation, and impact in our programmes and initiatives.',
  },
  {
    title: 'Diversity',
    description:
      'We celebrate the diversity of South Africa and its people, embracing different perspectives, cultures, languages, and backgrounds.',
  },
]

const objectives = {
  shortTerm: [
    'Expose the young generation to the struggle history of their forebears so they understand that freedom was never free.',
    'Create a platform for socio-cultural interaction that promotes and contributes to social cohesion in South Africa.',
    'Create opportunities through which ordinary youngsters can reveal their holistic talents and innovative skills.',
  ],
  longTerm: [
    'Establish a harmonious and reconciliatory spirit within South African society through dialogue, networking, and joint programmes.',
  ],
}

const programs = [
  {
    title: 'Education & Bursaries',
    description:
      'Promotion of education through scholarships and bursaries, empowering young South Africans to pursue their academic aspirations.',
    icon: IconEducation,
  },
  {
    title: 'Entrepreneurship',
    description:
      'Enterprise development initiatives that nurture innovative skills and create opportunities for young people to build sustainable livelihoods.',
    icon: IconEntrepreneurship,
  },
  {
    title: 'Civic Education',
    description:
      'Programmes that foster active citizenship, social cohesion, and a deeper understanding of our democratic society.',
    icon: IconCivic,
  },
]

const events = [
  {
    title: 'School Excursions to the Gallows Museum',
    description:
      'Guided annual visits that connect learners with South Africa\'s liberation history through engagement at the Gallows Museum.',
    icon: IconMuseum,
    tag: 'Annual Programme',
  },
  {
    title: 'Annual Soccer Tournament',
    description:
      'A flagship community event that brings together youth for sport, social cohesion, and celebration of talent and teamwork.',
    icon: IconSoccer,
    tag: 'Community Event',
  },
]

const morokaThree = [
  {
    name: 'Thelle Simon "Terror" Mogoerane',
    age: 23,
    role: 'MK Operative',
    codeName: 'Seiso Moletsane',
    image: '/Moroka_three_image3.webp',
    alt: 'Black and white portrait of Thelle Simon "Terror" Mogoerane (thellemogoerane), MK operative and member of the Moroka Three / Moroka 3',
  },
  {
    name: 'Jerry Semano Mosololi',
    age: 25,
    role: 'MK Operative',
    codeName: 'Dragon Mosepedi',
    image: '/Moroka_three_image1.webp',
    alt: 'Black and white portrait of Jerry Semano Mosololi (Dragon Mosepedi), MK operative and member of the Moroka Three / Moroka 3',
  },
  {
    name: 'Marcus Thabo Motaung',
    age: 27,
    role: 'MK Operative',
    codeName: 'Abey Lesolang',
    image: '/Moroka_three_Image2.webp',
    alt: 'Black and white portrait of Marcus Thabo Motaung (Abey Lesolang), MK operative and member of the Moroka Three / Moroka 3',
  },
]


const boardDirectors = [
  { role: 'Chairperson', name: 'Toffee Mogoerane', image: '/Toffee.webp' },
  { role: 'Secretary ', name: 'Thusi Motsopi', image: '/Thusi.webp' },
  { role: 'Treasurer', name: 'Adv Ayanda Ceba', image: '/Ayanda.webp' },
  { role: 'Admin Secretary', name: 'Asanda Luwaca', image: '/Asanda.webp' },
  { role: 'Marketing Director', name: 'Bernadette Duduzile Matola', image: '/Bennedette.webp' },
  { role: 'Non-Designated Director', name: 'Prof Vincent Mazibuko', image: '/Prof.webp' },
  { role: 'Non-Designated Director', name: 'Tshepo Mogoerane', image: '/Tshepo.webp' },

]

const legacyTimeline = [
  { year: '1976', label: 'Political awakening after the 16 June uprising' },
  { year: '1979', label: 'G5 operations including Moroka Police Station' },
  { year: '1981', label: 'Arrested near Apies River, Hamanskraal' },
  { year: '1982', label: 'Sentenced to death as one of the Moroka Three' },
  { year: '1983', label: 'Executed on 9 June. Spirit lives on through TMF' },
]


const contactDetails = [
  {
    title: 'Address',
    icon: IconMapPin,
    content: (
      <>
        25 Fairy Glen Avenue
        <br />
        Klippoortjie, Boksburg 1459
        <br />
        Ekurhuleni, South Africa
      </>
    ),
  },
  {
    title: 'Email',
    icon: IconMail,
    content: (
      <div className="contact-card__lines">
        <div className="contact-card__line">
          <span className="contact-card__line-label">General</span>
          <a href="mailto:info@thellemogoeranefoundation.org.za">
            info@thellemogoeranefoundation.org.za
          </a>
        </div>
        <div className="contact-card__line">
          <span className="contact-card__line-label">Marketing &amp; Enquiries</span>
          <a href="mailto:bmatola37@gmail.com">
            bmatola37@gmail.com
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'Phone',
    icon: IconPhone,
    content: (
      <div className="contact-card__lines">
        <div className="contact-card__line">
          <span className="contact-card__line-label">Office</span>
          <a href="tel:+27617875679">061 787 5679</a>
        </div>
        <div className="contact-card__line">
          <span className="contact-card__line-label">Mobile</span>
          <a href="tel:+27665148394">066 514 8394</a>
        </div>
      </div>
    ),
  },
  {
    title: 'Website',
    icon: IconGlobe,
    content: (
      <a
        href="https://www.thellemogoeranefoundation.org.za"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.thellemogoeranefoundation.org.za
      </a>
    ),
  },
]
/*
Treasure 
*/
export default function HomePage() {
  return (
      <main id="main-content">
        <section id="home" className="hero">
          <div className="container hero__inner">
            <div className="hero__content">
              <h1 className="hero__title">
                Thelle Mogoerane{' '}
                <span className="hero__highlight">Foundation</span>
              </h1>
              <p className="hero__motto">
                &ldquo;Forever inspired by his revolutionary spirit&rdquo;
              </p>
              <p className="hero__description">
                The Thelle Mogoerane Foundation is a Non-Profit Company (NPC) focused on community
                upliftment, capacity building, and preserving the legacy of anti-apartheid stalwart
                Simon Thelle Mogoerane. We frequently partner with regional hospitals and NGOs on
                health-driven initiatives, such as childhood wellbeing and capacity-building programs.
              </p>
              <div className="hero__actions">
                <a href="#about" className="btn btn-primary btn-lg">
                  Our Story
                </a>
                <Link to="/donate" className="btn btn-outline btn-lg">
                  Donate &amp; Support
                </Link>
              </div>
            </div>

            <figure className="hero__portrait">
              <img
                src="/thelle2.webp"
                alt="Black and white portrait of Thelle Simon Terror Mogoerane, Chairperson of the revolutionary legacy honoured by the Thelle Mogoerane Foundation"
                className="hero__portrait-img"
                fetchPriority="high"
                width="555"
                height="739"
              />
              <figcaption className="hero__portrait-caption">
                Thelle Simon &ldquo;Terror&rdquo; Mogoerane
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="about" className="section section--alt">
          <div className="container">
            <SectionHeader
              eyebrow="Who We Are"
              title="About the Foundation"
              subtitle="A vehicle to carry Thelle's aspirations and legacy across South Africa and beyond."
            />
            <div className="about__grid">
              <ScrollReveal delay={0.1}>
                <article className="content-card">
                  <h3 className="content-card__title">Our Background</h3>
                  <p>
                    Thelle Mogoerane Foundation is an NPC formed to keep alive the revolutionary
                    spirit of the breed of cadres who sacrificed their lives for the freedom of
                    South Africans, regardless of their race, gender, creed or beliefs.
                  </p>
                  <p>
                    Over the decades since Thelle Simon &ldquo;Terror&rdquo; Mogoerane (nom de guerre
                    Seiso Moletsane) was executed on 09 June 1983, the family incubated the idea
                    to establish a Foundation to honour his relentless struggle for justice.
                  </p>
                  <p>
                    TMF is based at Ekurhuleni and works with governments, civil society, academia,
                    media and businesses to develop legacy programmes rooted in collaboration.
                  </p>
                </article>
              </ScrollReveal>

              <div className="about__side">
                <ScrollReveal delay={0.2}>
                  <article className="vision-mission-card">
                    <h3 className="vision-mission-card__label">Our Vision</h3>
                    <p>
                      TMF embodies the ideals of a free society through its sustained reflection on
                      the role played by gallant fighters for a liberated South Africa.
                    </p>
                  </article>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <article className="vision-mission-card vision-mission-card--mission">
                    <h3 className="vision-mission-card__label">Our Mission</h3>
                    <p>
                      To develop and implement multifaceted legacy programmes that will reflect the
                      values for which Thelle Mogoerane&rsquo;s calibre of soldiers sacrificed their lives.
                    </p>
                  </article>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section id="legacy" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Our Legacy"
              title="The Moroka Three"
              subtitle="MK operatives sentenced to death in 1982. Their courage and sacrifice inspire the work of this foundation."
            />

            <div className="moroka-three__grid">
              {morokaThree.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.15}>
                  <figure className="moroka-card">
                    <div className="moroka-card__image-wrap">
                      <img
                        src={member.image}
                        alt={member.alt}
                        className="moroka-card__image"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="moroka-card__caption">
                      <h3 className="moroka-card__name">{member.name}</h3>
                      <div className="moroka-card__details">
                        <span className="moroka-card__role">{member.role}</span>
                        <span className="moroka-card__dot" aria-hidden="true">&bull;</span>
                        <span className="moroka-card__age">Age: {member.age}</span>
                      </div>
                      <div className="moroka-card__codename-badge">
                        <span className="moroka-card__codename-label">MK Code Name</span>
                        <strong className="moroka-card__codename-value">"{member.codeName}"</strong>
                      </div>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>

            <div className="moroka-three__cta">
              <ScrollReveal delay={0.25}>
                <Link to="/memorial" className="btn btn-secondary">
                  Read Full Biography &amp; Archives &rarr;
                </Link>
              </ScrollReveal>
            </div>

            <div className="legacy__biography">
            <SectionHeader
              eyebrow="Biography"
              title='Thelle Simon "Terror" Mogoerane'
              subtitle="Member of the legendary G5 unit. A gallant fighter whose spirit lives on through TMF."
            />
            <div className="legacy__layout">
              <ScrollReveal>
                <aside className="legacy__timeline" aria-label="Key dates in Thelle Mogoerane's life">
                  {legacyTimeline.map((item) => (
                    <div key={item.year} className="timeline-item">
                      <span className="timeline-item__year">{item.year}</span>
                      <p className="timeline-item__label">{item.label}</p>
                    </div>
                  ))}
                </aside>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <article className="content-card legacy__story">
                  <figure className="legacy__portrait">
                    <img 
                      src="/Thelle.webp" 
                      alt="Thelle Simon Terror Mogoerane" 
                      className="legacy__portrait-img" 
                      loading="lazy"
                    />
                  </figure>
                  <p>
                    African residents of the old Stirtonville were forcefully removed by the apartheid regime
                    and relocated to Vosloorus in 1963/4. The Mogoerane family were also victims of the forced
                    removals. Thelle was the second born child of the late Daniel and Mapela Mogoerane. His elder
                    brother, Thekiso, was also an MK operative. He was arrested and sentenced to 15 years on Robben
                    Island. He spent only 5 years before he was released together with other political prisoners.
                  </p>
                  <p>
                    After completing his Junior Certificate at Illinge Secondary School in Vosloorus,
                    Thelle went to Mampoi High School in Qwa Qwa, Free State. Vosloorus did not have
                    a high school as part of apartheid&rsquo;s Bantu Education system during those years.
                  </p>
                  <p>
                    The 16 June 1976 became a turning point for his political conscience. At the age
                    of 17, together with some of his peers, they skipped the country after burning
                    the Admin block of their school. They went to Botswana, where they were arrested
                    by the Botswana police as illegals.
                  </p>
                  <p>
                    Upon their release, ANC representatives offered him an opportunity to further his
                    studies, but he opted for military training to liberate South Africa first. He
                    was sent to Angola for military training and later to East Germany for specialised
                    training.
                  </p>
                  <p>
                    After training, OR Tambo wanted a unit that would deal specifically with police
                    stations, the Group of 5 (G5), under the command of Sphiwe Nyanda. Thelle was a
                    member of the G5, with operations including Moroka, Orlando, Booysens, and
                    Wonderboom police stations.
                  </p>
                  <p>
                    On 28 December 1981, he and fellow MK operative Semano Mosolodi were arrested at
                    their base near Apies River in Stinkwater, Hamanskraal. Later, Thabo Motaung was
                    also arrested. During their High Treason trial, they were famously known as the
                    Moroka Three.
                  </p>
                  <p>
                    Sentenced to death on 6 August 1982, and despite worldwide pleas for clemency
                    including from the UN Special Council, their lives were not spared. On 9 June 1983,
                    their lives were taken through the apartheid hangman&rsquo;s noose. As a family and
                    foundation, his spirit shall be with us as long as we breathe.
                  </p>
                </article>
              </ScrollReveal>
            </div>
            </div>

            <div className="legacy__hospital">
              <ScrollReveal>
                <div className="hospital-banner">
                  <div className="hospital-banner__icon" aria-hidden="true">
                    <IconHospital />
                  </div>
                  <div className="hospital-banner__content">
                    <span className="hospital-banner__eyebrow">A Living Legacy</span>
                    <h3 className="hospital-banner__title">
                      Thelle Mogoerane Regional Hospital
                    </h3>
                    <p className="hospital-banner__text">
                      In recognition of his ultimate sacrifice, the South African government renamed
                      the Natalspruit Hospital in Vosloorus, the very community where Thelle
                      grew up, to the <strong>Thelle Mogoerane Regional Hospital</strong>.
                      Today it stands as one of the largest public hospitals in the Ekurhuleni
                      Metropolitan Municipality, serving hundreds of thousands of residents across
                      Gauteng&rsquo;s East Rand.
                    </p>
                    <p className="hospital-banner__text">
                      The Foundation is proud to share a name with this vital institution. Both
                      carry forward Thelle&rsquo;s commitment to the people of South Africa:
                      the hospital through healthcare and healing, the Foundation through education,
                      empowerment, and remembrance. Together, they ensure that his legacy continues
                      to uplift the communities he fought to liberate.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="objectives" className="section section--alt">
          <div className="container">
            <SectionHeader
              eyebrow="Strategic Direction"
              title="Our Objectives"
              subtitle="Goals guiding our short, medium, and long-term programmes."
            />
            <div className="objectives__grid">
              <ScrollReveal delay={0.1}>
                <article className="objectives-card">
                  <h3 className="objectives-card__title">Short &amp; Medium Term</h3>
                  <ul className="objectives-card__list">
                    {objectives.shortTerm.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <article className="objectives-card objectives-card--long">
                  <h3 className="objectives-card__title">Long Term</h3>
                  <ul className="objectives-card__list">
                    {objectives.longTerm.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="values" className="section section--impact">
          <div className="container">
            <SectionHeader
              eyebrow="What Guides Us"
              title="Our Values"
              subtitle="Core principles that guide everything we do as a foundation."
              light
              centered
            />
            <div className="values__grid">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <article className="value-card">
                    <h3 className="value-card__title">{value.title}</h3>
                    <p className="value-card__text">{value.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="section section--alt">
          <div className="container">
            <SectionHeader
              eyebrow="Our Approach"
              title="Our Philosophy"
              subtitle="The intersection of thinking and action, mutually reinforcing paths to our vision."
            />
            <ScrollReveal>
              <article className="philosophy-card">
                <p>
                  Our strategic approach is based on the intersection of thinking and action. We seek
                  to generate and disseminate knowledge that can inform and inspire young people and
                  citizens to address the challenges and opportunities facing the country.
                </p>
                <p>
                  We also seek to facilitate dialogue and engagement among various stakeholders,
                  including governments, civil society, academia, media and business, to foster
                  collaboration and consensus on the strategic priorities and actions for the Foundation.
                </p>
                <p>
                  We believe that thinking and action are mutually reinforcing, and both are essential
                  for achieving our vision and mission.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </section>

        <section id="programs" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Our Initiatives"
              title="Programmes &amp; Events"
              subtitle="Empowering communities through strategic programmes and flagship events that carry forward our legacy."
              centered
            />

            <div className="combined-section__group">
              <h3 className="combined-section__subheading">Our Work (Programmes)</h3>
              <div className="programs__grid">
                {programs.map((program, index) => {
                  const Icon = program.icon
                  return (
                    <ScrollReveal key={program.title} delay={index * 0.15}>
                      <article className="program-card">
                        <div className="program-card__header">
                          <span className="program-card__number">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="program-card__icon" aria-hidden="true">
                            <Icon />
                          </span>
                        </div>
                        <div className="program-card__body">
                          <h3 className="program-card__title">{program.title}</h3>
                          <p className="program-card__text">{program.description}</p>
                        </div>
                      </article>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>

            <div id="events" className="combined-section__group">
              <h3 className="combined-section__subheading">Our Main Events</h3>
              <div className="events__grid">
                {events.map((event, index) => {
                  const Icon = event.icon
                  return (
                    <ScrollReveal key={event.title} delay={index * 0.1}>
                      <article className="event-card">
                        <div className="event-card__icon" aria-hidden="true">
                          <Icon />
                        </div>
                        <div className="event-card__body">
                          <span className="event-card__tag">{event.tag}</span>
                          <h3 className="event-card__title">{event.title}</h3>
                          <p className="event-card__text">{event.description}</p>
                        </div>
                      </article>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="section section--alt">
          <div className="container">
            <SectionHeader
              eyebrow="Governance"
              title="Board of Directors"
              subtitle="Eminent South Africans providing strategic direction and oversight for the Foundation."
              centered
            />
            <div className="org-chart">
              {/* Tier 1 — Chairperson */}
              <div className="org-chart__tier org-chart__tier--top">
                <ScrollReveal>
                  <figure className="org-card org-card--chair">
                    <div className="org-card__image-wrap">
                      <img
                        src={boardDirectors[0].image}
                        alt={boardDirectors[0].name}
                        className="org-card__image"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="org-card__caption">
                      <span className="org-card__role">{boardDirectors[0].role}</span>
                      <h3 className="org-card__name">{boardDirectors[0].name}</h3>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              </div>

              {/* Connector Tier 1 → Tier 2 */}
              <div className="org-chart__connector" aria-hidden="true">
                <div className="org-chart__line-v" />
              </div>

              {/* Tier 2 — Secretary General */}
              <div className="org-chart__tier org-chart__tier--mid">
                <ScrollReveal>
                  <figure className="org-card org-card--exec">
                    <div className="org-card__image-wrap">
                      <img
                        src={boardDirectors[1].image}
                        alt={boardDirectors[1].name}
                        className="org-card__image"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="org-card__caption">
                      <span className="org-card__role">{boardDirectors[1].role}</span>
                      <h3 className="org-card__name">{boardDirectors[1].name}</h3>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              </div>

              {/* Connector Tier 2 → Bottom Box */}
              <div className="org-chart__connector" aria-hidden="true">
                <div className="org-chart__line-v" />
              </div>

              {/* Tier 3 — Officers & Directors in bordered container */}
              <ScrollReveal>
                <div className="org-chart__bottom-box">
                  <div className="org-chart__tier org-chart__tier--bottom">
                    {boardDirectors.slice(2).map((member) => (
                      <figure key={member.name} className="org-card org-card--bottom">
                        <div className="org-card__image-wrap">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="org-card__image"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="org-card__caption">
                          <span className="org-card__role">{member.role}</span>
                          <h3 className="org-card__name">{member.name}</h3>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--alt">
          <div className="container contact">
            <SectionHeader
              eyebrow="Reach Out"
              title="Contact Us"
              subtitle="Collaborate, partner, or learn more about our programmes."
            />

            <div className="contact__details">
              {contactDetails.map((item, index) => {
                const Icon = item.icon
                return (
                  <ScrollReveal key={item.title} delay={index * 0.1}>
                    <div className="contact-card">
                      <span className="contact-card__icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <div className="contact-card__body">
                        <h3 className="contact-card__title">{item.title}</h3>
                        <p className="contact-card__text">{item.content}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>



            <ScrollReveal>
              <div className="contact__map">
                <h3 className="contact__map-title">Find Us</h3>
                <iframe
                  title="Thelle Mogoerane Foundation location"
                  src="https://maps.google.com/maps?q=25+Fairy+Glen+Avenue,+Klippoortjie,+Boksburg+1459,+South+Africa&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
  )
}
