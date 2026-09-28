import { useState } from 'react'
import type { FormEvent } from 'react'
import { business } from '../data/content'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'demo-ok'>('idle')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('demo-ok')
  }

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2
              id="contato-title"
              className="font-display text-3xl font-semibold text-brand-ink sm:text-4xl"
            >
              Contato
            </h2>
            <p className="mt-3 text-brand-muted">
              Canal principal observado: WhatsApp. E-mail e Instagram também
              publicados no site oficial.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <span className="text-brand-muted">WhatsApp: </span>
                <a
                  className="font-medium text-brand-brown hover:underline"
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {business.phoneDisplay} (abre conversa — demo não envia msg)
                </a>
              </li>
              <li>
                <span className="text-brand-muted">E-mail: </span>
                <a
                  className="font-medium text-brand-brown hover:underline"
                  href={`mailto:${business.email}`}
                >
                  {business.email}
                </a>
              </li>
              <li>
                <span className="text-brand-muted">Instagram: </span>
                <a
                  className="font-medium text-brand-brown hover:underline"
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {business.instagramHandle}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-brand-muted">Estúdio: </span>
                <span>{business.addressFull}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-taupe/40 bg-white/70 p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-brand-gray">
              Formulário (modo demonstração)
            </h3>
            <p className="mt-1 text-xs text-brand-muted">
              Nenhum dado é enviado a servidores. Sem pixels de produção neste mock.
            </p>
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-brand-ink">
                  Nome completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1 w-full rounded-lg border border-brand-taupe/60 bg-brand-cream px-3 py-2 text-brand-ink"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-ink">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full rounded-lg border border-brand-taupe/60 bg-brand-cream px-3 py-2 text-brand-ink"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-brand-ink">
                  WhatsApp para retorno
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(11) 90000-0000"
                  className="mt-1 w-full rounded-lg border border-brand-taupe/60 bg-brand-cream px-3 py-2 text-brand-ink"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-brand-ink">
                  Sobre o ensaio
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-brand-taupe/60 bg-brand-cream px-3 py-2 text-brand-ink"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-gray px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-brown"
              >
                Simular envio (demo)
              </button>
              {status === 'demo-ok' && (
                <p role="status" className="text-sm text-brand-brown">
                  Demonstração: formulário recebido apenas neste navegador. Para um
                  orçamento real, use o WhatsApp ou o site oficial.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
