import { useEffect, useRef } from 'react'

const words = ['Machine Learning', 'Backend Development', 'Computer Vision', 'Data Science', 'AI Applications']

export default function Hero() {
  const wordRef = useRef(null)
  const idxRef = useRef(0)

  useEffect(() => {
    const el = wordRef.current
    if (!el) return
    let charIdx = 0
    let deleting = false
    let current = words[0]

    const type = () => {
      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) {
          deleting = true
          setTimeout(type, 1800)
          return
        }
        setTimeout(type, 70)
      } else {
        el.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          idxRef.current = (idxRef.current + 1) % words.length
          current = words[idxRef.current]
          setTimeout(type, 300)
          return
        }
        setTimeout(type, 40)
      }
    }
    const t = setTimeout(type, 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 clamp(1.5rem, 6vw, 8rem)',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '900px' }}>
        {/* Tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          marginBottom: '2rem',
          animation: 'fadeUp 0.6s ease 0.2s both',
        }}>
          <span style={{ width: '28px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            AI & Data Science Engineer
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', lineHeight: 1.0,
          letterSpacing: '-2px', marginBottom: '1.5rem',
          animation: 'fadeUp 0.6s ease 0.35s both',
        }}>
          <span style={{ color: 'var(--text)' }}>Shivam</span><br />
          <span style={{
            WebkitTextStroke: '1.5px var(--accent)', color: 'transparent',
          }}>Dagadu</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'var(--text-muted)', marginBottom: '2.5rem',
          display: 'flex', alignItems: 'center', gap: '8px',
          animation: 'fadeUp 0.6s ease 0.5s both',
        }}>
          <span>→</span>
          <span ref={wordRef} style={{ color: 'var(--accent2)' }} />
          <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>|</span>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
          color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.8,
          marginBottom: '3rem',
          animation: 'fadeUp 0.6s ease 0.65s both',
        }}>
          Building predictive models & AI-powered applications. Reducing manual effort by up to 60% through automated analytics pipelines.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp 0.6s ease 0.8s both' }}>
          <a href="#projects" style={{
            padding: '12px 32px', background: 'var(--accent)',
            color: '#050810', textDecoration: 'none',
            fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500,
            letterSpacing: '0.5px', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.background = '#90cdf4' }}
            onMouseLeave={e => { e.target.style.background = 'var(--accent)' }}
          >View Projects</a>
          <a href="/SHIVAM_DAGADU_CV.pdf" target="_blank" rel="noopener noreferrer" style={{
            padding: '12px 32px', border: '1px solid var(--accent)',
            color: 'var(--accent)', textDecoration: 'none',
            fontFamily: 'var(--font-mono)', fontSize: '13px',
            letterSpacing: '0.5px', transition: 'all 0.2s',
            background: 'rgba(99,179,237,0.05)',
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#050810' }}
            onMouseLeave={e => { e.target.style.background = 'rgba(99,179,237,0.05)'; e.target.style.color = 'var(--accent)' }}
          >View CV</a>
          <a href="https://github.com/shivam-glitch-creator" target="_blank" rel="noopener noreferrer" style={{
            padding: '12px 32px', border: '1px solid var(--border-bright)',
            color: 'var(--text)', textDecoration: 'none',
            fontFamily: 'var(--font-mono)', fontSize: '13px',
            letterSpacing: '0.5px', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border-bright)'; e.target.style.color = 'var(--text)' }}
          >GitHub ↗</a>
        </div>

        {/* Social row */}
        <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', animation: 'fadeUp 0.6s ease 0.95s both' }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-dagadu/' },
            { label: 'GitHub', href: 'https://github.com/shivam-glitch-creator' },
            { label: 'Email', href: 'mailto:work.shivamdagadu@gmail.com' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--text-dim)', textDecoration: 'none',
              letterSpacing: '1px', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >{s.label}</a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hide-on-mobile" style={{
        position: 'absolute', bottom: '2.5rem', right: '2rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        animation: 'float 3s ease-in-out infinite',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '2px', writingMode: 'vertical-rl' }}>SCROLL</span>
        <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
      </div>
    </section>
  )
}
