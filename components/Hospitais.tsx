const hospitais = [
  { name: 'Copa Star', delay: 0, img: '/images/hospital-copa-star.webp' },
  { name: 'Samaritano Barra', delay: 120, img: '/images/hospital-samaritano-barra.webp' },
  { name: "Barra D'Or", delay: 240, img: '/images/hospital-barra-dor.webp' },
  { name: 'Samaritano Botafogo', delay: 360, img: '/images/hospital-samaritano-botafogo.webp' },
]

export default function Hospitais() {
  return (
    <section id="hospitais" style={{ padding: 'clamp(90px,11vw,170px) clamp(24px,6vw,120px)', maxWidth: '1600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <span style={{ width: '46px', height: '1px', background: 'linear-gradient(90deg,#c6a15b,transparent)' }} />
        <span data-reveal="up" style={{ fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: '#c6a15b' }}>
          Atuação Hospitalar
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '30px',
          marginBottom: 'clamp(48px,5vw,80px)',
        }}
      >
        <h2
          data-reveal="up"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 400,
            fontSize: 'clamp(32px,4.4vw,66px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            maxWidth: '20ch',
          }}
        >
          Mais de 20 anos nos melhores <span style={{ fontStyle: 'italic', color: '#c6a15b' }}>hospitais</span> do Rio.
        </h2>
        <p data-reveal="up" data-delay="140" style={{ maxWidth: '40ch', fontSize: '16px', lineHeight: 1.7, color: '#9a938a', fontWeight: 300 }}>
          Cirurgias de alta complexidade conduzidas nas principais instituições de referência da cidade.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'clamp(14px,1.4vw,22px)' }}>
        {hospitais.map((h) => (
          <div
            key={h.name}
            data-reveal="wipe"
            data-delay={h.delay}
            data-dur="1.1s"
            className="hospital-card"
            style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={h.img}
              alt={h.name}
              width={900}
              height={1200}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg,rgba(6,15,30,0.85) 0%,rgba(6,15,30,0.05) 45%,transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '24px', pointerEvents: 'none' }}>
              <div style={{ width: '24px', height: '1px', background: '#c6a15b', marginBottom: '12px' }} />
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '24px', color: '#f3efe7', lineHeight: 1.1 }}>{h.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
