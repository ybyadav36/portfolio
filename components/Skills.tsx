'use client'

const skillGroups = [
  {
    icon: '⚡',
    title: 'Languages',
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 95 },
      { name: 'PySpark', level: 88 },
      { name: 'Bash/Shell', level: 72 },
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & Storage',
    color: '#ff6b35',
    skills: [
      { name: 'Azure Data Lake', level: 93 },
      { name: 'Azure Synapse', level: 88 },
      { name: 'GCP BigQuery', level: 78 },
      { name: 'Azure Event Hubs', level: 80 },
    ],
  },
  {
    icon: '🔄',
    title: 'ETL & Orchestration',
    color: '#00ff88',
    skills: [
      { name: 'Azure Data Factory', level: 95 },
      { name: 'Azure Databricks', level: 92 },
      { name: 'Apache Airflow', level: 83 },
      { name: 'Apache Kafka', level: 78 },
    ],
  },
  {
    icon: '🐳',
    title: 'DevOps & Infra',
    color: '#a78bfa',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 74 },
      { name: 'Apache Spark', level: 87 },
      { name: 'Git / CI-CD', level: 82 },
    ],
  },
]

export default function Skills() {
  return (
    <>
      <style>{`
        .skills { padding: 7rem 2rem; background: var(--bg2); }
        .section-inner { max-width: 1200px; margin: 0 auto; }
        .section-label {
          font-family: var(--font-mono); font-size: 0.7rem;
          color: var(--cyan); letter-spacing: 0.25em; text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
          letter-spacing: -0.02em; margin-bottom: 1rem;
        }
        .section-title span { color: var(--cyan); }
        .section-sub {
          color: var(--text2); max-width: 520px; margin-bottom: 4rem;
          font-size: 1rem; line-height: 1.6;
        }
        .skills-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .skill-card {
          background: var(--surface); border: 1px solid var(--border);
          padding: 2rem; position: relative; overflow: hidden;
          transition: border-color 0.3s, transform 0.2s;
        }
        .skill-card:hover { border-color: var(--border2); transform: translateY(-4px); }
        .skill-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 3px; height: 100%; background: var(--card-color, var(--cyan));
        }
        .skill-icon { font-size: 1.6rem; margin-bottom: 1rem; }
        .skill-group-title {
          font-size: 0.85rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; margin-bottom: 1.5rem;
          color: var(--card-color, var(--cyan));
        }
        .skill-bars { display: flex; flex-direction: column; gap: 0.9rem; }
        .skill-row { display: flex; flex-direction: column; gap: 0.3rem; }
        .skill-meta { display: flex; justify-content: space-between; align-items: center; }
        .skill-name { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text2); }
        .skill-pct { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text3); }
        .skill-bar-bg {
          height: 3px; background: var(--border); border-radius: 2px; overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%; border-radius: 2px;
          background: var(--card-color, var(--cyan));
          transition: width 1.2s cubic-bezier(0.16,1,0.3,1);
          position: relative;
        }
        .skill-bar-fill::after {
          content: ''; position: absolute; right: 0; top: -1px;
          width: 6px; height: 5px; border-radius: 50%;
          background: var(--card-color, var(--cyan));
          box-shadow: 0 0 8px var(--card-color, var(--cyan));
        }
      `}</style>
      <section className="skills" id="skills">
        <div className="section-inner">
          <p className="section-label">// expertise</p>
          <h2 className="section-title">Technical <span>Stack</span></h2>
          <p className="section-sub">
            5 years building enterprise-grade data solutions across Azure, GCP, and on-premise environments.
          </p>
          <div className="skills-grid">
            {skillGroups.map(g => (
              <div className="skill-card" key={g.title} style={{ '--card-color': g.color } as React.CSSProperties}>
                <div className="skill-icon">{g.icon}</div>
                <div className="skill-group-title">{g.title}</div>
                <div className="skill-bars">
                  {g.skills.map(s => (
                    <div className="skill-row" key={s.name}>
                      <div className="skill-meta">
                        <span className="skill-name">{s.name}</span>
                        <span className="skill-pct">{s.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
