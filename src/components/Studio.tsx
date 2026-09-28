import { business, studio } from '../data/content'

export function Studio() {
  return (
    <section id="estudio" aria-labelledby="estudio-title" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2
          id="estudio-title"
          className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl"
        >
          {studio.heading}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-muted">{studio.body}</p>
        <address className="mt-6 not-italic">
          <p className="font-medium text-brand-ink">{business.addressLine}</p>
          <p className="text-brand-muted">
            {business.neighborhood}, {business.city} — SP
          </p>
        </address>
        <p className="mt-4 text-sm text-brand-muted">
          Mapa (consulta pública):{' '}
          <a
            className="text-brand-brown underline-offset-2 hover:underline"
            href={`https://www.google.com/maps/search/?api=1&query=${studio.mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            abrir no Google Maps
          </a>
          . Há registro legado em diretório terceiro com endereço em Água Fria — a
          validação operacional fica fora deste mock.
        </p>
      </div>
    </section>
  )
}
