import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import { codingProfiles } from '../data/content'

export default function CodingProfiles() {
  return (
    <Section id="coding" eyebrow="Coding Profiles" heading={codingProfiles.heading}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {codingProfiles.items.map((item, index) => (
          <li key={item.platform} style={{ transitionDelay: `${(index % 4) * 70}ms` }} className="reveal">
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card card-hover group flex h-full flex-col p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`inline-block rounded-lg border-2 border-ink ${item.color} px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide`}
                >
                  {item.platform}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ink/40 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 break-all font-mono text-sm font-bold">{item.handle}</p>
              <p className="mt-1 text-sm text-ink/65">{item.note}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
