import { business } from '../data/content'

/** JSON-LD apenas com NAP confirmado nos blocos 1–4 */
export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    image: business.officialSite,
    url: business.officialSite,
    telephone: business.phoneE164,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Vieira de Morais, 1713, 3º andar, Conjunto 32',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    areaServed: 'São Paulo',
    sameAs: [business.instagramUrl],
    description:
      'Demonstração de redesign (noindex). Fotógrafa de família, gestante e newborn em Campo Belo, São Paulo.',
  }

  return (
    <script
      type="application/ld+json"
      // Conteúdo estático controlado — sem input do usuário
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
