import { useState } from 'react'
import { site } from '../data/site.js'
import { services } from '../data/services.js'

export default function Services() {
  const [open, setOpen] = useState(1)

  return (
    <section id="servicios" className="px-6 md:px-12 py-16 md:py-20">
      <div className="text-[13px] text-soft mb-6 tracking-[0.02em]">
        {site.services.eyebrow}
      </div>

      <h2 className="font-serif font-normal text-[32px] md:text-4xl lg:text-5xl xl:text-[52px] tracking-[-0.02em] leading-[1.1] mb-12 max-w-[22ch]">
        <span className="text-accent italic">{site.services.titlePrefix}</span>
        {site.services.titleSuffix}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-stretch">
        <div className="grid gap-3.5">
          {services.map((s) => {
            const isOpen = open === s.n
            return (
              <button
                key={s.n}
                type="button"
                onClick={() => setOpen(s.n)}
                className="text-left bg-surface rounded-2xl p-5 border border-line cursor-pointer transition-all duration-200 hover:shadow-md"
              >
                <div className="flex gap-4 items-start w-full">
                  <div className="w-9 h-9 rounded-lg bg-accent grid place-items-center text-[13px] font-semibold text-white shrink-0">
                    {String(s.n).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-medium">{s.title}</div>
                    {isOpen && (
                      <div className="text-[13px] text-soft mt-1.5 leading-[1.55]">
                        {s.description}
                      </div>
                    )}
                  </div>
                  <span
                    className={`text-soft text-lg shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden
                  >
                    +
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="rounded-2xl overflow-hidden bg-line min-h-[300px] lg:min-h-0">
          <img
            src={site.images.services}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
