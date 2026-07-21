import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'
import { education } from '../data/resumeData'

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-5 py-24">
      <Reveal>
        <p className="section-eyebrow">Education</p>
        <h2 className="section-title">Academic timeline</h2>
      </Reveal>

      <div className="mt-10 relative pl-8 border-l-2 border-primary/20 dark:border-secondary/20 space-y-8">
        {education.map((edu, i) => (
          <Reveal key={`${edu.institution}-${edu.degree}`} delay={0.08 * i}>
            <div className="relative">
              <span className="absolute -left-[2.55rem] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white shadow-soft">
                <GraduationCap size={13} />
              </span>
              <div className="card p-6 flex flex-wrap justify-between gap-3">
                <div>
                  <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{edu.degree}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary-dark dark:bg-secondary/10 dark:text-secondary block mb-1.5">
                    {edu.period}
                  </span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{edu.detail}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
