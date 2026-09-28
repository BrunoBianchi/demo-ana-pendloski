import { business, demoNotice } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-brand-taupe/40 bg-brand-gray text-brand-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm sm:px-6">
        <p className="font-display text-lg">{business.name}</p>
        <p className="opacity-90">{demoNotice}</p>
        <p className="opacity-80">
          Tipografia deste mock: Cormorant Garamond + Source Sans 3 (Google Fonts) —
          escolha proposta; tipografia exata do site oficial não foi auditada.
        </p>
        <p>
          <a
            className="underline underline-offset-2 hover:text-white"
            href={business.officialSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir ao site oficial
          </a>
        </p>
      </div>
    </footer>
  )
}
