import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from './contact'

export default function Hero() {
  return (
    <header
      id="topo"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `
          linear-gradient(94deg, rgba(8,18,30,0.97) 0%, rgba(8,18,30,0.86) 32%, rgba(8,18,30,0.42) 62%, rgba(8,18,30,0.62) 100%),
          url('/images/centro-cirurgico.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      {/* Top + bottom fade vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(8,18,30,0.55) 0%, transparent 22%, transparent 78%, rgba(8,18,30,0.9) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '140px clamp(24px, 6vw, 80px) 80px',
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          {/* Gold divider line + specialty kicker */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px' }}>
            <span
              className="line-grow"
              style={{
                display: 'block',
                height: '1px',
                background: 'linear-gradient(90deg, #c9aa6c, transparent)',
              }}
            />
            <span
              style={{
                fontSize: '12.5px',
                fontWeight: 600,
                letterSpacing: '3.5px',
                textTransform: 'uppercase',
                color: '#c9aa6c',
              }}
            >
              Cirurgião Geral · Alta Complexidade
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 400,
              fontSize: 'clamp(42px, 5.8vw, 78px)',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
              margin: '0 0 30px',
              color: '#f6f4ee',
            }}
          >
            Alta complexidade
            <br />
            tratada com{' '}
            <em style={{ fontStyle: 'italic', color: '#d8be8c' }}>precisão absoluta</em>.
          </h1>

          {/* Body copy */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.5vw, 19px)',
              lineHeight: 1.65,
              color: '#aebccd',
              fontWeight: 300,
              maxWidth: '560px',
              margin: '0 0 42px',
            }}
          >
            Cirurgia do aparelho digestivo conduzida com tecnologia de ponta e o rigor dos maiores
            centros cirúrgicos do país. Cada decisão guiada por experiência, ciência e cuidado
            humano.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(201,170,108,0.4)] transition-all duration-200"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                padding: '16px 34px',
                borderRadius: '2px',
                background: 'linear-gradient(180deg, #d4b676 0%, #c19a52 100%)',
                color: '#1a1206',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '0.4px',
                boxShadow: '0 10px 36px rgba(201,170,108,0.28)',
              }}
            >
              Agendar consulta
              <ArrowRight size={17} />
            </a>

            <a
              href="#atuacao"
              className="hover:border-[rgba(201,170,108,0.6)] hover:bg-[rgba(201,170,108,0.06)] transition-all duration-200"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                padding: '16px 30px',
                borderRadius: '2px',
                background: 'transparent',
                color: '#dde5ee',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.3px',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              Conhecer áreas de atuação
            </a>
          </div>

          {/* Stats bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(24px, 4vw, 56px)',
              marginTop: '64px',
              paddingTop: '34px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '34px',
                  fontWeight: 500,
                  color: '#f3f0e9',
                  lineHeight: 1,
                }}
              >
                +20
              </div>
              <div
                style={{ fontSize: '12.5px', color: '#8b9aac', letterSpacing: '0.4px', marginTop: '6px' }}
              >
                anos nos melhores hospitais do Rio
              </div>
            </div>

            <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }} />

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '34px',
                  fontWeight: 500,
                  color: '#f3f0e9',
                  lineHeight: 1,
                }}
              >
                Leblon
              </div>
              <div
                style={{ fontSize: '12.5px', color: '#8b9aac', letterSpacing: '0.4px', marginTop: '6px' }}
              >
                consultório no Rio de Janeiro
              </div>
            </div>

            <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)' }} />

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '34px',
                  fontWeight: 500,
                  color: '#f3f0e9',
                  lineHeight: 1,
                }}
              >
                UFRJ
              </div>
              <div
                style={{ fontSize: '12.5px', color: '#8b9aac', letterSpacing: '0.4px', marginTop: '6px' }}
              >
                formação, residência e docência
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
