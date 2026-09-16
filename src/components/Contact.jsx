import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import Section, { Shell } from './Section'
import Icon from './Icon'
import { contact, finalCta, links, profile } from '../data/content'

export default function Contact() {
  return (
    <>
      <Section id="contact" eyebrow={contact.eyebrow} heading={contact.heading}>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal card p-6 sm:p-8">
            {contact.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 32)}
                className={`text-base leading-relaxed text-ink/75 ${index > 0 ? 'mt-4' : ''}`}
              >
                {paragraph}
              </p>
            ))}

            <a
              href={links.email}
              className="mt-7 inline-flex w-full items-center justify-between gap-3 rounded-xl border-[2.5px] border-ink bg-violet-tint px-4 py-3 transition-colors hover:bg-violet-soft sm:w-auto"
            >
              <span className="flex items-center gap-2.5 font-mono text-sm font-bold">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="break-all">{profile.email}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <div className="mt-6">
              <a href={links.email} className="btn bg-ink text-cream">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {contact.cta}
              </a>
            </div>
          </div>

          <ul className="reveal grid gap-4 sm:grid-cols-2">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card card-hover group flex h-full items-center gap-3 p-4"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-canvas">
                    <Icon name={social.icon} className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-bold">{social.label}</span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 shrink-0 text-ink/40 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Closing call to action. */}
      <section className="border-t-[2.5px] border-ink bg-violet-tint py-16 sm:py-20">
        <Shell>
          <div className="reveal card mx-auto max-w-3xl p-8 text-center shadow-brut-lg sm:p-10">
            <p className="font-display text-lg font-bold text-ink/70 sm:text-xl">
              {finalCta.line1}
            </p>
            <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">{finalCta.line2}</h2>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#projects" className="btn bg-ink text-cream">
                View projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={links.email} className="btn bg-violet text-white">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Let&apos;s connect
              </a>
            </div>
          </div>
        </Shell>
      </section>
    </>
  )
}
