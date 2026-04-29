// Información de contacto y datos generales del sitio.
// Todo lo que la clienta quiera cambiar de los textos del sitio se modifica acá.

export const site = {
  brand: {
    name: 'I.G. Pisani',
    fullName: 'I.G. Pisani Negocios Inmobiliarios',
    tagline: 'Negocios Inmobiliarios desde 2011. CUCICBA 7047 / CMYCP Quilmes 1028.',
    licenses: ['CUCICBA 7047', 'CMYCP Quilmes 1028'],
    foundedYear: 2011,
  },

  contact: {
    email: 'hola@igpisani.com.ar',
    instagram: '@i.g.pisani',
    instagramUrl: 'https://instagram.com/i.g.pisani',
    argenpropUrl: 'https://www.argenprop.com/inmobiliaria/ig-pisani',
    zonapropUrl: 'https://www.zonaprop.com.ar/inmobiliarias/ig-pisani',

    // Lista de teléfonos / WhatsApp del equipo
    phones: [
      { label: '+54 11 4413 1008', wa: 'https://wa.me/541144131008' },
      { label: '+54 9 11 5041 4103', wa: 'https://wa.me/541150414103' },
      { label: '+54 9 11 6926 4217', wa: 'https://wa.me/541169264217' },
    ],
  },

  hours: [
    { days: 'Lunes a Viernes', time: '10:00 – 18:00 hs' },
    { days: 'Sábados', time: 'Con cita previa' },
    { days: 'Domingos', time: 'Cerrado' },
  ],

  hero: {
    title: ['Encontrá tu', 'próxima propiedad.'],
    subtitle: 'Casas, departamentos y terrenos seleccionados en los principales countries y barrios privados de la zona sur del GBA, CABA y Quilmes.',
    ctaLabel: 'Explorar propiedades',
    ctaHref: '#propiedades',
  },

  about: {
    eyebrow: 'Nosotros',
    title: ['Experiencia, trayectoria,', 'confianza y profesionalismo.'],
    body: 'En <strong>I.G. Pisani Negocios Inmobiliarios</strong> acompañamos a cada familia con el cuidado y la dedicación que merece una de las decisiones más importantes. Tasamos, negociamos y cerramos operaciones en los principales Countries y Barrios Privados de la Zona SUR del Gran Buenos Aires — Abril Club de Campo, CC El Carmen, Greenville Polo & Resort, Fincas de Iraola, Campos de Roca, entre otros — y en CABA y la Ciudad de Quilmes. Presentes en la zona Sur del GBA y en el corredor de la Avenida del Libertador desde el año 2011.',
    teamHeading: 'Equipo I.G. Pisani',
    team: [
      {
        name: 'Italo Gerardo Pisani',
        role: 'Asesor inmobiliario',
        phone: '+54 9 11 5041 4103',
        wa: 'https://wa.me/541150414103',
        avatar: 'https://i.pravatar.cc/120?img=11',
      },
      {
        name: 'Maria Tobio',
        role: 'Asesora inmobiliaria',
        phone: '+54 9 11 6926 4217',
        wa: 'https://wa.me/541169264217',
        avatar: 'https://i.pravatar.cc/120?img=44',
      },
      {
        name: 'Gabriela Ceccarini',
        role: 'Asesora inmobiliaria',
        phone: '+54 11 4413 1008',
        wa: 'https://wa.me/541144131008',
        avatar: 'https://i.pravatar.cc/120?img=45',
      },
    ],
  },

  whyUs: {
    title: '¿Por qué elegirnos?',
  },

  // La sección "Propiedades destacadas" ahora redirige a los portales
  properties: {
    eyebrow: 'Propiedades',
    title: 'Conocé nuestra cartera completa.',
    subtitle: 'Publicamos todas nuestras propiedades activas en los portales líderes del país. Elegí dónde preferís buscar.',
  },

  services: {
    eyebrow: 'Servicios',
    titlePrefix: 'Nuestros servicios',
    titleSuffix: ', pensados para acompañarte en cada etapa.',
  },

  cta: {
    eyebrow: 'Empezá hoy tu próxima operación',
    titleStart: 'Comprá, vendé o alquilá',
    titleEnd: 'con confianza.',
    ctaLabel: 'Contactanos',
  },

  contact_section: {
    eyebrow: 'Contacto',
    title: ['Hablemos de tu', 'próxima propiedad.'],
    formTitle: 'Enviános un mensaje',
  },

  // Imágenes — reemplazar por las definitivas que mande la clienta
  images: {
    hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=75',
    handshake: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=1200&q=70',
    whyBg: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=75',
    services: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=70',
    cta: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=70',
  },
}