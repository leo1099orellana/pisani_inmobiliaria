import { site } from '../data/site.js'

export default function About() {
  return (
    <section id="nosotros" className="px-6 md:px-12 py-20 md:py-24">
      <div className="text-[13px] text-soft mb-8 tracking-[0.02em]">
        {site.about.eyebrow}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <h2 className="font-serif font-normal tracking-[-0.02em] text-[36px] md:text-5xl lg:text-[52px] leading-[1.05] mb-7">
            {site.about.title.map((line, i) => (
              <span key={i}>
                {line}
                {i < site.about.title.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <div className="flex gap-4 items-start mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-accent mt-2 shrink-0" />
            <p
              className="text-[15px] leading-[1.65] text-ink-soft max-w-[58ch]"
              dangerouslySetInnerHTML={{ __html: site.about.body }}
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {site.brand.licenses.map((lic) => (
              <span
                key={lic}
                className="text-[12px] px-3 py-1.5 rounded-full bg-line/60 text-ink-soft"
              >
                {lic}
              </span>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-line max-w-[520px] w-full lg:ml-auto">
          <img
            src={site.images.handshake}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}