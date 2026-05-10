const skillGroups = [
  {
    category: 'Data & ML',
    items: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'OpenCV', 'MediaPipe'],
  },
  {
    category: 'Backend',
    items: ['Django', 'REST APIs', 'SQL', 'Docker', 'Python'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    category: 'Visualization',
    items: ['Tableau', 'Power BI', 'EDA'],
  },
  {
    category: 'Tools & AI',
    items: ['GitHub', 'Docker', 'ChatGPT', 'Claude', 'Cursor', 'Codex'],
  },
]

const proficiency = [
  { skill: 'Python', level: 92 },
  { skill: 'Machine Learning', level: 88 },
  { skill: 'Django / REST APIs', level: 82 },
  { skill: 'TensorFlow / Deep Learning', level: 85 },
  { skill: 'SQL & Databases', level: 78 },
  { skill: 'Data Visualization', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 8rem)',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>Skills</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-1px', marginBottom: '4rem', marginTop: '0.5rem' }}>
          Tech Stack
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {/* Tag cloud */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>Technologies</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {skillGroups.map(g => (
                <div key={g.category}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '1.5px', marginBottom: '0.8rem', textTransform: 'uppercase' }}>{g.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {g.items.map(item => (
                      <span key={item} style={{
                        padding: '4px 12px', border: '1px solid var(--border)',
                        fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)',
                        transition: 'all 0.2s', cursor: 'default',
                      }}
                        onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; e.target.style.background = 'rgba(99,179,237,0.05)' }}
                        onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-muted)'; e.target.style.background = 'transparent' }}
                      >{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proficiency bars */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>Proficiency</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {proficiency.map(p => (
                <div key={p.skill}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>{p.skill}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)' }}>{p.level}%</span>
                  </div>
                  <div style={{ height: '2px', background: 'var(--border)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${p.level}%`,
                      background: 'linear-gradient(90deg, var(--accent), #90cdf4)',
                      transition: 'width 1.2s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
