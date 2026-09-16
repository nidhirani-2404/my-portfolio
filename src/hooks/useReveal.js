import { useEffect } from 'react'

/**
 * Fades `.reveal` elements in as they scroll into view.
 * Runs once per element, then stops observing it.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')

    // Without IntersectionObserver, show everything rather than hiding the page.
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

/**
 * Tracks which section is currently on screen so the nav can highlight it.
 */
export function useActiveSection(ids, setActive) {
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null)

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport among those visible.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids, setActive])
}
