import { services } from '../data/content'

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="scroll-mt-24 border-t border-brand-taupe/30 bg-white/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2
          id="servicos-title"
          className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl"
        >
          Serviços
        </h2>
        <p className="mt-2 max-w-2xl text-brand-muted">
          Prioridade materno-infantil e família — alinhada ao site oficial. Mentoria,
          corporativo e aluguel de estúdio existem na oferta completa, mas ficam fora
          do foco desta demo B2C.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.id}
              className="rounded-2xl border border-brand-taupe/40 bg-brand-cream p-6 shadow-sm"
            >
              <h3 className="font-display text-xl font-semibold text-brand-gray">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
