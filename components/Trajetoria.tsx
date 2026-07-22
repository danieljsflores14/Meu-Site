import Link from 'next/link'
import { CRM, RQE } from './contact'

type CSSVars = React.CSSProperties & Record<`--${string}`, string>

const marcos = [
  { big: 'UFRJ', delay: '0ms', label: 'graduação, residência em Cirurgia Geral e aulas para a graduação' },
  { big: '10 anos', delay: '100ms', label: 'de ensino na graduação e preceptoria do internato' },
  { big: '1ª equipe', delay: '200ms', label: 'de transplante de pâncreas do Rio de Janeiro' },
  { big: '2009', delay: '300ms', label: 'desde então no Serviço de Cirurgia Geral do Hospital Federal de Ipanema' },
]

export default function Trajetoria() {
  return (
    <section id="trajetoria" style={{ background: '#0a1a30', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        className="split"
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(90px, 11vw, 170px) clamp(24px, 6vw, 120px)',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: 'clamp(40px, 6vw, 100px)',
        }}
      >
        {/* Narrative */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <span style={{ width: '46px', height: '1px', background: 'linear-gradient(90deg, #c6a15b, transparent)' }} />
            <span
              data-reveal="up"
              style={{ fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: '#c6a15b' }}
            >
              Trajetória
            </span>
          </div>

          <h2
            data-reveal="up"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 400,
              fontSize: 'clamp(32px, 3.9vw, 60px)',
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
            style={
              {
                marginTop: '30px',
                maxWidth: '58ch',
                fontSize: '16px',
                lineHeight: 1.78,
                color: '#a39c92',
                fontWeight: 300,
                ['--d']: '140ms',
              } as CSSVars
            }
          >
            Graduação, residência e dez anos ministrando aulas para a graduação na Universidade Federal
            do Rio de Janeiro — onde integrou o staff da cirurgia do pâncreas e a primeira equipe de
            transplante de pâncreas do Rio. Desde 2009, no Serviço de Cirurgia Geral do Hospital Federal
            de Ipanema, dedicado às cirurgias oncológicas e do aparelho digestivo de alta complexidade.
          </p>

          <Link
            data-reveal="up"
            href="/sobre"
            style={
              {
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
                ['--d']: '240ms',
              } as CSSVars
            }
          >
            Conhecer a trajetória completa <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Photos */}
        <div className="split-media" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <figure
            data-reveal="wipe"
            style={{
              position: 'relative',
              aspectRatio: '3 / 4',
              border: '1px solid rgba(198,161,91,0.28)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              margin: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dr-daniel-retrato.webp"
              alt="Dr. Daniel Flores — retrato"
              style={{ width: '100%', flex: '1 1 0', minHeight: 0, objectFit: 'cover', objectPosition: 'center 22%' }}
            />
            <figcaption style={{ padding: '14px 20px', background: '#0b1728' }}>
              <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '22px', color: '#f3efe7' }}>
                Dr. Daniel Flores
              </div>
              <div style={{ fontSize: '11px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#c6a15b', marginTop: '4px' }}>
                {CRM} · {RQE}
              </div>
            </figcaption>
          </figure>

          <figure
            data-reveal="wipe"
            style={
              {
                position: 'relative',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                margin: 0,
                ['--d']: '140ms',
              } as CSSVars
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dr-daniel-centro-cirurgico.webp"
              alt="Dr. Daniel Flores em centro cirúrgico"
              style={{
                width: '100%',
                flex: '1 1 0',
                minHeight: 0,
                objectFit: 'cover',
                objectPosition: 'center 72%',
                imageOrientation: 'from-image',
              }}
            />
            <figcaption style={{ padding: '15px 20px', background: '#0b1728' }}>
              <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c6a15b' }}>
                Em centro cirúrgico
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Milestones */}
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 120px) clamp(70px, 7vw, 110px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {marcos.map((m) => (
            <div
              key={m.big}
              data-reveal="up"
              style={
                { padding: '36px 30px 0', borderRight: '1px solid rgba(255,255,255,0.1)', ['--d']: m.delay } as CSSVars
              }
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(30px, 2.6vw, 42px)',
                  color: '#e6c987',
                  lineHeight: 1,
                }}
              >
                {m.big}
              </div>
              <div style={{ marginTop: '14px', fontSize: '13.5px', lineHeight: 1.6, color: '#948e84', fontWeight: 300 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
