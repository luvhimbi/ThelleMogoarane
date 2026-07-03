import { FOUNDATION } from '../constants/foundation'

export const SITE_URL = FOUNDATION.website
export const SITE_NAME = FOUNDATION.name
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Capture.webp`

export const DEFAULT_DESCRIPTION =
  'Thelle Mogoerane Foundation (TMF) honours the legacy of anti-apartheid hero Thelle Simon "Terror" Mogoerane (associated with the Thelle Mogoerane Regional Hospital in Vosloorus, formerly Natalspruit Hospital) and the Moroka Three / Moroka 3 through education, civic programmes, and community initiatives.'

export type SeoConfig = {
  title: string
  description: string
  path: string
  noindex?: boolean
}

export const PAGE_SEO: Record<string, SeoConfig> = {
  '/': {
    title: `${SITE_NAME} | Forever inspired by his revolutionary spirit`,
    description: DEFAULT_DESCRIPTION,
    path: '/',
  },
  '/donate': {
    title: `Donate & Support | ${SITE_NAME}`,
    description: `Support the ${SITE_NAME} (TMF). Your donations help us continue our education, entrepreneurship, and community programmes. Find our Standard Bank banking details.`,
    path: '/donate',
  },
  '/memorial': {
    title: `Memorial & Historical Archives | ${SITE_NAME}`,
    description: `Preserving the historical legacy of anti-apartheid stalwarts. Learn about the Moroka Three (Thelle Simon Terror Mogoerane, Jerry Semano Mosololi, and Marcus Thabo Motaung) and view our annual remembrance excursions.`,
    path: '/memorial',
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
    path: '/privacy-policy',
  },
  '/terms-of-use': {
    title: `Terms of Use | ${SITE_NAME}`,
    description: `Terms and conditions for using the ${SITE_NAME} website.`,
    path: '/terms-of-use',
  },
  '/popi-act': {
    title: `POPI Act Compliance | ${SITE_NAME}`,
    description: `How ${SITE_NAME} complies with the Protection of Personal Information Act (POPIA), South Africa.`,
    path: '/popi-act',
  },
  '/dmca': {
    title: `DMCA Policy | ${SITE_NAME}`,
    description: `Copyright and DMCA policy for ${SITE_NAME}.`,
    path: '/dmca',
  },
}

export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: FOUNDATION.name,
  alternateName: [FOUNDATION.shortName, 'Thelle Mogoerane Foundation', 'thellemogoerane'],
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description: DEFAULT_DESCRIPTION,
  email: FOUNDATION.email,
  telephone: FOUNDATION.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '25 Fairy Glen Avenue, Klippoortjie',
    addressLocality: 'Boksburg',
    postalCode: '1459',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  foundingDate: '2024',
  identifier: {
    '@type': 'PropertyValue',
    name: 'NPC Registration',
    value: FOUNDATION.npc,
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  knowsAbout: [
    'Thelle Simon Terror Mogoerane',
    'thellemogoerane',
    'Moroka Three',
    'Moroka 3',
    'Jerry Semano Mosololi',
    'Marcus Thabo Motaung',
    'uMkhonto we Sizwe',
    'Thelle Mogoerane Regional Hospital',
    'Natalspruit Hospital',
    'Vosloorus'
  ],
  sameAs: [SITE_URL],
}
