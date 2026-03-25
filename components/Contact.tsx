'use client'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      // Replace YOUR_FORM_ID below with your Formspree form ID
      // Get one free at https://formspree.io
      const res = await fetch('https://formspree.io/f/xeepqqen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <style>{`
        .contact { padding: 7rem 2rem; background: var(--bg); }
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.3fr; gap: 5rem;
          margin-top: 3rem; align-items: start;
        }
        .contact-info h3 {
          font-size: 1.4rem; font-weight: 700; margin-bottom: 1rem;
        }
        .contact-info p {
          color: var(--text2); line-height: 1.7; margin-bottom: 2rem; font-size: 0.95rem;
        }
        .contact-items { display: flex; flex-direction: column; gap: 1.2rem; }
        .contact-item {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem 1.2rem; background: var(--surface); border: 1px solid var(--border);
          transition: border-color 0.2s;
        }
        .contact-item:hover { border-color: var(--border2); }
        .contact-item-icon { font-size: 1.1rem; width: 1.5rem; text-align: center; }
        .contact-item-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text3); text-transform: uppercase; }
        .contact-item-val { font-size: 0.9rem; color: var(--text); }
        .contact-socials { display: flex; gap: 0.8rem; margin-top: 2rem; }
        .social-btn {
          font-family: var(--font-mono); font-size: 0.7rem;
          color: var(--text2); border: 1px solid var(--border);
          padding: 0.6rem 1rem; letter-spacing: 0.08em;
          transition: all 0.2s; text-transform: uppercase;
        }
        .social-btn:hover { color: var(--cyan); border-color: var(--cyan); background: var(--cyan-dim); }
        .contact-form { display: flex; flex-direction: column; gap: 1.2rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
        .form-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .form-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text3); text-transform: uppercase; letter-spacing: 0.1em; }
        .form-input, .form-textarea {
          background: var(--surface); border: 1px solid var(--border);
          color: var(--text); font-family: var(--font-mono); font-size: 0.85rem;
          padding: 0.85rem 1rem; outline: none; width: 100%;
          transition: border-color 0.2s; resize: none;
        }
        .form-input:focus, .form-textarea:focus { border-color: var(--cyan); }
        .form-input::placeholder, .form-textarea::placeholder { color: var(--text3); }
        .form-textarea { height: 140px; }
        .form-btn {
          background: var(--cyan); color: var(--bg);
          font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700;
          padding: 1rem 2rem; border: none; cursor: pointer;
          letter-spacing: 0.12em; text-transform: uppercase;
          transition: all 0.2s; align-self: flex-start;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .form-btn:hover:not(:disabled) { background: #fff; transform: translateY(-2px); }
        .form-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .form-status {
          font-family: var(--font-mono); font-size: 0.78rem;
          padding: 0.8rem 1rem; border: 1px solid;
        }
        .form-status.success { color: var(--green); border-color: var(--green); background: rgba(0,255,136,0.06); }
        .form-status.error { color: var(--orange); border-color: var(--orange); background: rgba(255,107,53,0.06); }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="contact" id="contact">
        <div className="section-inner">
          <p className="section-label">// let's talk</p>
          <h2 className="section-title">Get In <span>Touch</span></h2>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Open to opportunities</h3>
              <p>
                Whether you're looking for a data engineer to build your next pipeline architecture, migrate to the cloud, or optimise existing workflows — I'd love to connect.
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-item-icon">📧</span>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-val">ybyadav36@gmail.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">📱</span>
                  <div>
                    <div className="contact-item-label">Phone</div>
                    <div className="contact-item-val">+91 98898 86272</div>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">📍</span>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-val">Gurgaon, India</div>
                  </div>
                </div>
              </div>
              <div className="contact-socials">
                <a className="social-btn" href="https://www.linkedin.com/in/brijeshyadav-a1b04113b" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="social-btn" href="https://github.com/ybyadav36" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input id="name" name="name" className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" className="form-input" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-textarea" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} required />
              </div>

              {status === 'success' && <div className="form-status success">✓ Message sent! I'll get back to you soon.</div>}
              {status === 'error' && <div className="form-status error">✗ Something went wrong. Please email me directly.</div>}

              <button type="submit" className="form-btn" disabled={status === 'loading'}>
                {status === 'loading' ? '⟳ Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
