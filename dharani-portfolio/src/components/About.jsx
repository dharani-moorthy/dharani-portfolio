import { Cpu, Code, Coffee, Puzzle, Users, Lightbulb } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/resumeData'

const ICONS = {
  'Robotics & Automation': Cpu,
  'Web Development': Code,
  'Java Development': Coffee,
  'Problem Solving': Puzzle,
  Teamwork: Users,
  Innovation: Lightbulb,
}

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 py-24">
      <Reveal>
        <p className="section-eyebrow">About Me</p>
        <h2 className="section-title">Where hardware thinking meets clean code</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-start mt-8">
        <Reveal delay={0.05}>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="px-3 py-1.5 rounded-full glass">📍 {profile.location}</span>
            <span className="px-3 py-1.5 rounded-full glass">🎓 CGPA 8.5 / 10</span>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {profile.highlights.map((item, i) => {
            const Icon = ICONS[item.label] ?? Lightbulb
            return (
              <Reveal key={item.label} delay={0.05 * i}>
                <div className="card p-5 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                    {item.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
