import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { skills } from '../data/resumeData'

function SkillBar({ name, level, animate }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-slate-400 dark:text-slate-500">{level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-[width] duration-[1200ms] ease-out"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const categories = Object.keys(skills)
  const [active, setActive] = useState(categories[0])
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="max-w-6xl mx-auto px-5 py-24">
      <Reveal>
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">What I build with</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex flex-wrap gap-2 mt-6 mb-8" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'btn-gradient !py-2'
                  : 'glass text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="card p-6 sm:p-8 grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {skills[active].map((skill) => (
          <SkillBar key={skill.name} {...skill} animate={animate} />
        ))}
      </div>
    </section>
  )
}
