import { site } from '../data/site.js'
import { stats } from '../data/services.js'

export default function WhyUs() {
  return (
    <section className="px-3 md:px-5">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-dark min-h-[380px] py-14 px-6 md:py-16 md:px-12">
        <img
          src={site.images.whyBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,18,16,0.55)] to-[rgba(20,18,16,0.8)]" />

        <div className="relative text-center text-white max-w-[1280px] mx-auto">
          <h2 className="font-serif font-normal text-4xl md:text-5xl lg:text-6xl xl:text-[64px] tracking-[-0.02em] leading-none mb-12">
            {site.whyUs.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={
                  i > 0 ? 'md:border-l md:border-white/20 md:pl-5' : ''
                }
              >
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[88px] tracking-[-0.03em] leading-none mb-2.5">
                  {s.value}
                </div>
                <div className="text-sm opacity-85 font-medium">{s.label}</div>
                {s.sublabel && (
                  <div className="text-[12.5px] opacity-65 mt-1">{s.sublabel}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}