type CSSVars = React.CSSProperties & Record<`--${string}`, string>

const stats = [
  { value: '+20', count: 20, prefix: '+', label: 'anos nos melhores hospitais do Rio', delay: '0ms' },
  { value: 'Leblon', label: 'consultório no Rio de Janeiro', delay: '120ms' },
  { value: 'UFRJ', label: 'formação, residência e docência na graduação', delay: '240ms' },
]

export default function StatsBand() {
  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="stats-3" style={{ maxWidth: '1500px', margin: '0 auto' }}>
        {stats.map((s, i) => (
          <div
            key={s.value}
            data-reveal="up"
            style={
              {
                padding: 'clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px)',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined,
                ['--d']: s.delay,
              } as CSSVars
            }
          >
            <div
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(46px, 5vw, 76px)',
                lineHeight: 1,
                color: '#e6c987',
              }}
            >
              {s.count ? (
                <span data-count={s.count} data-prefix={s.prefix}>
                  {s.value}
                </span>
              ) : (
                s.value
              )}
            </div>
            <div style={{ marginTop: '12px', fontSize: '13.5px', letterSpacing: '.04em', color: '#9a938a' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
