export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          padding: 2.5rem 2rem;
          background: var(--bg2); border-top: 1px solid var(--border);
        }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
        }
        .footer-brand { font-family: var(--font-mono); font-size: 0.85rem; color: var(--cyan); }
        .footer-copy { font-family: var(--font-mono); font-size: 0.68rem; color: var(--text3); }
        .footer-links { display: flex; gap: 1.5rem; }
        .footer-links a {
          font-family: var(--font-mono); font-size: 0.68rem;
          color: var(--text3); text-transform: uppercase; letter-spacing: 0.1em;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--cyan); }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">BY.dev</div>
          <p className="footer-copy">© {new Date().getFullYear()} Brijesh Yadav · Built with Next.js</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/brijeshyadav-a1b04113b" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/ybyadav36" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:ybyadav36@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}
