import Section from './Section'
import Icon from './Icon'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow={achievements.eyebrow} heading={achievements.heading}>
      <ul className="grid gap-5 sm:grid-cols-2">
        {achievements.items.map((item, index) => (
          <li
            key={item.title}
            className="reveal card card-hover flex items-start gap-4 p-6 sm:p-7"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <span
              className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[2.5px] border-ink ${item.color} shadow-brut-sm`}
            >
              <Icon name={item.icon} className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
