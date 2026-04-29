import { site } from '../data/site.js'
import { heroFeatures } from '../data/services.js'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[640px] overflow-hidden bg-dark">
      <img
        src={site.images.hero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/65" />

      <div className="relative z-10 px-6 md:px-12 pt-32 pb-10 md:pb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 min-h-[600px] md:min-h-[640px]">
        
        <div className="text-white max-w-[34rem]">
          <h1 className="font-sans mb-5 text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[70px] leading-none tracking-[-0.025em]">
            {site.hero.title[0]}<br />{site.hero.title[1]}
          </h1>
          <p className="text-[20px] max-w-[42ch] leading-[1.55] opacity-90 mb-7">
            {site.hero.subtitle}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.argenprop.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-surface text-ink text-sm font-medium hover:bg-bg transition-colors"
            >
              Argenprop
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            
            <a
              href="https://www.zonaprop.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-surface text-ink text-sm font-medium hover:bg-bg transition-colors"
            >
              Zonaprop
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <aside className="w-full lg:w-[19rem] xl:w-80 bg-black/75 backdrop-blur-xl border border-white/15 rounded-2xl p-5 md:p-6 text-white flex flex-col gap-3.5 shadow-2xl shrink-0">
          <div className="font-serif text-[20px] tracking-[-0.01em]">
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
                <div className="text-[13.5px] font-medium leading-[1.3]">{f.title}</div>
                <div className="text-[11.5px] opacity-65 mt-0.5 leading-[1.4]">{f.description}</div>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}