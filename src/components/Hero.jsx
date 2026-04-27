import { site } from '../data/site.js'
import { heroFeatures } from '../data/services.js'

export default function Hero() {
  return (
    <section className="px-3 md:px-5">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-dark min-h-[560px] md:min-h-[620px] flex">
        <img
          src={site.images.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/55" />

        <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-end gap-5 p-6 md:p-10 lg:p-12">
          {/* Texto principal */}
          <div className="text-white flex-1 max-w-2xl mt-auto">
            <h1 className="font-serif font-normal mb-5 text-[44px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] leading-none tracking-[-0.025em]">
              {site.hero.title[0]}<br />{site.hero.title[1]}
            </h1>
            <p className="text-[15px] max-w-[46ch] leading-[1.55] opacity-90 mb-7">
              {site.hero.subtitle}
            </p>
            <a
              href={site.hero.ctaHref}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-surface text-ink text-sm font-medium hover:bg-bg transition-colors"
            >
              {site.hero.ctaLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Tarjeta de features */}
          <aside className="w-full lg:w-80 bg-black/75 backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-white flex flex-col gap-4 shadow-2xl">
            <div className="font-serif text-[22px] tracking-[-0.01em]">
              Por qué elegirnos
            </div>
            <div className="h-px bg-white/15" />
            {heroFeatures.map((f) => (
              <div key={f.title} className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-accent grid place-items-center shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm font-medium">{f.title}</div>
                  <div className="text-xs opacity-65 mt-0.5">{f.description}</div>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
