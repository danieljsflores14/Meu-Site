const HospitalIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c9aa6c"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity: 0.85 }}
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
  </svg>
)

export default function Hospitais() {
  return (
    <section
      id="hospitais"
      style={{
        background: 'linear-gradient(180deg, #0b1828 0%, #08121e 100%)',
        padding: 'clamp(80px, 11vw, 140px) clamp(24px, 6vw, 80px)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto clamp(46px, 6vw, 72px)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '22px',
            }}
          >
            <span
              style={{
                display: 'block',
                height: '1px',
                width: '32px',
                background: 'linear-gradient(90deg, transparent, #c9aa6c)',
              }}
            />
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#c9aa6c',
              }}
            >
              Atuação Hospitalar
            </span>
            <span
              style={{
                display: 'block',
                height: '1px',
                width: '32px',
                background: 'linear-gradient(90deg, #c9aa6c, transparent)',
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 400,
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
              margin: '0 0 18px',
              color: '#f3f0e9',
            }}
          >
            Mais de 20 anos nos melhores
            <br />
            hospitais do Rio de Janeiro.
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#a7b5c6',
              fontWeight: 300,
              margin: 0,
            }}
          >
            Cirurgias de alta complexidade conduzidas nas principais instituições de referência da
            cidade.
          </p>
        </div>

        {/* Hospital cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Real: Hospital Federal de Ipanema */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              minHeight: '130px',
              padding: '28px',
              borderRadius: '4px',
              border: '1px solid rgba(201,170,108,0.32)',
              background: 'rgba(201,170,108,0.05)',
            }}
          >
            <HospitalIcon />
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#f3f0e9',
                  lineHeight: 1.25,
                }}
              >
                Hospital Federal de Ipanema
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#8b9aac',
                  letterSpacing: '0.4px',
                  marginTop: '6px',
                }}
              >
                Serviço de Cirurgia Geral · desde 2009
              </div>
            </div>
          </div>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                minHeight: '130px',
                padding: '28px',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.08)',
                backgroundImage:
                  'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 11px, rgba(255,255,255,0.01) 11px, rgba(255,255,255,0.01) 22px)',
              }}
            >
              <HospitalIcon />
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '11.5px',
                  letterSpacing: '0.5px',
                  color: '#8b9aac',
                  textAlign: 'center',
                }}
              >
                [ logo / nome do hospital ]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
