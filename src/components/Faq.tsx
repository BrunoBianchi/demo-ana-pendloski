import { faq } from '../data/content'

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-24 border-t border-brand-taupe/30 bg-white/50"
    >
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2
          id="faq-title"
          className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl"
        >
          Perguntas frequentes
        </h2>
        <p className="mt-2 text-sm text-brand-muted">
          Respostas alinhadas ao conteúdo público do site oficial — sem inventar
          políticas ou prazos extras.
        </p>
        <div className="mt-8 space-y-3">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-brand-taupe/40 bg-brand-cream px-4 py-3 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none font-medium text-brand-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  {item.q}
                  <span
                    aria-hidden
                    className="text-brand-brown transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
