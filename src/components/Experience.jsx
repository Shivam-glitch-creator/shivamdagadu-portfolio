import { ExternalLink } from 'lucide-react'

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'E-InnoSec Consulting LLP',
    period: 'Oct 2025 – Jan 2026',
    location: 'Thane',
    points: [
      'Developed and maintained backend modules using Python to support GRC (Governance, Risk & Compliance) systems.',
      'Automated data processing and workflow tasks, improving system efficiency and reducing manual intervention.',
      'Designed and integrated RESTful APIs for backend services and web-based applications.',
      'Debugged and enhanced existing systems to improve application reliability, performance, and scalability.',
    ],
    letter: '/Releivinig Letter- Shivam Dagadu.pdf'
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 8rem)',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>Experience</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-1px', marginBottom: '4rem', marginTop: '0.5rem' }}>
          Work History
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />

          {experiences.map((exp, i) => (
            <div key={i} style={{ paddingLeft: '3rem', position: 'relative', marginBottom: '3rem' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-5px', top: '6px',
                width: '11px', height: '11px',
                border: '2px solid var(--accent)', borderRadius: '50%',
                background: 'var(--bg)',
                boxShadow: '0 0 12px var(--accent-glow)',
              }} />

              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                padding: '2rem 2.5rem',
                transition: 'border-color 0.2s, background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-bright)'; e.currentTarget.style.background = 'var(--bg-card-hover)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-card)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent)' }}>{exp.company}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)', marginLeft: '1rem' }}>{exp.location}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)', padding: '4px 12px', border: '1px solid var(--border)', height: 'fit-content' }}>{exp.period}</span>
                </div>

                {exp.letter && (
                  <div style={{ marginBottom: '1rem' }}>
                    <a 
                      href={exp.letter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        padding: '6px 12px',
                        border: '1px solid var(--accent)',
                        background: 'rgba(99,179,237,0.05)',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#050810' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,179,237,0.05)'; e.currentTarget.style.color = 'var(--accent)' }}
                    >
                      <ExternalLink size={12} />
                      View Relieving Letter
                    </a>
                  </div>
                )}

                <ul style={{ listStyle: 'none', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>▹</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
      <span style={{ width: '20px', height: '1px', background: 'var(--accent)' }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '3px', textTransform: 'uppercase' }}>{children}</span>
    </div>
  )
}
