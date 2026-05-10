import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      background: scrolled ? 'rgba(5,8,16,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(99,179,237,0.1)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '64px',
    }}>
      <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '32px', height: '32px', border: '1.5px solid var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '14px', fontFamily: 'var(--font-mono)', color: 'var(--accent)',
          fontWeight: 400,
        }}>SD</div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: 'var(--text)', letterSpacing: '0.5px' }}>Shivam Dagadu</span>
      </a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              color: 'var(--text-muted)', textDecoration: 'none',
              fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.5px',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{l}</a>
          </li>
        ))}
        <li>
          <a href="mailto:work.shivamdagadu@gmail.com" style={{
            padding: '7px 18px', border: '1px solid var(--accent)',
            color: 'var(--accent)', textDecoration: 'none',
            fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.5px',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#050810' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}
          >Hire Me</a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px' }}
        className="mobile-menu-btn"
        aria-label="Menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: '24px', height: '1.5px', background: 'var(--accent)', transition: 'all 0.3s' }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: 'rgba(5,8,16,0.98)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)', padding: '1.5rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1.2rem',
          zIndex: 99,
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '14px' }}
            >{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
