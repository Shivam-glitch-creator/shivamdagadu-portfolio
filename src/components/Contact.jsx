export default function Contact() {
  return (
    <section id="contact" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 8rem)',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <SectionLabel centered>Contact</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-1.5px', marginBottom: '1.5rem', marginTop: '0.5rem', lineHeight: 1.1 }}>
          Let's Build<br />
          <span style={{ WebkitTextStroke: '1.5px var(--accent)', color: 'transparent' }}>Something.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 3rem' }}>
          Open to full-time roles, freelance projects, and research collaborations in AI, ML, and backend engineering.
        </p>

        <a href="mailto:work.shivamdagadu@gmail.com" style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '16px 40px', background: 'var(--accent)',
          color: '#050810', textDecoration: 'none',
          fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 600,
          letterSpacing: '0.5px', transition: 'all 0.2s',
          marginBottom: '3rem',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#90cdf4'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'none' }}
        >
          work.shivamdagadu@gmail.com ↗
        </a>

        <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-dagadu/' },
            { label: 'GitHub', href: 'https://github.com/shivam-glitch-creator' },
            { label: '+91 9028200663', href: 'tel:+919028200663' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '13px',
              color: 'var(--text-muted)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children, centered }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem', justifyContent: centered ? 'center' : 'flex-start' }}>
      <span style={{ width: '20px', height: '1px', background: 'var(--accent)' }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '3px', textTransform: 'uppercase' }}>{children}</span>
      {centered && <span style={{ width: '20px', height: '1px', background: 'var(--accent)' }} />}
    </div>
  )
}
