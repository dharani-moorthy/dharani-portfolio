import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/resumeData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}. Built with React & Vite.
        </p>
        <div className="flex items-center gap-3">
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
              className="p-2 rounded-full glass hover:text-primary dark:hover:text-secondary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
