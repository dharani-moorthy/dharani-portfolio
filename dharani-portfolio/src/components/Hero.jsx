import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowRight, Code2, Cpu, Database } from 'lucide-react'
import { profile } from '../data/resumeData'

function useTypewriter(words, { typingSpeed = 90, deletingSpeed = 45, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index % words.length]

    if (!deleting && subIndex === currentWord.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return words[index % words.length].slice(0, subIndex)
}

export default function Hero() {
  const typed = useTypewriter(profile.titles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden circuit-bg pt-28 pb-16"
    >
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      {/* Floating tech icons */}
      <Cpu className="hidden md:block absolute top-32 left-[8%] text-primary/30 animate-float" size={40} style={{ animationDelay: '0s' }} />
      <Code2 className="hidden md:block absolute top-1/2 right-[6%] text-accent/30 animate-float" size={36} style={{ animationDelay: '1.2s' }} />
      <Database className="hidden md:block absolute bottom-24 left-[20%] text-secondary/30 animate-float" size={32} style={{ animationDelay: '2.4s' }} />

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-eyebrow mb-4">Welcome to my portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900 dark:text-white">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-display font-medium text-slate-600 dark:text-slate-300 h-9">
            <span className="typing-cursor">{typed}</span>
          </p>
          <p className="mt-6 max-w-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {profile.summary.slice(0, 195)}…
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={profile.resumeFile} download className="btn-gradient">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { icon: Github, href: profile.socials.github, label: 'GitHub' },
              { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: profile.socials.email, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="p-3 rounded-full glass hover:text-primary dark:hover:text-secondary hover:-translate-y-1 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-[2.5rem] blur-2xl opacity-30 animate-gradient" />
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] card flex items-center justify-center overflow-hidden">
            {/* Replace this placeholder with an <img src="/profile.jpg" ... /> once you add a real photo to /public */}
            <span className="font-display text-7xl font-bold gradient-text select-none">DM</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
