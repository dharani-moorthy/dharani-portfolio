import { Github, ExternalLink, FolderKanban } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data/resumeData'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 py-24">
      <Reveal>
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Things I've built</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.08 * i}>
            <article className="card overflow-hidden h-full flex flex-col group">
              <div className="h-44 relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <FolderKanban className="text-primary/50 dark:text-secondary/50" size={48} />
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary-dark dark:bg-secondary/10 dark:text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-500 dark:text-slate-400">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-accent">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline !py-2 !px-4 text-sm flex-1 justify-center">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-gradient !py-2 !px-4 text-sm flex-1 justify-center">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
