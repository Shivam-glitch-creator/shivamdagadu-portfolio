const education = [
  {
    degree: 'B.E. in Artificial Intelligence and Data Science',
    institution: 'Datta Meghe College Of Engineering',
    university: 'University of Mumbai',
    location: 'Airoli, Navi Mumbai',
    period: '2021 – 2025',
    details: 'CGPI: 7.09 | First Class',
    accentColor: 'var(--accent)',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Maharashtra State Board',
    university: 'Mumbai Divisional Board',
    location: 'Mumbai',
    period: '2021',
    details: 'Percentage: 79.67% | First Class with Distinction',
    accentColor: 'var(--accent2)',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Maharashtra State Board',
    university: 'Mumbai Divisional Board',
    location: 'Mumbai',
    period: '2019',
    details: 'Percentage: 56.60%',
    accentColor: 'var(--accent)',
  },
]

export default function Education() {
  return (
    <section id="education" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 8rem)',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>Education</SectionLabel>
        <h2 style={{ 
          fontFamily: 'var(--font-display)', 
          fontWeight: 800, 
          fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
          letterSpacing: '-1px', 
          marginBottom: '4rem', 
          marginTop: '0.5rem' 
        }}>
          Academic Path
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{ 
            position: 'absolute', 
            left: 0, 
            top: 0, 
            bottom: 0, 
            width: '1px', 
            background: 'linear-gradient(to bottom, var(--accent), transparent)' 
          }} />

          {education.map((edu, i) => (
            <div key={i} style={{ paddingLeft: '3rem', position: 'relative', marginBottom: '3rem' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-5px', top: '6px',
                width: '11px', height: '11px',
                border: `2px solid ${edu.accentColor}`, borderRadius: '50%',
                background: 'var(--bg)',
                boxShadow: `0 0 12px ${edu.accentColor === 'var(--accent)' ? 'var(--accent-glow)' : 'rgba(246, 173, 85, 0.25)'}`,
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
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.25rem' }}>{edu.degree}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: edu.accentColor }}>{edu.institution}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)', marginLeft: '1rem' }}>{edu.university} · {edu.location}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)', padding: '4px 12px', border: '1px solid var(--border)', height: 'fit-content' }}>{edu.period}</span>
                </div>

                <div style={{ marginTop: '1rem' }}>
                   <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                     <span style={{ color: edu.accentColor, marginRight: '8px' }}>▹</span>
                     {edu.details}
                   </p>
                </div>
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
