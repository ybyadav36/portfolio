'use client'
import { useEffect, useRef } from 'react'

const TAGS = ['Azure Databricks', 'PySpark', 'ADF', 'Python', 'SQL', 'GCP', 'Apache Airflow', 'Kafka', 'Docker','GenAI']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    for (let i = 0; i < 60; i++) {
      nodes.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      })
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,212,255,${0.12 * (1 - d / 150)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
        ctx.beginPath()
        ctx.arc(a.x, a.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,212,255,0.4)'
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <>
      <style>{`
        .hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden; padding: 6rem 2rem 4rem;
        }
        .hero-canvas {
          position: absolute; inset: 0; z-index: 0; opacity: 0.5;
        }
        .hero-glow {
          position: absolute; top: 20%; left: 50%; transform: translateX(-50%);
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .hero-content {
          position: relative; z-index: 1;
          text-align: center; max-width: 900px;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-mono); font-size: 0.72rem;
          color: var(--cyan); letter-spacing: 0.2em; text-transform: uppercase;
          border: 1px solid var(--border2); padding: 0.4rem 1rem;
          margin-bottom: 2rem; background: var(--cyan-dim);
          animation: fadeDown 0.6s ease both;
        }
        .hero-badge::before { content: '▸'; opacity: 0.7; }
        .hero-name {
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 800; line-height: 1;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #fff 0%, #c0c0e8 50%, var(--cyan) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeUp 0.7s 0.1s ease both;
        }
        .hero-title {
          font-family: var(--font-mono); font-size: clamp(0.9rem, 2vw, 1.1rem);
          color: var(--cyan); letter-spacing: 0.25em; text-transform: uppercase;
          margin: 1.2rem 0;
          animation: fadeUp 0.7s 0.2s ease both;
        }
        .hero-desc {
          color: var(--text2); font-size: 1.05rem; max-width: 580px;
          margin: 0 auto 2.5rem; line-height: 1.7;
          animation: fadeUp 0.7s 0.3s ease both;
        }
        .hero-tags {
          display: flex; flex-wrap: wrap; gap: 0.6rem;
          justify-content: center; margin-bottom: 3rem;
          animation: fadeUp 0.7s 0.4s ease both;
        }
        .hero-tag {
          font-family: var(--font-mono); font-size: 0.72rem;
          color: var(--text2); border: 1px solid var(--border);
          padding: 0.3rem 0.8rem; letter-spacing: 0.05em;
          transition: all 0.2s;
        }
        .hero-tag:hover { color: var(--cyan); border-color: var(--cyan); background: var(--cyan-dim); }
        .hero-btns {
          display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
          animation: fadeUp 0.7s 0.5s ease both;
        }
        .btn-primary {
          background: var(--cyan); color: var(--bg);
          font-family: var(--font-mono); font-size: 0.8rem;
          padding: 0.9rem 2rem; letter-spacing: 0.1em; font-weight: 700;
          border: none; cursor: pointer; transition: all 0.2s;
          text-transform: uppercase;
        }
        .btn-primary:hover { background: #fff; transform: translateY(-2px); }
        .btn-outline {
          background: transparent; color: var(--text);
          font-family: var(--font-mono); font-size: 0.8rem;
          padding: 0.9rem 2rem; letter-spacing: 0.1em;
          border: 1px solid var(--border2); cursor: pointer; transition: all 0.2s;
          text-transform: uppercase;
        }
        .btn-outline:hover { border-color: var(--text2); transform: translateY(-2px); }
        .hero-stats {
          position: relative; z-index: 1;
          display: flex; gap: 4rem; justify-content: center; margin-top: 5rem;
          border-top: 1px solid var(--border); padding-top: 3rem; width: 100%;
          animation: fadeUp 0.7s 0.6s ease both;
        }
        .stat { text-align: center; }
        .stat-num {
          font-size: 2.2rem; font-weight: 800;
          background: linear-gradient(135deg, var(--cyan), #fff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1;
        }
        .stat-label {
          font-family: var(--font-mono); font-size: 0.68rem;
          color: var(--text3); text-transform: uppercase; letter-spacing: 0.15em;
          margin-top: 0.4rem;
        }
        .scroll-hint {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          animation: bounce 2s infinite;
        }
        .scroll-hint span {
          font-family: var(--font-mono); font-size: 0.65rem;
          color: var(--text3); letter-spacing: 0.2em;
        }
        .scroll-arrow { color: var(--cyan); font-size: 1.2rem; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }
        @media (max-width: 600px) {
          .hero-stats { gap: 2rem; }
          .stat-num { font-size: 1.6rem; }
        }
      `}</style>

      <section className="hero" id="about">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-badge">Available for opportunities</div>
          <h1 className="hero-name">Brijesh Yadav</h1>
          <p className="hero-title">Senior Data Engineer</p>
          <p className="hero-desc">
            Building scalable data infrastructure at enterprise scale. 5 years transforming raw data into actionable intelligence across Azure &amp; GCP ecosystems.
          </p>
          <div className="hero-tags">
            {TAGS.map(t => <span className="hero-tag" key={t}>{t}</span>)}
          </div>
          <div className="hero-btns">
            <a className="btn-primary" href="#projects">View My Work</a>
            <a className="btn-outline" href="#contact">Get In Touch</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat"><div className="stat-num">5+</div><div className="stat-label">Years Exp.</div></div>
          <div className="stat"><div className="stat-num">1 TB</div><div className="stat-label">Daily Data</div></div>
          <div className="stat"><div className="stat-num">300+</div><div className="stat-label">Tables Migrated</div></div>
          <div className="stat"><div className="stat-num">99.9%</div><div className="stat-label">Data Accuracy</div></div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>
    </>
  )
}
