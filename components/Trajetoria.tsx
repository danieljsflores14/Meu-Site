import Link from 'next/link'

const marcos = [
  { big: 'UFRJ', delay: 0, label: 'graduação, residência em Cirurgia Geral e aulas para a graduação' },
  { big: '10 anos', delay: 100, label: 'de ensino na graduação e preceptoria do internato' },
  { big: '1ª equipe', delay: 200, label: 'de transplante de pâncreas do Rio de Janeiro' },
  { big: '2009', delay: 300, label: 'desde então no Serviço de Cirurgia Geral do Hospital Federal de Ipanema' },
]

export default function Trajetoria() {
  return (
    <section style={{ background: '#0a1a30', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        id="trajetoriaGrid"
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(90px,11vw,170px) clamp(24px,6vw,120px)',
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: 'clamp(40px,6vw,100px)',
          alignItems: 'start',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <span style={{ width: '46px', height: '1px', background: 'linear-gradient(90deg,#c6a15b,transparent)' }} />
            <span data-reveal="up" style={{ fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: '#c6a15b' }}>
              Trajetória
            </span>
          </div>
          <h2
            data-reveal="up"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 400,
              fontSize: 'clamp(32px,3.9vw,60px)',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              maxWidth: '20ch',
            }}
          >
            Uma carreira construída na UFRJ — e nos{' '}
            <span style={{ fontStyle: 'italic', color: '#c6a15b' }}>centros de referência</span> do Rio.
          </h2>
          <p
            data-reveal="up"
            data-delay="140"
            style={{ marginTop: '30px', maxWidth: '58ch', fontSize: '16px', lineHeight: 1.78, color: '#a39c92', fontWeight: 300 }}
          >
            Graduação, residência e dez anos ministrando aulas para a graduação na Universidade Federal do Rio de
            Janeiro — onde integrou o staff da cirurgia do pâncreas e a primeira equipe de transplante de pâncreas do
            Rio. Desde 2009, no Serviço de Cirurgia Geral do Hospital Federal de Ipanema, dedicado às cirurgias
            oncológicas e do aparelho digestivo de alta complexidade.
          </p>
          <Link
            href="/sobre"
            data-reveal="up"
            data-delay="240"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '36px',
              fontSize: '13px',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#e6c987',
              borderBottom: '1px solid rgba(198,161,91,0.4)',
              paddingBottom: '6px',
              textDecoration: 'none',
            }}
          >
            Conhecer a trajetória completa <span>→</span>
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            data-reveal="wipe"
            data-dur="1.2s"
            style={{ position: 'relative', aspectRatio: '3/4', border: '1px solid rgba(198,161,91,0.28)', overflow: 'hidden' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dr-daniel-retrato.webp"
              alt="Dr. Daniel Flores"
              width={530}
              height={706}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%' }}
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                padding: '22px 24px',
                background: 'linear-gradient(0deg,rgba(6,15,30,0.92),transparent)',
                pointerEvents: 'none',
              }}
            >
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', color: '#f3efe7' }}>Dr. Daniel Flores</div>
              <div style={{ fontSize: '11px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#c6a15b', marginTop: '4px' }}>
                CRM-RJ 52.72115-8 · RQE 56396
              </div>
            </div>
          </div>
          <div
            data-reveal="wipe"
            data-delay="140"
            data-dur="1.3s"
            style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dr-daniel-centro-cirurgico.webp"
              alt="Dr. Daniel Flores em centro cirúrgico"
              width={1200}
              height={1500}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 72%' }}
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                padding: '16px 20px',
                background: 'linear-gradient(0deg,rgba(6,15,30,0.85),transparent)',
                pointerEvents: 'none',
              }}
            >
              <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c6a15b' }}>Em centro cirúrgico</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 clamp(24px,6vw,120px) clamp(70px,7vw,110px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {marcos.map((m) => (
            <div key={m.big} data-reveal="up" data-delay={m.delay} style={{ padding: '36px 30px 0', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(30px,2.6vw,42px)', color: '#e6c987', lineHeight: 1 }}>
                {m.big}
              </div>
              <div style={{ marginTop: '14px', fontSize: '13.5px', lineHeight: 1.6, color: '#948e84', fontWeight: 300 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
