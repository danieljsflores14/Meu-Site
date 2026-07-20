const hospitais = [
  {
    nome: 'Copa Star',
    imagem: '/images/hospital-copa-star.webp',
    alt: 'Hospital Copa Star, Copacabana — onde o Dr. Daniel Flores realiza cirurgias',
  },
  {
    nome: 'Samaritano Barra',
    imagem: '/images/hospital-samaritano-barra.webp',
    alt: 'Hospital Samaritano Barra — atuação do Dr. Daniel Flores',
  },
  {
    nome: "Barra D'Or",
    imagem: '/images/hospital-barra-dor.webp',
    alt: "Hospital Barra D'Or — atuação do Dr. Daniel Flores",
  },
  {
    nome: 'Samaritano Botafogo',
    imagem: '/images/hospital-samaritano-botafogo.webp',
    alt: 'Hospital Samaritano Botafogo — atuação do Dr. Daniel Flores',
  },
]

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

        {/* Hospital photo cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {hospitais.map((h) => (
            <div
              key={h.nome}
              className="hospital-card"
              style={{
                position: 'relative',
                aspectRatio: '4 / 3',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={h.imagem}
                alt={h.alt}
                width={1200}
                height={900}
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(8,18,30,0.08) 35%, rgba(8,18,30,0.55) 70%, rgba(8,18,30,0.92) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '18px 20px',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    height: '1px',
                    width: '26px',
                    background: '#c9aa6c',
                    marginBottom: '10px',
                  }}
                />
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '21px',
                    fontWeight: 500,
                    color: '#f3f0e9',
                    lineHeight: 1.2,
                  }}
                >
                  {h.nome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
