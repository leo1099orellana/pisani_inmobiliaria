import { site } from '../data/site.js'

export default function Footer() {
  const enlacesItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Propiedades', href: '#propiedades' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const contactoItems = [
    {
      label: site.contact.phone,
      href: site.contact.whatsappUrl,
      external: true,
    },
    {
      label: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    {
      label: 'Instagram',
      href: site.contact.instagramUrl,
      external: true,
    },
    {
      label: 'Argenprop',
      href: site.contact.argenpropUrl,
      external: true,
    },
    {
      label: 'Zonaprop',
      href: site.contact.zonapropUrl,
      external: true,
    },
  ]

  const legalItems = [
    { label: `Matrícula ${site.brand.license}`, href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Términos', href: '#' },
    { label: `© ${new Date().getFullYear()}`, href: null }, // sin link, solo texto
  ]

  return (
    <footer className="bg-dark text-[#e8dfd0] mt-16 px-6 md:px-12 py-12">
      <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="bg-white inline-block p-2.5 rounded-xl mb-5">
            <img
              src="/assets/logo-igpisani.webp"
              alt="I.G. Pisani"
              className="h-11"
            />
          </div>
          <div className="text-[13px] opacity-65 max-w-[38ch] leading-[1.55]">
            {site.brand.tagline}
          </div>
        </div>

        <FooterColumn title="Enlaces" items={enlacesItems} />
        <FooterColumn title="Contacto" items={contactoItems} />
        <FooterColumn title="Legal" items={legalItems} />
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.16em] uppercase opacity-50 mb-3.5">
        {title}
      </div>
      <ul className="list-none p-0 m-0 grid gap-2 text-[13px] opacity-85">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              
              < a href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="cursor-pointer hover:opacity-100 hover:text-white transition-all"
              >
                {item.label}
              </a>
            ) : (
              <span className="opacity-70">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}