export function Shell({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`eyebrow ${className}`}>
      <span className="h-[2px] w-7 bg-ink" aria-hidden="true" />
      {children}
    </span>
  )
}

export default function Section({ id, eyebrow, heading, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}>
      <Shell>
        <div className="reveal mb-10 sm:mb-12">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">{heading}</h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </Shell>
    </section>
  )
}
