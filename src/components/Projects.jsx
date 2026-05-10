const projects = [
  {
    number: '01',
    title: 'Optimum Finance',
    subtitle: 'Full-Stack AI Project',
    description: 'A full-stack AI-powered personal finance management system to monitor income, expenses, and savings, processing 1,000+ financial records in test scenarios.',
    highlights: [
      'Gemini AI chatbot for automated expense categorization',
      '~50% improvement in financial analysis efficiency',
      'Django backend with SQL for secure transaction management',
      '~60% reduction in manual report generation time',
      'Published in IJEAST journal',
    ],
    tags: ['Django', 'Python', 'Gemini AI', 'SQL', 'React'],
    accent: 'var(--accent)',
  },
  {
    number: '02',
    title: 'Sign Language Recognition',
    subtitle: 'AI / Computer Vision Project',
    description: 'Real-time sign-to-text recognition system using computer vision and deep learning to process live video streams for accessibility-focused use cases.',
    highlights: [
      'MediaPipe for accurate hand landmark detection',
      'OpenCV for video frame processing',
      '~90% accuracy across tested gesture classes',
      'Low-latency inference pipeline for near-instant conversion',
      'End-to-end ML pipeline from training to deployment',
    ],
    tags: ['TensorFlow', 'OpenCV', 'MediaPipe', 'Python', 'Deep Learning'],
    accent: 'var(--accent2)',
  },
  {
    number: '03',
    title: 'Time Table Generator',
    subtitle: 'Automated Scheduling System',
    description: 'Developed an automated timetable generation system to efficiently schedule classes while considering constraints like faculty availability, room allocation, and course distribution.',
    highlights: [
      'Automated scheduling using Genetic Algorithm',
      'Backend API with Django',
      'Database management using MySQL',
      'Conflict resolution for overlapping schedules',
    ],
    tags: ['Python', 'Django', 'JavaScript', 'React', 'MySQL'],
    accent: 'var(--accent)',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 8rem)',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>Projects</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-1px', marginBottom: '4rem', marginTop: '0.5rem' }}>
          Featured Work
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      border: '1px solid var(--border)', background: 'var(--bg-card)',
      transition: 'border-color 0.2s, background 0.2s',
      position: 'relative', overflow: 'hidden',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = p.accent === 'var(--accent)' ? 'rgba(99,179,237,0.4)' : 'rgba(246,173,85,0.4)'; e.currentTarget.style.background = 'var(--bg-card-hover)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-card)' }}
    >
      {/* Number accent */}
      <div style={{
        position: 'absolute', top: '1.5rem', right: '2rem',
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: '5rem', color: 'rgba(255,255,255,0.03)',
        lineHeight: 1, userSelect: 'none',
      }}>{p.number}</div>

      {/* Left */}
      <div style={{ padding: '2.5rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: p.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{p.subtitle}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.5px', marginBottom: '1rem' }}>{p.title}</h3>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{p.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {p.tags.map(t => (
            <span key={t} style={{
              padding: '3px 10px', fontFamily: 'var(--font-mono)', fontSize: '11px',
              color: p.accent, border: `1px solid ${p.accent === 'var(--accent)' ? 'rgba(99,179,237,0.3)' : 'rgba(246,173,85,0.3)'}`,
              background: p.accent === 'var(--accent)' ? 'rgba(99,179,237,0.05)' : 'rgba(246,173,85,0.05)',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Right: highlights */}
      <div style={{ padding: '2.5rem', borderLeft: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.2rem' }}>Highlights</div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {p.highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ color: p.accent, fontSize: '10px', marginTop: '4px', flexShrink: 0 }}>◆</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
