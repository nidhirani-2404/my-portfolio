import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Shell } from './Section'
import { links, profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t-[2.5px] border-ink bg-cream py-8">
      <Shell className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-extrabold">{profile.name}</p>
          <p className="mt-0.5 text-sm text-ink/60">
            Software Engineer • Full-Stack &amp; LLM • IIT (ISM) Dhanbad
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-icon"
            aria-label="GitHub profile"
          >
            <Github className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-icon"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          {links.phone && (
            <a href={links.phone} className="btn-icon" aria-label="Call phone number">
              <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          )}
          <a href={links.email} className="btn-icon" aria-label="Send an email">
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>
      </Shell>
    </footer>
  )
}
