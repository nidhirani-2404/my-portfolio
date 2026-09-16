import { useState } from 'react'
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles, UserRound } from 'lucide-react'
import { Shell } from './Section'
import { RESUME_URL, heroChips, links, profile } from '../data/content'

function PhotoFrame() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[430px]">
      {/* Offset colour panel peeking out behind the photo. */}
      <div
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] border-[2.5px] border-ink bg-violet-soft"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[28px] border-[2.5px] border-ink bg-violet-tint shadow-brut-lg">
        {photoFailed ? (
          // Shown until public/nidhi.jpg exists, so the layout never breaks.
          <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 bg-violet-tint px-6 text-center">
            <UserRound className="h-16 w-16 text-violet" aria-hidden="true" />
            <p className="font-display text-sm font-bold text-ink/70">
              Add your photo at
              <br />
              <code className="font-mono text-xs">public/nidhi.jpg</code>
            </p>
          </div>
        ) : (
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            width={860}
            height={1075}
            onError={() => setPhotoFailed(true)}
            className="block aspect-[4/5] w-full object-cover object-top"
          />
        )}
      </div>

      {/* Decorative stickers. */}
      <div
        className="absolute -left-3 -top-5 rotate-[-8deg] rounded-xl border-[2.5px] border-ink bg-white px-3 py-1.5 font-mono text-sm font-bold shadow-brut sm:-left-5"
        aria-hidden="true"
      >
        &lt;/&gt;
      </div>

      <div
        className="absolute -right-3 top-16 w-[92px] rotate-[7deg] rounded-xl border-[2.5px] border-ink bg-white px-3 py-2 shadow-brut sm:-right-6 sm:w-[104px]"
        aria-hidden="true"
      >
        <ul className="space-y-0.5 font-display text-xs font-bold leading-tight">
          {profile.noteLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <span className="mt-1 block text-xs text-coral">&#9825;</span>
      </div>

      <div
        className="animate-float absolute -right-2 bottom-24 flex h-11 w-11 items-center justify-center rounded-xl border-[2.5px] border-ink bg-sun shadow-brut sm:-right-5"
        aria-hidden="true"
      >
        <Sparkles className="h-5 w-5" />
      </div>

      <div
        className="absolute -bottom-4 -left-2 rounded-full border-[2.5px] border-ink bg-mint px-3 py-1.5 font-display text-xs font-bold shadow-brut sm:-left-5 sm:px-4 sm:text-sm"
        aria-hidden="true"
      >
        <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-ink align-middle" />
        {profile.stickerLabel}
      </div>
    </div>
  )
}

export default function Hero() {
  const hasResume = RESUME_URL.trim().length > 0

  return (
    <section id="top" className="relative overflow-hidden">
      <Shell className="py-14 sm:py-16 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Text first in the DOM: on mobile the name and role are read before the photo. */}
          <div>
            <span className="pill reveal bg-sun shadow-brut-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.badge}
            </span>

            <h1 className="reveal mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              {profile.greeting}{' '}
              <span className="text-violet">{profile.name}</span>{' '}
              <span className="inline-block animate-float">👋</span>
            </h1>

            <p className="reveal mt-4 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              {profile.role}
            </p>
            <p className="reveal mt-1 font-display text-lg font-bold text-violet sm:text-xl">
              {profile.tagline}
            </p>

            <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {profile.intro}
            </p>

            <p className="reveal mt-4 font-display text-base font-bold sm:text-lg">
              {profile.supporting}
            </p>

            <ul className="reveal mt-7 flex flex-wrap gap-2">
              {heroChips.map((chip) => (
                <li key={chip.label} className={`pill ${chip.color} shadow-brut-sm`}>
                  {chip.label}
                </li>
              ))}
            </ul>

            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn bg-ink text-cream">
                View my work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              {hasResume ? (
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn bg-white"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title="Resume link coming soon"
                  className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border-[2.5px] border-ink/30 bg-white px-5 py-3 font-display text-sm font-bold text-ink/40"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Resume
                </button>
              )}

              <a href="#contact" className="btn bg-white">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Let&apos;s connect
              </a>

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
            </div>
          </div>

          <div className="reveal">
            <PhotoFrame />
          </div>
        </div>
      </Shell>
    </section>
  )
}
