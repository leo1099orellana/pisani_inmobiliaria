import { useState } from "react";
import { site } from "../data/site.js";

const slides = [
  {
    id: "las-canitas",
    title: "Las Cañitas",
    subtitle: "Depto · 2 dorm · 69 m² · Amoblado",
    image: "/assets/propiedades/las-canitas.jpg",
  },
  {
    id: "puerto-madero",
    title: "Puerto Madero",
    subtitle: "Depto · 2 amb · 45 m² + cochera",
    image: "/assets/propiedades/puerto-madero.jpg",
  },
  {
    id: "greenville",
    title: "Greenville Polo & Resort",
    subtitle: "Lote · 767 m²",
    image: "/assets/propiedades/greenville.jpg",
  },
  {
    id: "fincas-de-iraola",
    title: "Fincas de Iraola II",
    subtitle: "Casa · 3 dorm + playroom · 217 m² construidos",
    image: "/assets/propiedades/fincas-de-iraola.jpg",
  },
  {
    id: "el-carmen",
    title: "Country El Carmen",
    subtitle: "Casa · 5 dorm · 430 m² construidos",
    image: "/assets/propiedades/el-carmen.jpg",
  },
  {
    id: "abril",
    title: "Country Abril",
    subtitle: "Casa · 550 m² cubiertos · 2.100 m² lote",
    image: "/assets/propiedades/abril.jpg",
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
      <div className="text-[13px] text-soft mb-3 tracking-[0.02em]">
        {site.properties.eyebrow}
      </div>
      <h2 className="font-sans font-normal text-[36px] md:text-5xl lg:text-[52px] tracking-[-0.02em] leading-[1.05] max-w-[18ch] mb-10 md:mb-12">
        {site.properties.title}
      </h2>

      <div>
        {" "}
        <div className="relative">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[16/10] lg:aspect-[16/9] bg-line shadow-2xl">
            <img
              key={current.id}
              src={current.image}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90" />

            <div className="absolute top-4 right-4 md:top-5 md:right-5 bg-black/40 backdrop-blur-md px-3 py-1 md:px-3.5 md:py-1.5 rounded-full text-white text-[11px] md:text-[12px] font-medium">
              {active + 1} / {slides.length}
            </div>

            <div className="absolute left-5 right-5 md:left-8 md:right-8 lg:left-10 lg:right-10 bottom-5 md:bottom-8 lg:bottom-10 text-white">
              <div className="font-sans text-[22px] sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.01em] leading-tight mb-1.5">
                {current.title}
              </div>
              <div className="text-[12px] md:text-[14px] opacity-85 mb-4 md:mb-5">
                {current.subtitle}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a
                  href={site.contact.argenpropUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#70B32D] text-white text-[12px] md:text-[13px] font-medium hover:bg-[#5A9225] transition-colors cursor-pointer"
                >
                  <span className="w-5 h-5 rounded bg-white/20 grid place-items-center overflow-hidden">
                    <img src="https://www.google.com/s2/favicons?domain=argenprop.com&sz=32" alt="" className="w-4 h-4 object-contain" />
                  </span>
                  Ver en Argenprop
                  <svg
                    width="11"
                    height="11"
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
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FF4C00] text-white text-[12px] md:text-[13px] font-medium hover:bg-[#E03D00] transition-colors cursor-pointer"
                >
                  <span className="w-5 h-5 rounded bg-white grid place-items-center overflow-hidden">
                    <img src="https://www.google.com/s2/favicons?domain=zonaprop.com.ar&sz=32" alt="" className="w-4 h-4 object-contain" />
                  </span>
                  Ver en Zonaprop
                  <svg
                    width="11"
                    height="11"
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

          <button
            onClick={goToPrev}
            aria-label="Anterior"
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white shadow-xl ring-1 ring-black/5 grid place-items-center cursor-pointer hover:bg-bg hover:scale-110 transition-all z-10"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="md:w-4 md:h-4"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            aria-label="Siguiente"
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white shadow-xl ring-1 ring-black/5 grid place-items-center cursor-pointer hover:bg-bg hover:scale-110 transition-all z-10"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="md:w-4 md:h-4"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className="mt-4 md:mt-5">
          <div className="grid grid-cols-6 gap-1.5 md:gap-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`relative aspect-[4/3] rounded-md md:rounded-xl overflow-hidden cursor-pointer transition-all ${
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
                <div className="absolute bottom-1 left-1.5 right-1.5 text-white text-[9px] md:text-[10px] font-medium leading-tight hidden md:block">
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
