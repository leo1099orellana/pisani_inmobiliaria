import { useState, useEffect, useRef } from 'react'
import { site } from '../data/site.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [propsOpen, setPropsOpen] = useState(false)
  const propsRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)

      const contacto = document.getElementById('contacto')
      if (contacto) {
        const rect = contacto.getBoundingClientRect()
        setHidden(rect.top <= 120)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (propsRef.current && !propsRef.current.contains(e.target)) {
        setPropsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const pillBase = 'rounded-full transition-all duration-300'
  const pillBg = scrolled
    ? 'bg-[#f4f4f2] shadow-xl ring-1 ring-black/5'
    : 'bg-[#f4f4f2]/90 backdrop-blur-md shadow-lg'

  const otherLinks = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 pt-5 transition-all duration-300 ${
        hidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="hidden md:flex justify-center items-center gap-3">
        <nav className={`${pillBase} ${pillBg} flex items-center gap-1 pl-2.5 pr-7 py-2.5`}>
          <a
            href="#"
            className="flex items-center pr-3"
            aria-label="I.G. Pisani — Inicio"
          >
            <img
              src="/assets/logo-igpisani.webp"
              alt="I.G. Pisani"
              className="h-11 w-auto"
            />
          </a>
          <div className="flex gap-7 text-[14px] font-medium text-ink pl-4 border-l border-black/10 items-center">
            <div
              ref={propsRef}
              className="relative"
              onMouseEnter={() => setPropsOpen(true)}
              onMouseLeave={() => setPropsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setPropsOpen((o) => !o)}
                className={`hover:text-accent transition-colors inline-flex items-center gap-1.5 cursor-pointer ${propsOpen ? 'text-accent' : ''}`}
                aria-expanded={propsOpen}
              >
                Propiedades
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform ${propsOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {propsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                  <div className="bg-[#f4f4f2] rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden p-2">
                    <div className="px-3 py-2 text-[10px] tracking-[0.12em] uppercase text-soft">
                      Portales asociados
                    </div>
                    <a
                      href={site.contact.argenpropUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setPropsOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#ff5722]/10 transition-colors cursor-pointer group/item"
                    >
                      <span className="w-9 h-9 rounded-lg bg-[#c2613f] grid place-items-center text-white font-bold text-[14px] shrink-0">A</span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-[14px] font-medium leading-tight">Argenprop</span>
                        <span className="block text-[11.5px] text-soft mt-0.5">Cartera publicada en Argenprop</span>
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-soft opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                    <a
                      href={site.contact.zonapropUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setPropsOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#fff200]/30 transition-colors cursor-pointer group/item"
                    >
                      <span className="w-9 h-9 rounded-lg  bg-[#d4a73a] grid place-items-center text-ink font-bold text-[14px] shrink-0">Z</span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-[14px] font-medium leading-tight">Zonaprop</span>
                        <span className="block text-[11.5px] text-soft mt-0.5">Cartera publicada en Zonaprop</span>
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-soft opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {otherLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="#contacto"
          className={`${pillBase} ${pillBg} group px-6 py-3.5 text-[14px] font-medium text-ink hover:bg-accent hover:text-white inline-flex items-center gap-2`}
        >
          Contactanos
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="md:hidden flex items-center justify-between">
        <a
          href="#"
          className={`${pillBase} ${pillBg} px-4 py-2.5 flex items-center`}
          aria-label="I.G. Pisani — Inicio"
        >
          <img
            src="/assets/logo-igpisani.webp"
            alt="I.G. Pisani"
            className="h-10 w-auto"
          />
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`${pillBase} ${pillBg} p-3 cursor-pointer`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-ink transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink mt-1 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink mt-1 transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-[#f4f4f2] rounded-2xl shadow-xl p-4 flex flex-col gap-1">
          <div className="py-2 px-3 text-soft text-[11px] tracking-[0.12em] uppercase">
            Propiedades
          </div>
          <a
            href={site.contact.argenpropUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-black/5 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-[#ff5722] grid place-items-center text-white font-bold text-[13px] shrink-0">A</span>
            <span className="text-[15px]">Argenprop</span>
          </a>
          <a
            href={site.contact.zonapropUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-black/5 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-[#fff200] grid place-items-center text-ink font-bold text-[13px] shrink-0">Z</span>
            <span className="text-[15px]">Zonaprop</span>
          </a>

          <div className="h-px bg-black/10 my-2" />

          {otherLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] py-3 px-3 rounded-lg hover:bg-black/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="px-5 py-3 rounded-full bg-accent text-white text-[14px] font-medium text-center mt-2"
          >
            Contactanos
          </a>
        </div>
      )}
    </header>
  )
}