import { demoNotice } from '../data/content'

export function DemoBanner() {
  return (
    <div
      role="status"
      className="sticky top-0 z-50 border-b border-brand-brown/30 bg-brand-brown px-4 py-2 text-center text-sm font-medium text-brand-cream"
    >
      {demoNotice}{' '}
      <span className="font-normal opacity-90">
        Mock para pitch — robots noindex. Site oficial:{' '}
        <a
          className="underline underline-offset-2 hover:text-white focus-visible:outline-brand-cream"
          href="https://anapendloski.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          anapendloski.com
        </a>
      </span>
    </div>
  )
}
