import { useState } from 'react'

const links = [
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50 bg-bg">
      <div className="flex items-center justify-between px-5 md:px-10 py-4">
        <a href="#" className="shrink-0" aria-label="I.G. Pisani — Inicio">
          <img
            src="/assets/logo-igpisani.webp"
            alt="I.G. Pisani"
            className="h-9 md:h-10 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-9 text-[13.5px] text-ink-soft">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-surface text-ink text-[13px] font-medium border border-line hover:bg-line/40 transition-colors"
        >
          Contactanos
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 -mr-2"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink mt-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink mt-1.5 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-bg px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] py-3"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="px-5 py-3 rounded-full bg-surface text-ink text-[14px] font-medium border border-line text-center mt-3"
          >
            Contactanos
          </a>
        </div>
      )}
    </header>
  )
}
