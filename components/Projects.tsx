'use client'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    tag: 'Azure · Databricks · ADF',
    title: 'Oracle Cloud → Azure Medallion Migration',
    description:
      'End-to-end migration of 140+ Oracle Cloud source tables to Azure Data Lakehouse using Medallion architecture (Bronze → Silver → Gold) with Unity Catalog governance.',
    highlights: [
      'Reduced pipeline runtime from 10–12 hrs to 6–7 hrs',
      'Bronze load time cut from ~2 hrs to under 50 min',
      '25 metadata-driven ADF pipelines with parent–child orchestration',
      '200 Silver + 250–300 Gold tables with full lineage tracking',
    ],
    stack: ['Azure Databricks', 'ADF', 'Unity Catalog', 'PySpark', 'Delta Lake'],
    metrics: [{ label: 'Tables Migrated', val: '140+' }, { label: 'Runtime Cut', val: '40%' }, { label: 'Gold Tables', val: '300' }],
    color: '#00d4ff',
    github: 'https://github.com/ybyadav36',
  },
  {
    id: 2,
    tag: 'Azure · Telecom · Spark',
    title: 'Telecom Data Platform — BT Group',
    description:
      'Scalable data infrastructure supporting 5M+ subscribers, processing 1 TB of telecom data daily using Azure Synapse, Databricks, and ADF with strict quality gates.',
    highlights: [
      '25% improvement in data quality via analyst feedback loops',
      '30% query reduction via Apache Spark batch optimization',
      '99.9% data accuracy through QA processes',
      'Kubernetes deployments with Apache Airflow automation',
    ],
    stack: ['Azure Synapse', 'Databricks', 'PySpark', 'Airflow', 'Kubernetes', 'Docker'],
    metrics: [{ label: 'Daily Data', val: '1 TB' }, { label: 'Subscribers', val: '5M+' }, { label: 'Accuracy', val: '99.9%' }],
    color: '#ff6b35',
    github: 'https://github.com/ybyadav36',
  },
  {
    id: 3,
    tag: 'Power BI · Gold Layer · ADF',
    title: 'Enterprise BI Reporting Pipeline',
    description:
      'Designed and delivered Gold-layer curated datasets powering 70+ business reports including 50 Power BI dashboards and 20+ automated FTP/CSV exports to SharePoint.',
    highlights: [
      '70+ business reports delivered to stakeholders',
      '50 Power BI dashboards + 20 FTP/CSV SharePoint exports',
      'Optimized report queries designed with business users',
      'Fully automated data delivery workflows',
    ],
    stack: ['Power BI', 'ADF', 'Azure Databricks', 'SQL', 'SharePoint'],
    metrics: [{ label: 'Dashboards', val: '50+' }, { label: 'Reports', val: '70+' }, { label: 'Exports', val: '20+' }],
    color: '#00ff88',
    github: 'https://github.com/ybyadav36',
  },
  {
    id: 4,
    tag: 'ADF · Metadata · Automation',
    title: 'Metadata-Driven ETL Framework',
    description:
      'Built a reusable metadata-driven ADF pipeline framework with parent–child orchestration pattern, enabling automated data extraction, transformation, and loading across all Medallion layers.',
    highlights: [
      'Parameterized config tables drive all pipeline behavior',
      'Parent pipeline dynamically invokes child pipelines',
      'Supports incremental and full-load strategies',
      'Reusable across multiple source systems',
    ],
    stack: ['Azure Data Factory', 'SQL Metadata Store', 'Azure Key Vault', 'Delta Lake'],
    metrics: [{ label: 'Pipelines', val: '25' }, { label: 'Layers', val: '3' }, { label: 'Sources', val: '140+' }],
    color: '#a78bfa',
    github: 'https://github.com/ybyadav36',
  },
]

