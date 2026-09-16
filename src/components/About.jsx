import Section from './Section'
import Icon from './Icon'
import { about } from '../data/content'

export default function About() {
  return (
    <Section id="about" eyebrow={about.eyebrow} heading={about.heading}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div className="reveal card p-6 sm:p-8">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 32)}
              className={`text-base leading-relaxed text-ink/75 ${index > 0 ? 'mt-4' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {about.cards.map((card, index) => (
            <li
              key={card.title}
              className="reveal card card-hover flex flex-col p-5 sm:p-6"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border-[2.5px] border-ink ${card.color}`}
              >
                <Icon name={card.icon} className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
