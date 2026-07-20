import { Calendar, Clock, MapPin, Phone } from 'lucide-react'
import { PHONE_DISPLAY, WHATSAPP_URL } from './contact'

export default function Consultorio() {
  return (
    <section
      id="consultorio"
      style={{
        background: '#08121e',
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
        {/* Info column */}
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
              Consultório
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 50px)',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
              margin: '0 0 22px',
              color: '#f3f0e9',
            }}
          >
            No coração do Leblon.
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#a7b5c6',
              fontWeight: 300,
              maxWidth: '460px',
              margin: '0 0 40px',
            }}
          >
            Um espaço pensado para receber cada paciente com discrição, conforto e a estrutura que
            um atendimento de alta complexidade exige.
          </p>

          {/* Address + hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', marginBottom: '42px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span
                style={{
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '3px',
                  background: 'rgba(201,170,108,0.1)',
                  border: '1px solid rgba(201,170,108,0.24)',
                  color: '#d4b676',
                }}
              >
                <MapPin size={20} strokeWidth={1.7} />
              </span>
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#8b9aac',
                    marginBottom: '6px',
                  }}
                >
                  Endereço
                </div>
                <div style={{ fontSize: '16.5px', color: '#e8eef5', lineHeight: 1.5 }}>
                  Avenida Ataulfo de Paiva, 135 — Sala 1503
                  <br />
                  <span style={{ color: '#a7b5c6' }}>Leblon, Rio de Janeiro — RJ</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span
                style={{
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '3px',
                  background: 'rgba(201,170,108,0.1)',
                  border: '1px solid rgba(201,170,108,0.24)',
                  color: '#d4b676',
                }}
              >
                <Clock size={20} strokeWidth={1.7} />
              </span>
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#8b9aac',
                    marginBottom: '6px',
                  }}
                >
                  Atendimento
                </div>
                <div style={{ fontSize: '16.5px', color: '#e8eef5', lineHeight: 1.5 }}>
                  Segunda a sexta, das 08h às 18h
                  <br />
                  <span style={{ color: '#a7b5c6' }}>Consultas mediante agendamento</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span
                style={{
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '3px',
                  background: 'rgba(201,170,108,0.1)',
                  border: '1px solid rgba(201,170,108,0.24)',
                  color: '#d4b676',
                }}
              >
                <Phone size={20} strokeWidth={1.7} />
              </span>
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#8b9aac',
                    marginBottom: '6px',
                  }}
                >
                  Telefone &amp; WhatsApp
                </div>
                <div style={{ fontSize: '16.5px', color: '#e8eef5', lineHeight: 1.5 }}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d4b676] transition-colors duration-200"
                    style={{ color: '#e8eef5', textDecoration: 'none' }}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(201,170,108,0.38)] transition-all duration-200"
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
              boxShadow: '0 10px 36px rgba(201,170,108,0.24)',
            }}
          >
            <Calendar size={17} strokeWidth={2} />
            Agendar consulta
          </a>
        </div>

        {/* Office photos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              aspectRatio: '4 / 3',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/consultorio-sala.webp"
              alt="Consultório do Dr. Daniel Flores no Leblon, Rio de Janeiro"
              width={1500}
              height={1125}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div
            style={{
              aspectRatio: '4 / 3',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/consultorio-vista.webp"
              alt="Vista para o mar do consultório no Leblon"
              width={1050}
              height={1400}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
