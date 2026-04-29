import { useState } from "react";
import { site } from "../data/site.js";

const slides = [
  {
    id: "abril",
    title: "Abril Club de Campo",
    subtitle: "Casa · 4 dorm · 395 m²",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1600&q=75",
  },
  {
    id: "el-carmen",
    title: "Country El Carmen",
    subtitle: "Casa · 4 dorm · 300 m²",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=75",
  },
  {
    id: "greenville",
    title: "Greenville Polo & Resort",
    subtitle: "Terreno · 767 m²",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=75",
  },
  {
    id: "fincas",
    title: "Fincas de Iraola",
    subtitle: "Lotes y casas",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=75",
  },
  {
    id: "campos-roca",
    title: "Campos de Roca",
    subtitle: "Country · Berazategui",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=75",
  },
];

export default function Properties() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  function goToPrev() {
    setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  }

  function goToNext() {
    setActive((i) => (i === slides.length - 1 ? 0 : i + 1));
  }

  return (
    <section
      id="propiedades"
      className="px-6 md:px-12 py-20 md:py-24 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="text-[13px] text-soft mb-3 tracking-[0.02em]">
          {site.properties.eyebrow}
        </div>
        <h2 className="font-serif font-normal text-[36px] md:text-5xl lg:text-[52px] tracking-[-0.02em] leading-[1.05] max-w-[18ch] mb-12">
          {site.properties.title}
        </h2>

        {/* Card principal grande */}
        <div className="relative">
          <div className="group relative block rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/9] bg-line shadow-2xl">
            <img
              key={current.id}
              src={current.image}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

            {/* Contador */}
            <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[12px] font-medium">
              {active + 1} / {slides.length}
            </div>

            {/* Bloque de info: título + subtítulo + botones de portales */}
            <div className="absolute left-7 right-7 md:left-10 md:right-10 bottom-7 md:bottom-10 text-white">
              <div className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[-0.01em] leading-tight mb-2">
                {current.title}
              </div>
              <div className="text-[13px] md:text-[14px] opacity-85 mb-6">
                {current.subtitle}
              </div>

              {/* Botones de portales — versión suave */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <a
                  href={site.contact.argenpropUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#c2613f] text-white text-[12px] sm:text-[13px] font-medium hover:bg-[#a8512f] transition-colors cursor-pointer w-full sm:w-auto"
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-white/20 grid place-items-center font-bold text-[10px] sm:text-[11px]">
                    A
                  </span>
                  Ver en Argenprop
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>

                <a
                  href={site.contact.zonapropUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#d4a73a] text-white text-[12px] sm:text-[13px] font-medium hover:bg-[#b8902f] transition-colors cursor-pointer w-full sm:w-auto"
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-white/20 grid place-items-center font-bold text-[10px] sm:text-[11px]">
                    Z
                  </span>
                  Ver en Zonaprop
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Flechas de navegación */}
          <button
            onClick={goToPrev}
            aria-label="Anterior"
            className="absolute left-3 md:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-xl ring-1 ring-black/5 grid place-items-center cursor-pointer hover:bg-bg hover:scale-110 transition-all z-10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            aria-label="Siguiente"
            className="absolute right-3 md:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-xl ring-1 ring-black/5 grid place-items-center cursor-pointer hover:bg-bg hover:scale-110 transition-all z-10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Miniaturas debajo */}
        <div className="mt-5">
          <div className="grid grid-cols-5 gap-2 md:gap-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden cursor-pointer transition-all ${
                  active === i
                    ? "ring-2 ring-accent shadow-md"
                    : "opacity-50 hover:opacity-100 ring-1 ring-black/5"
                }`}
                aria-label={`Ver ${s.title}`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-1.5 right-1.5 text-white text-[9px] md:text-[10px] font-medium leading-tight hidden sm:block">
                  {s.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
