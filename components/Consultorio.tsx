import { ADDRESS_CITY, ADDRESS_LINE, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from './contact'

type CSSVars = React.CSSProperties & Record<`--${string}`, string>

export default function Consultorio() {
  return (
    <section id="consultorio" style={{ background: '#0a1a30', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        className="split"
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(90px, 11vw, 170px) clamp(24px, 6vw, 120px)',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 'clamp(40px, 6vw, 90px)',
          alignItems: 'center',
        }}
      >
        {/* Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <span style={{ width: '46px', height: '1px', background: 'linear-gradient(90deg, #c6a15b, transparent)' }} />
            <span
              data-reveal="up"
              style={{ fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: '#c6a15b' }}
            >
              Consultório
            </span>
          </div>

          <h2
            data-reveal="up"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 400,
              fontSize: 'clamp(38px, 4.6vw, 72px)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
            }}
          >
            No coração do <span style={{ fontStyle: 'italic', color: '#c6a15b' }}>Leblon.</span>
          </h2>

          <p
            data-reveal="up"
            style={
              {
                marginTop: '26px',
                maxWidth: '46ch',
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#a39c92',
                fontWeight: 300,
                ['--d']: '120ms',
              } as CSSVars
            }
          >
            Um espaço pensado para receber cada paciente com discrição, conforto e a estrutura que um
            atendimento de alta complexidade exige.
          </p>

          <div style={{ marginTop: '44px', display: 'flex', flexDirection: 'column' }}>
            <ContatoRow label="Endereço" delay="0ms">
              {ADDRESS_LINE}. {ADDRESS_CITY}
            </ContatoRow>
            <ContatoRow label="Atendimento" delay="120ms">
              Segunda a sexta, das 08h às 18h. Consultas mediante agendamento.
            </ContatoRow>
            <ContatoRow label="Telefone & WhatsApp" delay="240ms">
              <a href={`tel:${PHONE_TEL}`} style={{ color: '#e6c987' }}>
                {PHONE_DISPLAY}
              </a>
            </ContatoRow>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '40px' }}>
            <a
              data-reveal="up"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-14px_rgba(198,161,91,0.6)] transition-all duration-300"
              style={
                {
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
                  ['--d']: '360ms',
                } as CSSVars
              }
            >
              Agendar consulta
            </a>
            <a
              data-reveal="up"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:border-[#c6a15b] hover:!text-[#e6c987] transition-colors duration-300"
              style={
                {
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '17px 32px',
                  border: '1px solid rgba(255,255,255,0.22)',
                  color: '#ece7df',
                  borderRadius: '100px',
                  fontSize: '13px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  ['--d']: '440ms',
                } as CSSVars
              }
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Ver no Google Maps
            </a>
          </div>
        </div>

        {/* Office photos */}
        <div
          className="split-media"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '16px' }}
        >
          <figure
            data-reveal="wipe"
            style={{ gridColumn: '1 / 3', aspectRatio: '16 / 10', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', margin: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/consultorio-sala.webp"
              alt="Consultório no Leblon"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </figure>
          <figure
            data-reveal="wipe"
            style={
              { gridColumn: '1 / 3', aspectRatio: '16 / 8', overflow: 'hidden', border: '1px solid rgba(198,161,91,0.28)', margin: 0, ['--d']: '120ms' } as CSSVars
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/consultorio-vista.webp"
              alt="Vista para o mar — Leblon"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

function ContatoRow({ label, delay, children }: { label: string; delay: string; children: React.ReactNode }) {
  return (
    <div
      data-reveal="up"
      style={
        {
          padding: '22px 0',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'grid',
          gridTemplateColumns: '130px 1fr',
          gap: '20px',
          alignItems: 'start',
          ['--d']: delay,
        } as CSSVars
      }
    >
      <div style={{ fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#c6a15b', paddingTop: '3px' }}>
        {label}
      </div>
      <div style={{ fontSize: '15.5px', lineHeight: 1.6, color: '#d8d2c8', fontWeight: 300 }}>{children}</div>
    </div>
  )
}
