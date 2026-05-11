import { site } from '../data/site.js'

export default function Team() {
  return (
    <section id="equipo" className="px-6 md:px-12 py-20 md:py-24">
      <div className="text-[13px] text-soft mb-3 tracking-[0.02em]">
        Equipo
      </div>
      <h2 className="font-sans font-sans text-[36px] md:text-5xl lg:text-[52px] tracking-[-0.02em] leading-[1.05] max-w-[20ch] mb-10 md:mb-12">
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

function TeamCard({ name, role, wa }) {
  return (
    <div className="bg-surface border border-line rounded-2xl p-5 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div>
        <div className="text-[15px] font-sans leading-tight">{name}</div>
        <div className="text-[12px] text-soft mt-0.5">{role}</div>
      </div>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent text-white text-[13px] font-medium hover:opacity-90 transition-opacity cursor-pointer"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.88 11.89L4 20l4.22-1.11a7.93 7.93 0 003.83.97h.01A7.94 7.94 0 0020 11.93a7.85 7.85 0 00-2.4-5.61zM12.05 18.5h-.01a6.6 6.6 0 01-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.6 6.6 0 1112.21-3.5 6.6 6.6 0 01-6.61 6.59zm3.62-4.94c-.2-.1-1.17-.58-1.36-.64s-.31-.1-.45.1-.51.64-.62.77-.23.15-.43.05a5.4 5.4 0 01-1.6-.99 6 6 0 01-1.1-1.37c-.12-.2 0-.31.08-.41s.2-.23.3-.34a1.4 1.4 0 00.2-.34.37.37 0 000-.35c-.05-.1-.45-1.08-.62-1.48s-.33-.34-.45-.35h-.39a.74.74 0 00-.54.25 2.26 2.26 0 00-.7 1.68 3.93 3.93 0 00.82 2.08 8.99 8.99 0 003.43 3.04c.48.2.85.33 1.14.42a2.74 2.74 0 001.26.08 2.07 2.07 0 001.36-.96 1.69 1.69 0 00.12-.96c-.05-.08-.18-.13-.38-.23z" />
        </svg>
        Contactame
      </a>
    </div>
  )
}