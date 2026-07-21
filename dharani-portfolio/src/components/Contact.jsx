import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/resumeData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to your backend, Formspree, EmailJS, or similar service.
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  const infoItems = [
    { icon: Mail, label: 'Email', value: profile.email, href: profile.socials.email },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.socials.linkedin },
    { icon: Github, label: 'GitHub', value: 'See my code', href: profile.socials.github },
  ]

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 py-24">
      <Reveal>
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let's build something together</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-xl">
          Open to entry-level Software Developer roles and collaborations. Reach out and I'll get back to you soon.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-8 mt-10">
        <Reveal className="lg:col-span-2 space-y-4" delay={0.05}>
          {infoItems.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="card p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shrink-0">
                  <Icon size={19} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
                  <p className="font-medium text-slate-800 dark:text-slate-100 break-all">{value}</p>
                </div>
              </div>
            )
            return href ? (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            )
          })}

          {/* Google Map placeholder — swap the src with a real embed URL for your location */}
          <div className="card overflow-hidden h-48">
            <iframe
              title="Location map placeholder"
              className="w-full h-full grayscale opacity-80 dark:opacity-60"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Ooty%2C%20Tamil%20Nadu%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={0.1}>
          <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-primary outline-none transition-colors resize-none"
                placeholder="Tell me about the opportunity or project…"
              />
            </div>
            <button type="submit" disabled={status === 'sending'} className="btn-gradient w-full sm:w-auto justify-center disabled:opacity-70">
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent ✓' : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
            <p className="text-xs text-slate-400" role="status" aria-live="polite">
              {status === 'sent' && 'Thanks — I\'ll reply as soon as I can.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
