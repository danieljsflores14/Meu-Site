import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const fotos = [
  {
    src: '/images/dr-daniel-retrato.webp',
    alt: 'Dr. Daniel Flores, cirurgião geral no Rio de Janeiro',
    width: 530,
    height: 529,
    position: 'center 22%',
    titulo: 'Dr. Daniel Flores',
    legenda: 'CRM-RJ 52.72115-8 · RQE 56396',
  },
  {
    src: '/images/dr-daniel-centro-cirurgico.webp',
    alt: 'Dr. Daniel Flores em centro cirúrgico durante cirurgia de alta complexidade',
    width: 1200,
    height: 1597,
    position: 'center 72%',
    titulo: null,
    legenda: 'Em centro cirúrgico',
  },
]

const milestones = [
  { value: 'UFRJ', label: 'graduação, residência em Cirurgia Geral e aulas para a graduação' },
  { value: '10 anos', label: 'de ensino na graduação e preceptoria do internato' },
  { value: '1ª equipe', label: 'de transplante de pâncreas do Rio de Janeiro' },
  { value: '2009', label: 'desde então no Serviço de Cirurgia Geral do Hospital Federal de Ipanema' },
]

export default function Trajetoria() {
  return (
    <section
      id="trajetoria"
      style={{
        background: '#0b1828',
        padding: 'clamp(80px, 11vw, 150px) clamp(24px, 6vw, 80px)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
      >
        {/* Narrative column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <span
              style={{ display: 'block', height: '1px', width: '40px', background: '#c9aa6c' }}
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
              Trajetória
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 400,
              fontSize: 'clamp(32px, 4.2vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
              margin: '0 0 22px',
              color: '#f3f0e9',
            }}
          >
            Uma carreira construída na UFRJ — e nos centros de referência do Rio.
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#a7b5c6',
              fontWeight: 300,
              maxWidth: '520px',
              margin: '0 0 36px',
            }}
          >
            Graduação, residência e dez anos ministrando aulas para a graduação na Universidade
            Federal do Rio de Janeiro — onde integrou o staff da cirurgia do pâncreas e a primeira equipe de
            transplante de pâncreas do Rio. Desde 2009, no Serviço de Cirurgia Geral do Hospital
            Federal de Ipanema, dedicado às cirurgias oncológicas e do aparelho digestivo de alta
            complexidade.
          </p>

          <Link
            href="/sobre"
            className="hover:border-[rgba(201,170,108,0.6)] hover:bg-[rgba(201,170,108,0.06)] transition-all duration-200"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              padding: '15px 30px',
              borderRadius: '2px',
              background: 'transparent',
              color: '#dde5ee',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.3px',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            Conhecer a trajetória completa
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Photo column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {fotos.map((f) => (
            <figure
              key={f.src}
              style={{
                margin: 0,
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(201,170,108,0.28)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ aspectRatio: '3 / 4', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.src}
                  alt={f.alt}
                  width={f.width}
                  height={f.height}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: f.position,
                    display: 'block',
                  }}
                />
              </div>
              <figcaption style={{ padding: '14px 20px', background: '#0a1523' }}>
                {f.titulo && (
                  <div
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '22px',
                      color: '#f3f0e9',
                    }}
                  >
                    {f.titulo}
                  </div>
                )}
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '2.4px',
                    textTransform: 'uppercase',
                    color: '#c9aa6c',
                    marginTop: f.titulo ? '4px' : 0,
                  }}
                >
                  {f.legenda}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Milestones grid */}
      <div
        style={{
          maxWidth: '1280px',
          margin: 'clamp(40px, 6vw, 80px) auto 0',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {milestones.map((m) => (
            <div
              key={m.value}
              style={{
                padding: '30px 26px',
                background: 'rgba(255,255,255,0.022)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '4px',
              }}
            >
              <span
                style={{
                  display: 'block',
                  height: '1px',
                  width: '28px',
                  background: '#c9aa6c',
                  marginBottom: '18px',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '30px',
                  fontWeight: 500,
                  color: '#f3f0e9',
                  lineHeight: 1,
                  marginBottom: '10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: '#8b9aac',
                  letterSpacing: '0.3px',
                  lineHeight: 1.55,
                  fontWeight: 300,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
