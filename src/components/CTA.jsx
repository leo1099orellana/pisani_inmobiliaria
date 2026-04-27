import { site } from '../data/site.js'

export default function CTA() {
  return (
    <section className="px-3 md:px-5 py-10">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden py-16 md:py-20 px-6 md:px-10 text-center min-h-[320px] flex flex-col justify-center bg-dark">
        <img
          src={site.images.cta}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,18,16,0.5)] to-[rgba(20,18,16,0.75)]" />

        <div className="relative text-white">
          <div className="text-[13px] opacity-75 mb-3.5 tracking-[0.02em]">
            {site.cta.eyebrow}
          </div>
          <h2 className="font-serif font-normal text-4xl md:text-5xl lg:text-6xl xl:text-[80px] tracking-[-0.025em] mb-7 leading-none">
            {site.cta.titleStart}{' '}
            <em className="text-accent">{site.cta.titleEnd}</em>
          </h2>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-surface text-ink text-sm font-medium hover:bg-bg transition-colors"
          >
            {site.cta.ctaLabel} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
