import { business, nav } from '../data/content'

export function Header() {
  return (
    <header className="border-b border-brand-taupe/40 bg-brand-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#topo" className="group">
          <span className="font-display text-2xl font-semibold tracking-wide text-brand-gray group-hover:text-brand-brown">
            Ana Pendloski
          </span>
          <span className="mt-0.5 block text-xs uppercase tracking-[0.2em] text-brand-muted">
            Fotografia · {business.neighborhood}
          </span>
        </a>
        <nav aria-label="Seções da demonstração" className="hidden md:block">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-brand-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-brand-brown focus-visible:text-brand-brown"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={business.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-brand-gray px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-brown"
        >
          WhatsApp (demo)
        </a>
      </div>
    </header>
  )
}
