import { useEffect, useRef } from 'react'

const stats = [
  { value: '90%', label: 'Model Accuracy\n(Sign Language)' },
  { value: '60%', label: 'Manual Effort\nReduced' },
  { value: '1K+', label: 'Financial Records\nProcessed' },
  { value: '2025', label: 'Oracle OCI\nCertified' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-animate]').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`
            el.classList.add('animate-fade-up')
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 8rem)',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div data-animate style={{ opacity: 0, marginBottom: '4rem' }}>
          <SectionLabel>About</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-1px', marginTop: '0.5rem' }}>
            Who I Am
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div data-animate style={{ opacity: 0 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 2, marginBottom: '1.5rem' }}>
              I'm an AI & Data Science graduate from Datta Meghe College of Engineering (University of Mumbai), passionate about building intelligent systems that make real-world impact.
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 2, marginBottom: '1.5rem' }}>
              From automated finance dashboards to real-time sign language recognition, I build end-to-end AI-powered applications with Python, TensorFlow, Django, and modern web technologies.
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 2 }}>
              Oracle OCI Data Science certified. Experienced in REST APIs, computer vision, and data visualization with Tableau and Power BI.
            </p>
          </div>

          {/* Stats grid */}
          <div data-animate style={{ opacity: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', border: '1px solid var(--border)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '2rem', background: 'var(--bg-card)',
                borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-card-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.2rem', color: 'var(--accent)', marginBottom: '0.5rem', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.5px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{s.label}</div>
              </div>
            ))}
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
