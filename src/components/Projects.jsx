import { ArrowUpRight, Github, Terminal } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/content'

function TechList({ items, label }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink/50">
        {label}
      </span>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-lg border-2 border-ink/15 bg-canvas px-2.5 py-1 font-mono text-xs font-semibold text-ink/80"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

function FeaturedProject({ project }) {
  return (
    <article className="reveal card overflow-hidden shadow-brut-lg">
      <div
        className={`flex flex-col gap-4 border-b-[2.5px] border-ink ${project.color} p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8`}
      >
        <div className="flex items-start gap-4 sm:gap-5">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[2.5px] border-ink bg-white font-display text-lg font-extrabold shadow-brut-sm sm:h-14 sm:w-14 sm:text-xl">
            {project.number}
          </span>
          <div>
            <h3 className="text-2xl leading-tight sm:text-3xl">{project.title}</h3>
            <p className="mt-1 font-display text-sm font-bold text-ink/75 sm:text-base">
              {project.subtitle}
            </p>
          </div>
        </div>

        {project.demo && (
          <span className="pill shrink-0 bg-white shadow-brut-sm">
            <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
            Live demo
          </span>
        )}
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3">
          {project.description.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 32)}
              className={`text-[15px] leading-relaxed text-ink/75 ${index > 0 ? 'mt-3' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink/50">
            Technical highlights
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-lg border-2 border-ink/20 bg-white px-2.5 py-1 text-xs font-semibold text-ink/80"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-t-2 border-dashed border-ink/15 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <TechList items={project.tech} label="Built with" />

        <div className="flex shrink-0 flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="btn bg-ink text-cream"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn bg-white"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow={projects.eyebrow}
      heading={projects.heading}
      subtitle={projects.subtitle}
      className="bg-canvas/60 border-y-[2.5px] border-ink"
    >
      <div className="space-y-8">
        {projects.featured.map((project) => (
          <FeaturedProject key={project.title} project={project} />
        ))}
      </div>

      <h3 className="reveal mt-16 text-xl sm:text-2xl">More projects</h3>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2">
        {projects.more.map((project, index) => (
          <li
            key={project.title}
            className="reveal card card-hover flex flex-col p-5 sm:p-6"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-lg">{project.title}</h4>
              <span
                className={`h-8 w-8 shrink-0 rounded-lg border-2 border-ink ${project.color}`}
                aria-hidden="true"
              />
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{project.body}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border-2 border-ink/15 bg-canvas px-2.5 py-1 font-mono text-xs font-semibold text-ink/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-violet hover:underline"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View on GitHub
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      <div className="reveal card mt-5 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-[2.5px] border-ink bg-canvas">
            <Terminal className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <h4 className="text-base">{projects.practice.title}</h4>
            <p className="mt-1 text-sm text-ink/65">{projects.practice.note}</p>
          </div>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {projects.practice.items.map((item) => (
            <li
              key={item}
              className="rounded-lg border-2 border-ink/15 bg-canvas px-2.5 py-1 text-xs font-semibold text-ink/75"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
