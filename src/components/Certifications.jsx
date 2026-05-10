import { ExternalLink, Award, Shield, Cpu } from 'lucide-react'

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "Sep 2025",
    validity: "Valid till Sep 2027",
    icon: <Award size={24} />,
    link: "/DataScience_eCertificate.pdf",
    accent: "var(--accent)"
  },
  {
    title: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "LinkedIn Learning",
    date: "Jun 2025",
    validity: "Lifetime",
    icon: <Cpu size={24} />,
    link: "/CertificateOfCompletion_Generative AI The Evolution of Thoughtful Online Search.pdf",
    accent: "var(--accent2)"
  },
  {
    title: "Hands-on Workshop on Ethical Hacking",
    issuer: "SHAIDS, DMCE Airoli",
    date: "Jul 2024",
    validity: "Workshop",
    icon: <Shield size={24} />,
    link: "/12.DAGADU SHIVAM MADAN .png",
    accent: "var(--accent)"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" style={{
      padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 8rem)',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>Certifications</SectionLabel>
        <h2 style={{ 
          fontFamily: 'var(--font-display)', 
          fontWeight: 800, 
          fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
          letterSpacing: '-1px', 
          marginBottom: '4rem', 
          marginTop: '0.5rem' 
        }}>
          Credentials & Badges
        </h2>

        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
        }}>
          {certifications.map((cert, i) => (
            <CertCard key={i} {...cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertCard({ title, issuer, date, validity, icon, link, accent }) {
  return (
    <div style={{
      background: 'var(--bg-card)', 
      border: '1px solid var(--border)',
      padding: '2rem', 
      display: 'flex', 
      flexDirection: 'column',
      gap: '1.5rem', 
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
      position: 'relative', 
      overflow: 'hidden',
    }}
      className="cert-card"
      onMouseEnter={e => { 
        e.currentTarget.style.borderColor = 'var(--border-bright)'; 
        e.currentTarget.style.background = 'var(--bg-card-hover)';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={e => { 
        e.currentTarget.style.borderColor = 'var(--border)'; 
        e.currentTarget.style.background = 'var(--bg-card)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: '56px', height: '56px', flexShrink: 0,
          border: `1px solid ${accent}`, 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: accent,
          background: `${accent}10`,
          boxShadow: `0 0 20px ${accent}20`,
        }}>
          {icon}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--text-dim)', 
              transition: 'color 0.2s',
              padding: '8px',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            title="View Certificate"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <div>
        <h3 style={{ 
          fontFamily: 'var(--font-display)', 
          fontWeight: 700, 
          fontSize: '1.1rem', 
          lineHeight: 1.4, 
          marginBottom: '1rem',
          minHeight: '3em'
        }}>{title}</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: accent, fontWeight: 600 }}>{issuer}</span>
             <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)' }}>{date}</span>
          </div>
          
          <div style={{
            fontFamily: 'var(--font-mono)', 
            fontSize: '11px', 
            color: '#68d391',
            padding: '4px 10px', 
            border: '1px solid rgba(104,211,145,0.2)',
            background: 'rgba(104,211,145,0.05)',
            width: 'fit-content',
            letterSpacing: '0.5px'
          }}>{validity}</div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        background: `radial-gradient(circle, ${accent}05 0%, transparent 70%)`,
        zIndex: -1
      }} />
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
