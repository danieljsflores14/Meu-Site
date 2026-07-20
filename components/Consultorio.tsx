import { PHONE_DISPLAY, WHATSAPP_URL } from './contact'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Av.+Ataulfo+de+Paiva+135+Leblon+Rio+de+Janeiro+RJ'

const contato = [
  { label: 'Endereço', delay: 0, value: 'Avenida Ataulfo de Paiva, 135 — Sala 1503. Leblon, Rio de Janeiro — RJ' },
  { label: 'Atendimento', delay: 120, value: 'Segunda a sexta, das 08h às 18h. Consultas mediante agendamento.' },
  { label: 'Telefone & WhatsApp', delay: 240, value: PHONE_DISPLAY },
]

export default function Consultorio() {
  return (
    <section id="consultorio" style={{ background: '#0a1a30', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div
        id="consultorioGrid"
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(90px,11vw,170px) clamp(24px,6vw,120px)',
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 'clamp(40px,6vw,90px)',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <span style={{ width: '46px', height: '1px', background: 'linear-gradient(90deg,#c6a15b,transparent)' }} />
            <span data-reveal="up" style={{ fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: '#c6a15b' }}>
              Consultório
            </span>
          </div>
          <h2
            data-reveal="up"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontWeight: 400,
              fontSize: 'clamp(38px,4.6vw,72px)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
            }}
          >
            No coração do <span style={{ fontStyle: 'italic', color: '#c6a15b' }}>Leblon.</span>
          </h2>
          <p
            data-reveal="up"
            data-delay="120"
            style={{ marginTop: '26px', maxWidth: '46ch', fontSize: '16px', lineHeight: 1.75, color: '#a39c92', fontWeight: 300 }}
          >
            Um espaço pensado para receber cada paciente com discrição, conforto e a estrutura que um atendimento de
            alta complexidade exige.
          </p>

          <div style={{ marginTop: '44px', display: 'flex', flexDirection: 'column' }}>
            {contato.map((c) => (
              <div
                key={c.label}
                data-reveal="up"
                data-delay={c.delay}
                className="contato-row"
                style={{
                  padding: '22px 0',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  display: 'grid',
                  gridTemplateColumns: '130px 1fr',
                  gap: '20px',
                  alignItems: 'start',
                }}
              >
                <div style={{ fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#c6a15b', paddingTop: '3px' }}>
                  {c.label}
                </div>
                <div style={{ fontSize: '15.5px', lineHeight: 1.6, color: '#d8d2c8', fontWeight: 300 }}>{c.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '40px' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal="up"
              data-delay="360"
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
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal="up"
              data-delay="440"
              className="btn-outline"
              style={{
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
                textDecoration: 'none',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>{' '}
              Ver no Google Maps
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '16px' }}>
          <div
            data-reveal="wipe"
            data-dur="1.2s"
            style={{ gridColumn: '1/3', aspectRatio: '16/10', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/consultorio-sala.webp"
              alt="Consultório no Leblon"
              width={1500}
              height={938}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div
            data-reveal="wipe"
            data-delay="120"
            data-dur="1.2s"
            style={{ gridColumn: '1/3', aspectRatio: '16/8', overflow: 'hidden', border: '1px solid rgba(198,161,91,0.28)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/consultorio-vista.webp"
              alt="Vista para o mar — Leblon"
              width={1500}
              height={750}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
