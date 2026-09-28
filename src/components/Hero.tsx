import { business, hero, portfolioImages } from '../data/content'

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-brown">
            {business.city} · {business.neighborhood}
          </p>
          <h1
            id="hero-title"
            className="mt-3 font-display text-4xl font-semibold leading-tight text-brand-ink sm:text-5xl"
          >
            {hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-muted">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-brown px-6 py-3 text-base font-medium text-brand-cream shadow-sm transition hover:bg-brand-gray"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-brand-taupe px-6 py-3 text-base font-medium text-brand-ink transition hover:border-brand-brown hover:text-brand-brown"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-brand-muted/90">
            O link do WhatsApp pode abrir o aplicativo de conversa com o número
            confirmado da fotógrafa. Esta demonstração <strong>não envia</strong>{' '}
            mensagens automaticamente.
          </p>
        </div>
        <div id="portfolio" className="scroll-mt-24">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {portfolioImages.slice(0, 4).map((img, i) => (
              <li
                key={img.id}
                className={`overflow-hidden rounded-2xl bg-brand-taupe/30 ${i % 2 === 1 ? 'mt-6' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-brand-muted">{hero.portfolioNote}</p>
        </div>
      </div>
    </section>
  )
}
