/** Smooth-scrolls to a section by id, accounting for the sticky navbar height. */
export function scrollToSection(id, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
