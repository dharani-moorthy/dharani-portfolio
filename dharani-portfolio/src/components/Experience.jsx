import { Briefcase } from 'lucide-react'
import Reveal from './Reveal'
import { experience } from '../data/resumeData'

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 py-24">
      <Reveal>
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Where I've applied what I know</h2>
      </Reveal>

      <div className="mt-10 relative pl-8 border-l-2 border-primary/20 dark:border-secondary/20 space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={0.1 * i}>
            <div className="relative">
              <span className="absolute -left-[2.55rem] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-soft">
                <Briefcase size={13} />
              </span>
              <div className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary-dark dark:text-secondary">
                    {job.period || job.duration}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {job.org} · {job.duration}
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary dark:text-secondary mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
