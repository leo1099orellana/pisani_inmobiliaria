import { site } from '../data/site.js'

export default function About() {
  return (
    <section id="nosotros" className="px-6 md:px-12 py-20 md:py-24 max-w-[1280px] mx-auto">
      <div className="text-[13px] text-soft mb-8 tracking-[0.02em]">
        {site.about.eyebrow}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <h2 className="font-serif font-normal tracking-[-0.02em] text-[36px] md:text-5xl lg:text-[56px] leading-[1.02] mb-7 uppercase">
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
              className="text-[15.5px] leading-[1.65] text-ink-soft max-w-[58ch]"
              dangerouslySetInnerHTML={{ __html: site.about.body }}
            />
          </div>

          <div className="flex gap-4 items-center mt-7">
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-bg bg-line"
                  style={{ marginLeft: i === 1 ? 0 : -12 }}
                >
                  <img
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="text-[13px] font-medium">{site.about.teamLabel}</div>
              <div className="text-[12px] text-soft">{site.about.teamSubLabel}</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-line max-w-[520px] w-full lg:ml-auto">
          <img
            src={site.images.handshake}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-surface px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 text-[13px] shadow-lg">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>{site.about.badgeText}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
