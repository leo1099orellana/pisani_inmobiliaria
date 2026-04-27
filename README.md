# I.G. Pisani — Negocios Inmobiliarios

Landing page para I.G. Pisani Negocios Inmobiliarios. Stack: **Vite + React + Tailwind CSS v4**.

---

## Cómo arrancar

```bash
npm install
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173).

Para build de producción:

```bash
npm run build
npm run preview   # para previsualizar el build local
```

---

## Estructura

```
pisani_inmobiliaria/
├── public/
│   └── assets/
│       └── logo-igpisani.webp        # Logo de la empresa
├── src/
│   ├── components/                   # Una sección = un componente
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Properties.jsx            # Lee desde data/properties.json
│   │   ├── Services.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx               # Form con mailto fallback
│   │   └── Footer.jsx
│   ├── data/                         # ⭐ TODO LO EDITABLE ESTÁ ACÁ
│   │   ├── properties.json           # Lista de propiedades
│   │   ├── services.js               # Servicios, hero features, stats
│   │   └── site.js                   # Contacto, copys, dirección, imágenes
│   ├── App.jsx                       # Composición principal
│   ├── main.jsx                      # Entry point
│   └── index.css                     # Tailwind + design tokens (colores, fuentes)
├── index.html
├── package.json
└── vite.config.js
```

---

## Cómo editar contenido sin tocar componentes

Toda la info de la clienta está centralizada en `src/data/`. **No hace falta tocar JSX para cambiar textos o agregar propiedades.**

### Agregar / modificar propiedades

Editar `src/data/properties.json`. Cada item tiene esta forma:

```json
{
  "id": "abril-club-de-campo",
  "title": "Abril Club de Campo",
  "subtitle": "Casa · 4 dorm · 395 m²",
  "price": "USD 1.200.000",
  "image": "https://url-de-la-imagen.jpg",
  "url": "#"
}
```

- `id` debe ser único (sirve como key de React).
- `image` puede ser una URL externa o una ruta local: poné el archivo en `public/assets/properties/` y referencialo como `/assets/properties/foto.jpg`.

### Cambiar datos de contacto / textos / imágenes

Editar `src/data/site.js`. Los textos de hero, about, CTA, dirección, teléfono, email, Instagram, horarios, etc., están todos ahí.

### Editar servicios o features del hero

Editar `src/data/services.js`.

---

## Tokens de diseño

Los colores y fuentes están definidos como variables CSS en `src/index.css`, dentro del bloque `@theme`. Tailwind v4 los expone automáticamente como utilidades:

| Variable | Utilidad Tailwind | Color |
|---|---|---|
| `--color-bg` | `bg-bg`, `text-bg` | `#f4f4f2` (fondo crema) |
| `--color-surface` | `bg-surface` | `#ffffff` (tarjetas) |
| `--color-ink` | `text-ink` | `#1b1d1e` (texto principal) |
| `--color-ink-soft` | `text-ink-soft` | `#3b3d3f` (texto secundario) |
| `--color-soft` | `text-soft` | `#6a6f73` (texto muy suave / labels) |
| `--color-line` | `border-line` | `#e4e4e0` (bordes) |
| `--color-accent` | `bg-accent`, `text-accent` | `#61777b` (acento sage) |
| `--color-dark` | `bg-dark` | `#1f2426` (secciones oscuras) |

Tipografía:
- `font-serif` → Instrument Serif (títulos)
- `font-sans` → Geist (body, default)

---

## Pendientes / próximos pasos

- [ ] Reemplazar imágenes placeholder de Unsplash en `src/data/site.js` por las definitivas.
- [ ] Reemplazar imágenes placeholder de propiedades en `src/data/properties.json` por las reales.
- [ ] Conectar el form de contacto a un endpoint real (Formspree / EmailJS / backend). Hoy abre el cliente de email del usuario via `mailto:` como fallback. Ver `src/components/Contact.jsx`, función `handleSubmit`.
- [ ] Reemplazar avatares de equipo (`pravatar.cc`) en `About.jsx` por fotos reales.
- [ ] Configurar dominio en Vercel y SEO (Open Graph, favicon definitivo).
- [ ] Esperar Word con copys finales de la clienta y actualizar `site.js`.

---

## Deploy en Vercel

Conectar el repo en el dashboard de Vercel. Vercel detecta Vite automáticamente.

Comandos por si lo querés hacer desde CLI:

```bash
npm i -g vercel
vercel       # primera vez, sigue el wizard
vercel --prod
```
