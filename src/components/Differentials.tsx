import { differentials } from '../data/content'

export function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2
          id="diferenciais-title"
          className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl"
        >
          Diferenciais
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-brand-muted">
          Textos baseados em informações públicas do site e da bio. Números de sessões
          e selos de certificação não verificados foram omitidos de propósito.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {differentials.map((d) => (
            <li
              key={d.title}
              className="rounded-2xl bg-brand-taupe/20 px-6 py-5"
            >
              <h3 className="font-display text-xl font-semibold text-brand-brown">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{d.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
