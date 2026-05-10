export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem clamp(1.5rem, 6vw, 8rem)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem', position: 'relative', zIndex: 1,
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)' }}>
        © {new Date().getFullYear()} Shivam Dagadu
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)' }}>
        Built with React + Vite
      </span>
    </footer>
  )
}
