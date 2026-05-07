import { site } from '../data/site.js'

export default function Team() {
  return (
    <section id="equipo" className="px-6 md:px-12 py-20 md:py-24">
      <div className="text-[13px] text-soft mb-3 tracking-[0.02em]">
        Equipo
      </div>
      <h2 className="font-serif font-normal text-[36px] md:text-5xl lg:text-[52px] tracking-[-0.02em] leading-[1.05] max-w-[20ch] mb-10 md:mb-12">
        Conocé al equipo de I.G. Pisani.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        {site.about.team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  )
}

function TeamCard({ name, role, phone, wa, avatar }) {
  return (
    <div className="bg-surface border border-line rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-line shrink-0">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[15px] font-medium leading-tight">{name}</div>
          <div className="text-[12px] text-soft mt-0.5">{role}</div>
        </div>
      </div>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent text-white text-[13px] font-medium hover:opacity-90 transition-opacity cursor-pointer"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.88 11.89L4 20l4.22-1.11a7.93 7.93 0 003.83.97h.01A7.94 7.94 0 0020 11.93a7.85 7.85 0 00-2.4-5.61zM12.05 18.5h-.01a6.6 6.6 0 01-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.6 6.6 0 1112.21-3.5 6.6 6.6 0 01-6.61 6.59z" />
        </svg>
        {phone}
      </a>
    </div>
  )
}