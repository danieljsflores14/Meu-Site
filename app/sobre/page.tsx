import type { Metadata } from 'next'
import { Calendar } from 'lucide-react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import RevealScript from '@/components/RevealScript'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { PHONE_DISPLAY, WHATSAPP_URL } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Trajetória | Dr. Daniel Flores',
  description:
    'A trajetória do Dr. Daniel Flores: UFRJ, dez anos de docência, staff da cirurgia do pâncreas e primeira equipe de transplante de pâncreas do Rio.',
  alternates: { canonical: '/sobre/' },
  openGraph: {
    type: 'profile',
    locale: 'pt_BR',
    siteName: 'Dr. Daniel Flores',
    title: 'Trajetória | Dr. Daniel Flores',
    description:
      'UFRJ, dez anos de docência, staff da cirurgia do pâncreas e primeira equipe de transplante de pâncreas do Rio de Janeiro.',
    url: '/sobre/',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trajetória | Dr. Daniel Flores',
    description:
      'UFRJ, dez anos de docência, staff da cirurgia do pâncreas e primeira equipe de transplante de pâncreas do Rio de Janeiro.',
    images: ['/images/og-image.jpg'],
  },
}

// Breadcrumb — melhora a exibição nos resultados de busca
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://drdanielflores.com.br/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Trajetória',
      item: 'https://drdanielflores.com.br/sobre/',
    },
  ],
}

// Conecta esta página ao schema do médico definido na home
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: { '@id': 'https://drdanielflores.com.br/#physician' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <Navbar />
      <main>
        {/* Page header */}
        <section
          style={{
            background: 'linear-gradient(180deg, #060f1e 0%, #0a1a30 100%)',
            padding: '200px clamp(24px, 6vw, 80px) clamp(60px, 8vw, 100px)',
          }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}
            >
              <span
                style={{ display: 'block', height: '1px', width: '40px', background: '#c6a15b' }}
              />
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#c6a15b',
                }}
              >
                Trajetória
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 400,
                fontSize: 'clamp(38px, 5vw, 64px)',
                lineHeight: 1.1,
                letterSpacing: '-0.5px',
                margin: '0 0 24px',
                color: '#f3efe7',
              }}
            >
              Uma vida dedicada à cirurgia de alta complexidade.
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 1.4vw, 18px)',
                lineHeight: 1.7,
                color: '#a39c92',
                fontWeight: 300,
                maxWidth: '640px',
                margin: 0,
              }}
            >
              Da formação na Universidade Federal do Rio de Janeiro ao Serviço de Cirurgia Geral
              do Hospital Federal de Ipanema, mais de vinte anos construídos sobre ensino,
              pesquisa e prática cirúrgica nos centros de referência do Rio de Janeiro.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section
          style={{
            background: '#0a1a30',
            padding: 'clamp(20px, 4vw, 40px) clamp(24px, 6vw, 80px) clamp(80px, 10vw, 130px)',
          }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {timeline.map((item, i) => {
              const isLast = i === timeline.length - 1
              return (
                <div
                  key={item.title}
                  style={{
                    position: 'relative',
                    paddingLeft: '44px',
                    paddingBottom: isLast ? 0 : '54px',
                  }}
                >
                  {/* Vertical line */}
                  {!isLast && (
                    <span
                      style={{
                        position: 'absolute',
                        left: '5px',
                        top: '18px',
                        bottom: '-4px',
                        width: '1px',
                        background:
                          'linear-gradient(180deg, rgba(201,170,108,0.45), rgba(201,170,108,0.12))',
                      }}
                    />
                  )}
                  {/* Node */}
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
                      letterSpacing: '2.5px',
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
                      fontSize: 'clamp(24px, 2.4vw, 30px)',
                      lineHeight: 1.2,
                      margin: '0 0 12px',
                      color: '#f3efe7',
                    }}
                  >
                    {item.title}
                  </h2>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: '#a39c92',
                      fontWeight: 300,
                      maxWidth: '620px',
                      margin: 0,
                    }}
                  >
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
            padding: 'clamp(70px, 9vw, 110px) clamp(24px, 6vw, 80px)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 400,
                fontSize: 'clamp(30px, 4vw, 46px)',
                lineHeight: 1.15,
                letterSpacing: '-0.5px',
                margin: '0 0 18px',
                color: '#f3efe7',
              }}
            >
              Experiência a serviço do seu tratamento.
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: '#a39c92',
                fontWeight: 300,
                margin: '0 0 36px',
              }}
            >
              Consultas no Leblon, mediante agendamento.
            </p>
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
                background: 'linear-gradient(180deg, #e6c987 0%, #c6a15b 100%)',
                color: '#060f1e',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '0.4px',
                boxShadow: '0 10px 36px rgba(201,170,108,0.28)',
              }}
            >
              <Calendar size={17} strokeWidth={2} />
              Agendar consulta
            </a>
            <div
              style={{ marginTop: '18px', fontSize: '14px', color: '#948e84', fontWeight: 300 }}
            >
              WhatsApp {PHONE_DISPLAY}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealScript />
    </>
  )
}
