export default function GridBackground() {
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
      backgroundImage: `
        linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }}>
      {/* Radial glow center */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(99,179,237,0.07) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
    </div>
  )
}
