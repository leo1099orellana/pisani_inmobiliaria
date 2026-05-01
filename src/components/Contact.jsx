import { useState } from 'react'
import { site } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contacto" className="px-6 md:px-12 py-16 md:py-20 pb-10">
      <div className="text-[13px] text-soft mb-6 tracking-[0.02em]">
        {site.contact_section.eyebrow}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-8">
          <h2 className="font-serif font-normal text-[32px] md:text-4xl lg:text-5xl xl:text-[52px] tracking-[-0.02em] leading-[1.05]">
            {site.contact_section.title[0]}<br />{site.contact_section.title[1]}
          </h2>

          {/* Equipo en 3 columnas */}
          <div>
            <div className="text-xs text-soft tracking-[0.04em] mb-3">WhatsApp</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {site.about.team.map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* Email + Instagram */}
          <div>
            <div className="text-xs text-soft tracking-[0.04em] mb-3">Contacto directo</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ContactCard
                label="Email"
                value={site.contact.email}
                href={`mailto:${site.contact.email}`}
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                }
              />
              <ContactCard
                label="Instagram"
                value={site.contact.instagram}
                href={site.contact.instagramUrl}
                external
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Horario */}
          <div className="bg-surface border border-line rounded-2xl p-5">
            <div className="text-[13px] font-medium mb-3">Horario de atención</div>
            <div className="grid grid-cols-[auto_1fr] gap-y-1.5 gap-x-8 text-[13px] text-soft">
              {site.hours.map((h) => (
                <div key={h.days} className="contents">
                  <span>{h.days}</span>
                  <span className="text-right">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha: form */}
        <ContactForm />
      </div>
    </section>
  )
}

function TeamCard({ name, role, phone, wa, avatar }) {
  return (
    <div className="bg-surface border border-line rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-line shrink-0">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13.5px] font-medium leading-tight truncate">{name}</div>
          <div className="text-[11.5px] text-soft mt-0.5 truncate">{role}</div>
        </div>
      </div>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[12.5px] text-accent hover:underline inline-flex items-center gap-1.5 cursor-pointer"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.88 11.89L4 20l4.22-1.11a7.93 7.93 0 003.83.97h.01A7.94 7.94 0 0020 11.93a7.85 7.85 0 00-2.4-5.61zM12.05 18.5h-.01a6.6 6.6 0 01-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.6 6.6 0 1112.21-3.5 6.6 6.6 0 01-6.61 6.59z" />
        </svg>
        {phone}
      </a>
    </div>
  )
}

function ContactCard({ label, value, href, external, icon }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="bg-surface border border-line rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:border-accent transition-colors group"
    >
      <div className="w-10 h-10 rounded-full bg-accent/10 text-accent grid place-items-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] text-soft tracking-[0.04em] uppercase">{label}</div>
        <div className="text-[13px] font-medium truncate group-hover:text-accent transition-colors">{value}</div>
      </div>
    </a>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [status, setStatus] = useState(null)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const subject = encodeURIComponent(`Consulta web — ${form.nombre} ${form.apellido}`)
    const body = encodeURIComponent(
      `Nombre: ${form.nombre} ${form.apellido}\n` +
      `Email: ${form.email}\n` +
      `Teléfono: ${form.telefono}\n\n` +
      `Mensaje:\n${form.mensaje}`
    )
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface rounded-2xl p-6 md:p-7 border border-line lg:sticky lg:top-28"
    >
      <div className="text-[13px] font-medium mb-5">
        {site.contact_section.formTitle}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
        <Field label="Nombre" placeholder="Tu nombre" value={form.nombre} onChange={update('nombre')} required />
        <Field label="Apellido" placeholder="Tu apellido" value={form.apellido} onChange={update('apellido')} required />
      </div>

      <Field label="Email" type="email" placeholder="tu@email.com" value={form.email} onChange={update('email')} required />

      <div className="mt-3.5">
        <Field label="Teléfono" type="tel" placeholder="+54 9 11 ..." value={form.telefono} onChange={update('telefono')} />
      </div>

      <div className="mt-3.5">
        <label className="text-[11px] text-soft tracking-[0.04em]">Mensaje</label>
        <textarea
          rows={4}
          required
          placeholder="Contanos qué estás buscando..."
          value={form.mensaje}
          onChange={update('mensaje')}
          className="block w-full mt-2 px-3.5 py-3 rounded-xl border border-line bg-bg font-sans text-sm resize-y text-ink focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-5 px-6 py-3.5 rounded-full bg-accent text-white border-none text-sm font-medium cursor-pointer inline-flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 w-full sm:w-auto justify-center"
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje →'}
      </button>

      {status === 'sent' && (
        <div className="mt-4 text-[13px] text-soft">
          Se abrió tu cliente de email. Si no se abrió, escribinos directo a{' '}
          <a href={`mailto:${site.contact.email}`} className="text-accent">
            {site.contact.email}
          </a>.
        </div>
      )}
    </form>
  )
}

function Field({ label, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="text-[11px] text-soft tracking-[0.04em]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="block w-full mt-2 px-3.5 py-3 rounded-xl border border-line bg-bg font-sans text-sm text-ink focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  )
}