const jobs = [
  {
    period: 'Jan 2025 — Present',
    role: 'Senior Data Engineer',
    company: 'PwC India',
    location: 'Gurgaon, India',
    color: '#00d4ff',
    bullets: [
      'Led migration of 300+ Oracle Cloud tables to Azure Data Lakehouse with Medallion architecture (Bronze/Silver/Gold) in Databricks + Unity Catalog',
      'Designed 25 metadata-driven ADF pipelines with parent–child orchestration, cutting total runtime from 10–12 hrs to 6–7 hrs',
      'Built and maintained ~200 Silver and ~250–300 Gold tables with full data quality, lineage tracking, and analytics readiness',
      'Delivered 70+ business reports (50 Power BI dashboards + 20 FTP/CSV exports) by providing curated Gold-layer datasets',
      'Partnered with business users to design optimized report queries, improving data delivery accuracy across workflows',
    ],
  },
  {
    period: 'Jan 2021 — Jan 2025',
    role: 'Associate Data Engineer',
    company: 'BT Group',
    location: 'Gurgaon, India',
    color: '#ff6b35',
    bullets: [
      'Built ETL pipelines with Azure Data Factory, Databricks, PySpark, and SQL processing 1 TB of telecom data daily',
      'Improved data quality by 25% and reduced processing errors by 15% through validation and cleansing refinements',
      'Built scalable Azure Synapse infrastructure supporting data requirements for 5M+ subscribers',
      'Achieved 30% query time reduction by optimizing Apache Spark batch processing on Azure Databricks',
      'Executed Kubernetes deployments with Apache Airflow, reducing deployment times by 40% through automation',
      'Achieved 99.9% data accuracy through quality assurance processes, enhancing decision-making speed by 25%',
    ],
  },
]

export default function Experience() {
  return (
    <>
      <style>{`
        .experience { padding: 7rem 2rem; background: var(--bg2); }
        .timeline { margin-top: 3rem; position: relative; }
        .timeline::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 1px; background: var(--border);
        }
        .job { padding-left: 2.5rem; position: relative; margin-bottom: 4rem; }
        .job:last-child { margin-bottom: 0; }
        .job-dot {
          position: absolute; left: -6px; top: 6px;
          width: 13px; height: 13px; border-radius: 50%;
          background: var(--job-color, var(--cyan));
          box-shadow: 0 0 12px var(--job-color, var(--cyan));
        }
        .job-period {
          font-family: var(--font-mono); font-size: 0.7rem;
          color: var(--text3); letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 0.5rem;
        }
        .job-header { display: flex; align-items: baseline; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.3rem; }
        .job-role { font-size: 1.25rem; font-weight: 700; }
        .job-at { color: var(--text3); font-family: var(--font-mono); font-size: 0.75rem; }
        .job-company { color: var(--job-color, var(--cyan)); font-weight: 600; }
        .job-loc { font-family: var(--font-mono); font-size: 0.68rem; color: var(--text3); margin-bottom: 1.2rem; }
        .job-bullets { display: flex; flex-direction: column; gap: 0.5rem; }
        .job-bullet {
          font-size: 0.9rem; color: var(--text2); line-height: 1.55;
          display: flex; align-items: flex-start; gap: 0.6rem;
        }
        .job-bullet::before { content: '▸'; color: var(--job-color, var(--cyan)); flex-shrink: 0; margin-top: 2px; }
        .edu-block {
          margin-top: 4rem; padding: 2rem;
          background: var(--surface); border: 1px solid var(--border);
          border-left: 3px solid var(--cyan);
          display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;
        }
        .edu-icon { font-size: 2.5rem; }
        .edu-degree { font-size: 1rem; font-weight: 700; margin-bottom: 0.3rem; }
        .edu-school { color: var(--cyan); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.2rem; }
        .edu-meta { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text3); }
        .cert-badge {
          margin-left: auto; display: inline-flex; align-items: center; gap: 0.6rem;
          border: 1px solid var(--border2); padding: 0.6rem 1.2rem;
          background: var(--surface2);
        }
        .cert-icon { color: #fbbf24; font-size: 1.1rem; }
        .cert-text { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text2); }
      `}</style>

      <section className="experience" id="experience">
        <div className="section-inner">
          <p className="section-label">// career</p>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-sub">Building data systems that power real business decisions at enterprise scale.</p>

          <div className="timeline">
            {jobs.map(j => (
              <div className="job" key={j.company} style={{ '--job-color': j.color } as React.CSSProperties}>
                <div className="job-dot" />
                <p className="job-period">{j.period}</p>
                <div className="job-header">
                  <span className="job-role">{j.role}</span>
                  <span className="job-at">@</span>
                  <span className="job-company">{j.company}</span>
                </div>
                <p className="job-loc">📍 {j.location}</p>
                <div className="job-bullets">
                  {j.bullets.map((b, i) => <div className="job-bullet" key={i}>{b}</div>)}
                </div>
              </div>
            ))}
          </div>

          <div className="edu-block">
            <div className="edu-icon">🎓</div>
            <div>
              <p className="edu-degree">B.Tech — Computer Science & Engineering</p>
              <p className="edu-school">Inderprastha Engineering College</p>
              <p className="edu-meta">Aug 2016 – Oct 2020 &nbsp;·&nbsp; Ghaziabad, India</p>
            </div>
            <div className="cert-badge">
              <span className="cert-icon">🏅</span>
              <span className="cert-text">Fabric Data Engineer Associate<br/>Professional Certificate</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
