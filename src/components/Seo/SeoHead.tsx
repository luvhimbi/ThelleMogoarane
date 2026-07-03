import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_JSON_LD,
  PAGE_SEO,
  SITE_NAME,
  SITE_URL,
} from '../../config/seo'

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let element = document.querySelector(`meta[${attr}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = url
}

function setJsonLd(id: string, data: object | null) {
  const existing = document.getElementById(id)
  if (existing) existing.remove()
  if (!data) return

  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export default function SeoHead() {
  const { pathname } = useLocation()
  const seo = PAGE_SEO[pathname] ?? PAGE_SEO['/']
  const canonical = `${SITE_URL}${seo.path}`
  const fullTitle = seo.title

  useEffect(() => {
    document.title = fullTitle

    setMeta('description', seo.description)
    setMeta('robots', seo.noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('author', SITE_NAME)

    setMeta('og:title', fullTitle, true)
    setMeta('og:description', seo.description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:url', canonical, true)
    setMeta('og:image', DEFAULT_OG_IMAGE, true)
    setMeta('og:site_name', SITE_NAME, true)
    setMeta('og:locale', 'en_ZA', true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', seo.description)
    setMeta('twitter:image', DEFAULT_OG_IMAGE)

    setCanonical(canonical)
    setJsonLd('tmf-organization-jsonld', pathname === '/' ? ORGANIZATION_JSON_LD : null)
  }, [pathname, fullTitle, seo.description, seo.noindex, canonical])

  return null
}
