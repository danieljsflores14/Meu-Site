import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { WHATSAPP_URL } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Trajetória | Dr. Daniel Flores',
  description:
    'A trajetória do Dr. Daniel Flores: graduação, residência e dez anos ministrando aulas para a graduação na UFRJ, staff da cirurgia do pâncreas, membro da primeira equipe de transplante de pâncreas do Rio de Janeiro e, desde 2009, cirurgião do Hospital Federal de Ipanema.',
  alternates: { canonical: '/sobre' },
}

const timeline = [
  {
    phase: 'Formação',
    title: 'Graduação em Medicina — UFRJ',
    text: 'Formação médica na Universidade Federal do Rio de Janeiro, uma das escolas de Medicina mais tradicionais e rigorosas do país.',
  },
  {
    phase: 'Residência',
    title: 'Residência em Cirurgia Geral — UFRJ',
    text: 'Três anos de residência médica em Cirurgia Geral, com treinamento intensivo em um dos grandes centros universitários de referência do Brasil.',
  },
  {
    phase: 'Aulas para a graduação · 10 anos',
    title: 'Professor da graduação e preceptor do internato',
    text: 'Dez anos ministrando aulas para a graduação de Medicina da UFRJ e atuando como preceptor do internato de Cirurgia Geral — formando novas gerações de cirurgiões e mantendo contato permanente com a fronteira do conhecimento.',
  },
  {
    phase: 'Cirurgia do Pâncreas',
    title: 'Staff da enfermaria de Cirurgia do Pâncreas',
    text: 'Atuação como staff da enfermaria de Cirurgia do Pâncreas, área de referência nos procedimentos de mais alta complexidade do aparelho digestivo.',
  },
  {
    phase: 'Pioneirismo',
    title: 'Primeira equipe de transplante de pâncreas do Rio de Janeiro',
    text: 'Membro atuante da primeira equipe de transplante de pâncreas do Rio de Janeiro — um marco da cirurgia hepatobiliopancreática no estado.',
  },
  {
    phase: 'Desde 2009',
    title: 'Hospital Federal de Ipanema — Serviço de Cirurgia Geral',
    text: 'Cirurgião do Serviço de Cirurgia Geral do Hospital Federal de Ipanema, executando cirurgias oncológicas e do aparelho digestivo de alta complexidade.',
  },
]

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section
          style={{
            background: 'linear-gradient(180deg, #060f1e 0%, #0a1a30 100%)',
            padding: '200px clamp(24px, 6vw, 120px) clamp(60px, 8vw, 100px)',
          }}
        >
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <span style={{ width: '46px', height: '1px', background: 'linear-gradient(90deg, #c6a15b, transparent)' }} />
              <span style={{ fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: '#c6a15b' }}>
                Trajetória
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 400,
                fontSize: 'clamp(38px, 5.2vw, 76px)',
                lineHeight: 1.02,
                letterSpacing: '-0.015em',
                margin: '0 0 24px',
                color: '#f3efe7',
                maxWidth: '18ch',
              }}
            >
              Uma vida dedicada à cirurgia de <span style={{ fontStyle: 'italic', color: '#c6a15b' }}>alta complexidade.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.75,
                color: '#a39c92',
                fontWeight: 300,
                maxWidth: '640px',
                margin: 0,
              }}
            >
              Da formação na Universidade Federal do Rio de Janeiro ao Serviço de Cirurgia Geral do
              Hospital Federal de Ipanema, mais de vinte anos construídos sobre ensino, pesquisa e
              prática cirúrgica nos centros de referência do Rio de Janeiro.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section
          style={{
            background: '#0a1a30',
            padding: 'clamp(20px, 4vw, 40px) clamp(24px, 6vw, 120px) clamp(80px, 10vw, 130px)',
          }}
        >
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            {timeline.map((item, i) => {
              const isLast = i === timeline.length - 1
              return (
                <div key={item.title} style={{ position: 'relative', paddingLeft: '44px', paddingBottom: isLast ? 0 : '54px' }}>
                  {!isLast && (
                    <span
                      style={{
                        position: 'absolute',
                        left: '5px',
                        top: '18px',
                        bottom: '-4px',
                        width: '1px',
                        background: 'linear-gradient(180deg, rgba(198,161,91,0.45), rgba(198,161,91,0.12))',
                      }}
                    />
                  )}
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '5px',
                      width: '11px',
                      height: '11px',
                      borderRadius: '50%',
                      border: '2px solid #c6a15b',
                      background: '#0a1a30',
                    }}
                  />

                  <div
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      letterSpacing: '.25em',
                      textTransform: 'uppercase',
                      color: '#c6a15b',
                      marginBottom: '10px',
                    }}
                  >
                    {item.phase}
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontWeight: 500,
                      fontSize: 'clamp(24px, 2.4vw, 32px)',
                      lineHeight: 1.15,
                      margin: '0 0 12px',
                      color: '#f3efe7',
                    }}
                  >
                    {item.title}
                  </h2>
                  <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#a39c92', fontWeight: 300, maxWidth: '620px', margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA band */}
        <section
          style={{
            background: 'linear-gradient(180deg, #0a1a30 0%, #060f1e 100%)',
            padding: 'clamp(70px, 9vw, 110px) clamp(24px, 6vw, 120px)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 400,
                fontSize: 'clamp(30px, 4vw, 50px)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                margin: '0 0 18px',
                color: '#f3efe7',
              }}
            >
              Experiência a serviço do <span style={{ fontStyle: 'italic', color: '#c6a15b' }}>seu tratamento.</span>
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#a39c92', fontWeight: 300, margin: '0 0 36px' }}>
              Consultas no Leblon, mediante agendamento.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-[3px] hover:shadow-[0_18px_40px_-14px_rgba(198,161,91,0.6)] transition-all duration-300"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
