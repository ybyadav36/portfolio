'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.3s ease;
          padding: 1.2rem 2rem;
        }
        .nav.scrolled {
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 0.8rem 2rem;
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .logo {
          font-family: var(--font-mono);
          font-size: 1rem; color: var(--cyan);
          letter-spacing: 0.05em;
        }
        .logo span { color: var(--text2); }
        .nav-links {
          display: flex; gap: 2rem; list-style: none;
        }
        .nav-links a {
          font-family: var(--font-mono); font-size: 0.78rem;
          color: var(--text2); letter-spacing: 0.1em; text-transform: uppercase;
          transition: color 0.2s; position: relative;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 1px; background: var(--cyan);
          transition: width 0.3s;
        }
        .nav-links a:hover { color: var(--cyan); }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta {
          font-family: var(--font-mono); font-size: 0.75rem;
          border: 1px solid var(--cyan); color: var(--cyan);
          padding: 0.5rem 1.2rem; letter-spacing: 0.1em;
          transition: all 0.2s; cursor: pointer; background: transparent;
        }
        .nav-cta:hover { background: var(--cyan-dim); }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; background: none; border: none; padding: 4px;
        }
        .hamburger span {
          display: block; width: 22px; height: 1.5px;
          background: var(--text); transition: all 0.3s;
        }
        .mobile-menu {
          display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: var(--bg); z-index: 99;
          flex-direction: column; align-items: center; justify-content: center; gap: 2rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-family: var(--font-mono); font-size: 1.4rem;
          color: var(--text2); text-transform: uppercase; letter-spacing: 0.15em;
        }
        .mobile-close {
          position: absolute; top: 1.5rem; right: 2rem;
          background: none; border: none; color: var(--text2);
          font-size: 1.5rem; cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="logo">BY<span>.dev</span></div>
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <a className="nav-cta" href="/Resume_Brijesh_Yadav.pdf" target="_blank">Resume ↗</a>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  )
}
