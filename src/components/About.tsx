import { about, business, portfolioImages } from '../data/content'

export function About() {
  const img = portfolioImages[5]
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="scroll-mt-24 border-t border-brand-taupe/30 bg-white/50"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <h2
            id="sobre-title"
            className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl"
          >
            {about.heading}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-brand-muted">
              {p}
            </p>
          ))}
          <p className="mt-6">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-brown underline-offset-4 hover:underline"
            >
              Instagram {business.instagramHandle}
            </a>
          </p>
        </div>
        <figure className="overflow-hidden rounded-2xl bg-brand-taupe/30">
          <img
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="px-4 py-2 text-xs text-brand-muted">
            Imagem ilustrativa — não pertence ao portfólio da lead.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
