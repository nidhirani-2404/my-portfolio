import { useEffect, useState } from 'react'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { navLinks, links, profile } from '../data/content'
import { useActiveSection } from '../hooks/useReveal'

const NAV_IDS = navLinks.map((link) => link.id)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useActiveSection(NAV_IDS, setActive)

  // Don't let the page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b-[2.5px] border-ink bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight sm:text-xl"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-lg px-3 py-2 font-display text-sm font-semibold transition-colors ${
                active === link.id ? 'text-violet' : 'text-ink/70 hover:text-ink'
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-violet transition-transform duration-200 ${
                  active === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
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
          <a href="#contact" className="btn bg-violet text-white">
            Let&apos;s connect
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="btn-icon lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t-[2.5px] border-ink bg-cream lg:hidden">
          <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3 py-3 font-display font-semibold ${
                      active === link.id ? 'bg-violet-tint text-violet' : 'hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2">
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
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn flex-1 bg-violet text-white"
              >
                Let&apos;s connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
