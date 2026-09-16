import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react'
import Section, { Shell } from './Section'
import Icon from './Icon'
import { contact, finalCta, links, profile } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.email)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = profile.email
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Click to copy email address"
                className="inline-flex items-center justify-between gap-3 rounded-xl border-[2.5px] border-ink bg-violet-tint px-4 py-3 text-left transition-colors hover:bg-violet-soft"
              >
                <span className="flex items-center gap-2.5 font-mono text-sm font-bold">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="break-all">{profile.email}</span>
                </span>
                <span className="flex items-center gap-1 font-mono text-xs font-bold text-violet">
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </span>
              </button>

              {profile.phone && (
                <a
                  href={links.phone}
                  className="inline-flex items-center justify-between gap-3 rounded-xl border-[2.5px] border-ink bg-mint/40 px-4 py-3 transition-colors hover:bg-mint"
                >
                  <span className="flex items-center gap-2.5 font-mono text-sm font-bold">
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="break-all">{profile.phone}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={links.email} className="btn bg-ink text-cream">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {contact.cta}
              </a>
              <a
                href={links.gmail}
                target="_blank"
                rel="noreferrer noopener"
                className="btn bg-white"
              >
                Open in Gmail
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              {profile.phone && (
                <a href={links.phone} className="btn bg-white">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call me
                </a>
              )}
            </div>
          </div>

          <ul className="reveal grid gap-4 sm:grid-cols-2">
            {contact.socials.map((social) => {
              const isExternal = social.url.startsWith('http')
              return (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer noopener' : undefined}
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
              )
            })}
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
