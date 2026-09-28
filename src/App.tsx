import { About } from './components/About'
import { Contact } from './components/Contact'
import { DemoBanner } from './components/DemoBanner'
import { Differentials } from './components/Differentials'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { JsonLd } from './components/JsonLd'
import { Services } from './components/Services'
import { Studio } from './components/Studio'
import { portfolioImages } from './data/content'

export default function App() {
  return (
    <>
      <JsonLd />
      <DemoBanner />
      <Header />
      <main>
        <Hero />
        <section aria-label="Mais do portfólio ilustrativo" className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {portfolioImages.slice(4).map((img) => (
              <li key={img.id} className="overflow-hidden rounded-2xl bg-brand-taupe/20">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </section>
        <Services />
        <Differentials />
        <About />
        <Studio />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
