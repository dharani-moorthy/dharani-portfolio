import { Trophy } from 'lucide-react'
import Reveal from './Reveal'
import { achievements } from '../data/resumeData'

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-5 py-24">
      <Reveal>
        <p className="section-eyebrow">Achievements</p>
        <h2 className="section-title">Milestones along the way</h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6 mt-8">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={0.08 * i}>
            <div className="card p-6 h-full">
              <Trophy className="text-accent mb-3" size={26} />
              <h3 className="font-display font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
