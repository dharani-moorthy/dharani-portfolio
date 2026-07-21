import { Award } from 'lucide-react'
import Reveal from './Reveal'
import { certifications } from '../data/resumeData'

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-5 py-24">
      <Reveal>
        <p className="section-eyebrow">Certifications</p>
        <h2 className="section-title">Credentials & training</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={0.08 * i}>
            <div className="card p-6 h-full flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white mb-4">
                <Award size={22} />
              </div>
              <h3 className="font-display font-semibold text-slate-900 dark:text-white leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">{cert.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
