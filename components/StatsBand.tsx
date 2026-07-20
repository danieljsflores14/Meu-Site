export default function StatsBand() {
  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: '1500px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
        <div
          data-reveal="up"
          style={{
            padding: 'clamp(40px,5vw,64px) clamp(24px,4vw,56px)',
            borderRight: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(46px,5vw,76px)', lineHeight: 1, color: '#e6c987' }}>
            <span data-count="20" data-prefix="+">
              +20
            </span>
          </div>
          <div style={{ marginTop: '12px', fontSize: '13.5px', letterSpacing: '.04em', color: '#9a938a' }}>
            anos nos melhores hospitais do Rio
          </div>
        </div>
        <div
          data-reveal="up"
          data-delay="120"
          style={{
            padding: 'clamp(40px,5vw,64px) clamp(24px,4vw,56px)',
            borderRight: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(46px,5vw,76px)', lineHeight: 1, color: '#e6c987' }}>
            Leblon
          </div>
          <div style={{ marginTop: '12px', fontSize: '13.5px', letterSpacing: '.04em', color: '#9a938a' }}>
            consultório no Rio de Janeiro
          </div>
        </div>
        <div data-reveal="up" data-delay="240" style={{ padding: 'clamp(40px,5vw,64px) clamp(24px,4vw,56px)' }}>
          <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(46px,5vw,76px)', lineHeight: 1, color: '#e6c987' }}>
            UFRJ
          </div>
          <div style={{ marginTop: '12px', fontSize: '13.5px', letterSpacing: '.04em', color: '#9a938a' }}>
            formação, residência e docência na graduação
          </div>
        </div>
      </div>
    </section>
  )
}
