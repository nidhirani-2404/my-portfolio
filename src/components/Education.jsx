import { GraduationCap, School } from 'lucide-react'
import Section from './Section'
import { education } from '../data/content'

export default function Education() {
  const { primary, others } = education

  return (
    <Section id="education" eyebrow={education.eyebrow} heading={education.heading}>
      {/* The IIT (ISM) entry is deliberately the largest thing in this section. */}
      <article className="reveal card overflow-hidden shadow-brut-lg">
        <div className="grid gap-6 bg-violet-tint p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-start gap-4 sm:gap-5">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-[2.5px] border-ink bg-violet text-white shadow-brut">
              <GraduationCap className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl leading-tight sm:text-2xl lg:text-3xl">{primary.school}</h3>
              <p className="mt-2 font-display text-sm font-bold text-ink/80 sm:text-base">
                {primary.degree}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            <span className="pill bg-white shadow-brut-sm">{primary.year}</span>
            <span className="pill bg-mint shadow-brut-sm">{primary.score}</span>
          </div>
        </div>
      </article>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2">
        {others.map((item, index) => (
          <li
            key={item.school}
            className="reveal card card-hover p-5 sm:p-6"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-[2.5px] border-ink bg-canvas">
                <School className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base leading-snug">{item.school}</h3>
                <p className="mt-1 text-sm text-ink/65">{item.degree}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="pill border-ink/15 bg-canvas">{item.year}</span>
              <span className="pill border-ink/15 bg-canvas">{item.score}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