export default function Projects() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      <style>{`
        .projects { padding: 7rem 2rem; background: var(--bg); }
        .projects-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem; margin-top: 3rem;
        }
        .proj-card {
          background: var(--surface); border: 1px solid var(--border);
          padding: 2rem; cursor: pointer;
          transition: border-color 0.3s, transform 0.2s, box-shadow 0.3s;
          position: relative; overflow: hidden;
        }
        .proj-card::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--proj-color, var(--cyan)), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .proj-card:hover { border-color: var(--proj-color, var(--cyan)); transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .proj-card.expanded { border-color: var(--proj-color, var(--cyan)); }
        .proj-tag {
          font-family: var(--font-mono); font-size: 0.65rem;
          color: var(--proj-color, var(--cyan)); letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 0.8rem;
        }
        .proj-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.8rem; line-height: 1.3; }
        .proj-desc { font-size: 0.88rem; color: var(--text2); line-height: 1.6; margin-bottom: 1.2rem; }
        .proj-metrics { display: flex; gap: 1.5rem; margin-bottom: 1.2rem; }
        .proj-metric { text-align: center; }
        .proj-metric-val {
          font-family: var(--font-mono); font-size: 1.1rem; font-weight: 700;
          color: var(--proj-color, var(--cyan));
        }
        .proj-metric-label { font-family: var(--font-mono); font-size: 0.6rem; color: var(--text3); text-transform: uppercase; letter-spacing: 0.1em; }
        .proj-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.2rem; }
        .proj-tech {
          font-family: var(--font-mono); font-size: 0.65rem;
          color: var(--text3); border: 1px solid var(--border);
          padding: 0.2rem 0.5rem;
        }
        .proj-highlights { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border); }
        .proj-highlight-item {
          font-size: 0.82rem; color: var(--text2); padding: 0.3rem 0;
          display: flex; align-items: flex-start; gap: 0.5rem; line-height: 1.4;
        }
        .proj-highlight-item::before { content: '▸'; color: var(--proj-color, var(--cyan)); flex-shrink: 0; margin-top: 1px; }
        .proj-expand { 
          font-family: var(--font-mono); font-size: 0.7rem;
          color: var(--text3); margin-top: 0.8rem; display: flex; align-items: center; gap: 0.4rem;
          transition: color 0.2s;
        }
        .proj-card:hover .proj-expand { color: var(--proj-color, var(--cyan)); }
        .proj-links { display: flex; gap: 1rem; margin-top: 1.2rem; }
        .proj-link {
          font-family: var(--font-mono); font-size: 0.72rem;
          color: var(--text2); border: 1px solid var(--border);
          padding: 0.4rem 0.9rem; transition: all 0.2s;
        }
        .proj-link:hover { color: var(--proj-color, var(--cyan)); border-color: var(--proj-color, var(--cyan)); }
      `}</style>

      <section className="projects" id="projects">
        <div className="section-inner">
          <p className="section-label">// portfolio</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-sub">Real-world data engineering problems solved at enterprise scale. Click any card to expand details.</p>
          <div className="projects-grid">
            {projects.map(p => {
              const isExpanded = active === p.id
              return (
                <div
                  key={p.id}
                  className={`proj-card ${isExpanded ? 'expanded' : ''}`}
                  style={{ '--proj-color': p.color } as React.CSSProperties}
                  onClick={() => setActive(isExpanded ? null : p.id)}
                >
                  <p className="proj-tag">{p.tag}</p>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.description}</p>
                  <div className="proj-metrics">
                    {p.metrics.map(m => (
                      <div className="proj-metric" key={m.label}>
                        <div className="proj-metric-val">{m.val}</div>
                        <div className="proj-metric-label">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="proj-stack">
                    {p.stack.map(t => <span className="proj-tech" key={t}>{t}</span>)}
                  </div>
                  {isExpanded && (
                    <>
                      <div className="proj-highlights">
                        {p.highlights.map(h => (
                          <div className="proj-highlight-item" key={h}>{h}</div>
                        ))}
                      </div>
                      <div className="proj-links">
                        <a className="proj-link" href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                        <a className="proj-link" href="#contact">Discuss →</a>
                      </div>
                    </>
                  )}
                  <div className="proj-expand">{isExpanded ? '▴ Less' : '▾ Details'}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
