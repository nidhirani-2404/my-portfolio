import Section from './Section'
import Icon from './Icon'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" heading="What I work with">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <li
            key={group.title}
            className="reveal card card-hover flex flex-col p-5"
            style={{ transitionDelay: `${(index % 4) * 70}ms` }}
          >
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-[2.5px] border-ink ${group.color}`}
              >
                <Icon name={group.icon} className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <h3 className="text-[15px] leading-tight">{group.title}</h3>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border-2 border-ink/15 bg-canvas px-2.5 py-1 font-mono text-xs font-semibold text-ink/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
