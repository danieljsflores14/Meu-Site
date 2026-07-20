import { WHATSAPP_URL } from './contact'

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
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(180deg,rgba(6,15,30,0.78) 0%,rgba(6,15,30,0.55) 38%,rgba(6,15,30,0.82) 78%,#060f1e 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'radial-gradient(120% 90% at 12% 88%,rgba(198,161,91,0.16) 0%,transparent 55%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          padding: '150px clamp(24px,6vw,120px) clamp(70px,8vw,120px)',
          maxWidth: '1500px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px', overflow: 'hidden' }}>
          <span data-reveal="line" data-dur="0.5s" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ width: '46px', height: '1px', background: 'linear-gradient(90deg,#c6a15b,transparent)' }} />
            <span style={{ fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: '#c6a15b' }}>
              Cirurgião Geral · Alta Complexidade
            </span>
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 400,
            fontSize: 'clamp(44px,7vw,110px)',
            lineHeight: 1,
            letterSpacing: '-0.015em',
            color: '#f3efe7',
            maxWidth: '16ch',
          }}
        >
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.08em' }}>
            <span data-reveal="line" data-dur="0.5s" data-delay="60" style={{ display: 'block' }}>
              Alta complexidade
            </span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.08em' }}>
            <span data-reveal="line" data-dur="0.5s" data-delay="140" style={{ display: 'block' }}>
              tratada com
            </span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.12em' }}>
            <span
              data-reveal="line"
              data-dur="0.5s"
              data-delay="220"
              style={{
                display: 'block',
                fontStyle: 'italic',
                background: 'linear-gradient(110deg,#e6c987,#c6a15b 45%,#8a6d3b 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              precisão absoluta.
            </span>
          </span>
        </h1>

        <p
          data-reveal="fade"
          data-delay="300"
          style={{
            marginTop: '34px',
            maxWidth: '56ch',
            fontSize: 'clamp(16px,1.25vw,19px)',
            lineHeight: 1.72,
            color: '#b6b0a5',
            fontWeight: 300,
          }}
        >
          Cirurgia do aparelho digestivo conduzida com tecnologia de ponta e o rigor dos maiores centros
          cirúrgicos do país. Cada decisão guiada por experiência, ciência e cuidado humano.
        </p>

        <div data-reveal="fade" data-delay="380" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '44px' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '17px 34px',
              background: 'linear-gradient(110deg,#e6c987,#c6a15b)',
              color: '#060f1e',
              borderRadius: '100px',
              fontSize: '13px',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Agendar consulta
          </a>
          <a
            href="#atuacao"
            className="btn-outline"
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
              textDecoration: 'none',
            }}
          >
            Conhecer áreas de atuação
          </a>
        </div>
      </div>

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
        <span style={{ fontSize: '10px', letterSpacing: '.3em', textTransform: 'uppercase', color: '#8b857b' }}>Role</span>
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
