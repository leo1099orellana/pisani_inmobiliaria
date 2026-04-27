import { useState } from 'react'
import { site } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contacto" className="px-6 md:px-12 py-16 md:py-20 pb-10">
      <div className="text-[13px] text-soft mb-6 tracking-[0.02em]">
        {site.contact_section.eyebrow}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
        <div>
          <h2 className="font-serif font-normal text-[32px] md:text-4xl lg:text-5xl xl:text-[52px] tracking-[-0.02em] mb-8 leading-[1.05]">
            {site.contact_section.title[0]}<br />{site.contact_section.title[1]}
          </h2>

          <div className="grid gap-5">
            <ContactRow
              label="Oficina"
              value={site.contact.address}
            />
            <ContactRow
              label="Teléfono"
              value={site.contact.phone}
              href={site.contact.whatsappUrl}
              external
            />
            <ContactRow
              label="Email"
              value={site.contact.email}
              href={`mailto:${site.contact.email}`}
            />
            <ContactRow
              label="Instagram"
              value={site.contact.instagram}
              href={site.contact.instagramUrl}
              external
            />
          </div>

          <div className="mt-9">
            <div className="text-[13px] font-medium mb-3">Horario de atención</div>
            <div className="grid grid-cols-[auto_auto] gap-y-1.5 gap-x-10 text-[13px] text-soft">
              {site.hours.map((h) => (
                <div key={h.days} className="contents">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

function ContactRow({ label, value, href, external }) {
  const isLink = Boolean(href)
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4 items-center border-b border-line pb-3.5">
      <div className="text-xs text-soft tracking-[0.04em]">{label}</div>
      {isLink ? (
        
         <a href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="text-[15px] cursor-pointer hover:text-accent transition-colors"
        >
          {value}
        </a>
      ) : (
        <div className="text-[15px]">{value}</div>
      )}
    </div>
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
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error' | null

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    // Por ahora abrimos el cliente de email del usuario con todo prellenado.
    // Cuando se decida el endpoint real (Formspree, EmailJS, backend propio),
    // reemplazar este bloque por un fetch al endpoint correspondiente.
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
      className="bg-surface rounded-2xl p-6 md:p-8 border border-line"
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
        className="mt-5 px-6 py-3.5 rounded-full bg-accent text-white border-none text-sm font-medium cursor-pointer inline-flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
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
