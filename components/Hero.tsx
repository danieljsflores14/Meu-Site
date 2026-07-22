import { WHATSAPP_URL } from './contact'

type CSSVars = React.CSSProperties & Record<`--${string}`, string>

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Parallax background (empty operating-room stock image) */}
      <div
        id="heroBg"
        style={{
          position: 'absolute',
          inset: '-8% 0',
          zIndex: 0,
          backgroundImage: "url('/images/centro-cirurgico.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.15)',
          willChange: 'transform',
        }}
      />
      {/* Tonal overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(180deg, rgba(6,15,30,0.78) 0%, rgba(6,15,30,0.55) 38%, rgba(6,15,30,0.82) 78%, #060f1e 100%)',
        }}
      />
      {/* Radial gold glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'radial-gradient(120% 90% at 12% 88%, rgba(198,161,91,0.16) 0%, transparent 55%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          padding: '150px clamp(24px, 6vw, 120px) clamp(70px, 8vw, 120px)',
          maxWidth: '1500px',
        }}
      >
        {/* Kicker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px', overflow: 'hidden' }}>
          <span
            data-reveal="line"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', ['--dur']: '0.9s' } as CSSVars}
          >
            <span style={{ width: '46px', height: '1px', background: 'linear-gradient(90deg, #c6a15b, transparent)' }} />
            <span style={{ fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: '#c6a15b' }}>
              Cirurgião Geral · Alta Complexidade
            </span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(44px, 7vw, 110px)',
            lineHeight: 1,
            letterSpacing: '-0.015em',
            color: '#f3efe7',
            maxWidth: '16ch',
          }}
        >
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.08em' }}>
            <span data-reveal="line" style={{ display: 'block', ['--dur']: '1s', ['--d']: '120ms' } as CSSVars}>
              Alta complexidade
            </span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.08em' }}>
            <span data-reveal="line" style={{ display: 'block', ['--dur']: '1s', ['--d']: '230ms' } as CSSVars}>
              tratada com
            </span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.12em' }}>
            <span
              data-reveal="line"
              style={
                {
                  display: 'block',
                  fontStyle: 'italic',
                  background: 'linear-gradient(110deg, #e6c987, #c6a15b 45%, #8a6d3b 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  ['--dur']: '1s',
                  ['--d']: '340ms',
                } as CSSVars
              }
            >
              precisão absoluta.
            </span>
          </span>
        </h1>

        <p
          data-reveal="up"
          style={
            {
              marginTop: '34px',
              maxWidth: '56ch',
              fontSize: 'clamp(16px, 1.25vw, 19px)',
              lineHeight: 1.72,
              color: '#b6b0a5',
              fontWeight: 300,
              ['--d']: '560ms',
            } as CSSVars
          }
        >
          Cirurgia do aparelho digestivo conduzida com tecnologia de ponta e o rigor dos maiores
          centros cirúrgicos do país. Cada decisão guiada por experiência, ciência e cuidado humano.
        </p>

        <div
          data-reveal="up"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '44px', ['--d']: '700ms' } as CSSVars}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-14px_rgba(198,161,91,0.6)] transition-all duration-300"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '17px 34px',
              background: 'linear-gradient(110deg, #e6c987, #c6a15b)',
              color: '#060f1e',
              borderRadius: '100px',
              fontSize: '13px',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Agendar consulta
          </a>
          <a
            href="#atuacao"
            className="hover:border-[#c6a15b] hover:!text-[#e6c987] transition-colors duration-300"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '17px 34px',
              border: '1px solid rgba(255,255,255,0.22)',
              color: '#ece7df',
              borderRadius: '100px',
              fontSize: '13px',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
            }}
          >
            Conhecer áreas de atuação
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '26px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '.3em', textTransform: 'uppercase', color: '#8b857b' }}>
          Role
        </span>
        <span style={{ position: 'relative', width: '1px', height: '40px', background: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '14px',
              background: '#c6a15b',
              animation: 'scrollpulse 2.2s ease-in-out infinite',
            }}
          />
        </span>
      </div>
    </section>
  )
}
