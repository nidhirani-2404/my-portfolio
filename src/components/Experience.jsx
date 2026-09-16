import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import Section from './Section'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow={experience.eyebrow}
      heading={experience.heading}
      subtitle={experience.note}
    >
      <article className="reveal card overflow-hidden">
        <div className="flex flex-col gap-4 border-b-[2.5px] border-ink bg-sky/90 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[2.5px] border-ink bg-white">
              <Briefcase className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl">{experience.role}</h3>
              <p className="mt-1 font-display text-sm font-bold sm:text-base">
                {experience.company}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
            <span className="pill bg-white">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {experience.period}
            </span>
            <span className="pill bg-white">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {experience.location}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="max-w-3xl text-base leading-relaxed text-ink/75">{experience.summary}</p>

          <ul className="mt-6 space-y-3">
            {experience.bullets.map((bullet) => (
              <li key={bullet.slice(0, 32)} className="flex gap-3">
                <span
                  className="mt-[9px] h-2 w-2 shrink-0 rounded-full border-2 border-ink bg-sun"
                  aria-hidden="true"
                />
                <span className="text-[15px] leading-relaxed text-ink/80">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-2 border-t-2 border-dashed border-ink/15 pt-5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink/50">
              Worked with
            </span>
            {experience.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border-2 border-ink/15 bg-canvas px-2.5 py-1 font-mono text-xs font-semibold text-ink/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Section>
  )
}
