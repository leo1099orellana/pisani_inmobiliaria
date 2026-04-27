import properties from '../data/properties.json'

export default function Properties() {
  return (
    <section id="propiedades" className="px-6 md:px-12 py-20 md:py-24 pb-10">
      <div className="text-[13px] text-soft mb-4 tracking-[0.02em]">
        Propiedades
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {properties.map((p) => (
          <PropertyCard key={p.id} {...p} />
        ))}
      </div>

      <div className="text-center mt-9">
        <a
          href="#propiedades"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface text-ink text-[13px] font-medium border border-line hover:bg-line/40 transition-colors"
        >
          Ver todas las propiedades <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  )
}

function PropertyCard({ image, title, subtitle, price, url }) {
  return (
    <a
      href={url}
      className="group relative block rounded-2xl overflow-hidden aspect-[4/5] bg-line"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      <div className="absolute left-5 right-5 bottom-5 text-white">
        <div className="font-serif text-2xl tracking-[-0.01em] mb-1">{title}</div>
        <div className="text-xs opacity-80 mb-3">{subtitle}</div>
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">{price}</div>
          <span className="w-9 h-9 rounded-full bg-accent grid place-items-center group-hover:rotate-45 transition-transform">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}
