import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

type CSSVars = React.CSSProperties & Record<`--${string}`, string>

const areas = [
  {
    num: '01',
    delay: '0ms',
    title: 'Cirurgia Oncológica',
    desc: 'Ressecção de tumores do aparelho digestivo com trabalho integrado e multidisciplinar, incluindo expertise no tratamento cirúrgico de tumores neuroendócrinos do intestino delgado e do pâncreas.',
    href: '/cirurgias-oncologicas/',
  },
  {
    num: '02',
    delay: '100ms',
    title: 'Cirurgia HPB',
    desc: 'Cirurgia hepatobiliopancreática de alta complexidade — fígado, vias biliares e pâncreas — com técnica refinada e segurança em cada etapa.',
    href: '/cirurgias-oncologicas/',
  },
  {
    num: '03',
    delay: '200ms',
    title: 'Emergências Cirúrgicas',
    desc: 'Conduta imediata e segura nos quadros agudos do abdome, com decisão rápida e suporte cirúrgico em ambiente de alta complexidade.',
  },
  {
    num: '04',
    delay: '300ms',
    title: 'Cirurgia Robótica e Minimamente Invasiva',
    desc: 'Plataformas robóticas e técnicas minimamente invasivas para maior precisão, menor trauma e recuperação mais rápida — mesmo em procedimentos de alta complexidade.',
  },
]

export default function AreasDeAtuacao() {
  return (
    <section
      id="atuacao"
      style={{
        padding: 'clamp(90px, 11vw, 170px) clamp(24px, 6vw, 120px)',
        maxWidth: '1600px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
        <span
          style={{
            width: '46px',
            height: '1px',
            background: 'linear-gradient(90deg, #c6a15b, transparent)',
          }}
        />
        <span
          data-reveal="up"
          style={{
            fontSize: '12px',
            letterSpacing: '.32em',
            textTransform: 'uppercase',
            color: '#c6a15b',
          }}
        >
          Áreas de Atuação
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '30px',
          marginBottom: 'clamp(50px, 6vw, 88px)',
        }}
      >
        <h2
          data-reveal="up"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontWeight: 400,
            fontSize: 'clamp(34px, 4.6vw, 68px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            maxWidth: '18ch',
          }}
        >
          Quatro frentes, um único{' '}
          <span style={{ fontStyle: 'italic', color: '#c6a15b' }}>padrão de excelência.</span>
        </h2>
        <p
          data-reveal="up"
          style={
            {
              maxWidth: '44ch',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#9a938a',
              fontWeight: 300,
              ['--d']: '140ms',
            } as CSSVars
          }
        >
          Cirurgião geral dedicado à alta complexidade — onde experiência, técnica e tecnologia se
          encontram em cada procedimento.
        </p>
      </div>

      <div
        className="areas-grid"
        style={{
          gap: '1px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {areas.map((area) => (
          <article
            key={area.num}
            data-reveal="up"
            className="area-card"
            style={
              {
                background: '#060f1e',
                padding: 'clamp(34px, 3vw, 52px)',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'background .5s ease',
                ['--d']: area.delay,
              } as CSSVars
            }
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginBottom: 'auto',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '52px',
                  lineHeight: 1,
                  color: 'rgba(198,161,91,0.45)',
                }}
              >
                {area.num}
              </span>
              <span
                aria-hidden="true"
                style={{
                  width: '34px',
                  height: '34px',
                  border: '1px solid rgba(198,161,91,0.4)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c6a15b',
                  fontSize: '15px',
                }}
              >
                ↗
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontWeight: 500,
                fontSize: 'clamp(24px, 2vw, 30px)',
                margin: '34px 0 16px',
                letterSpacing: '-0.005em',
              }}
            >
              {area.title}
            </h3>
            <p
              style={{
                fontSize: '14.5px',
                lineHeight: 1.72,
                color: '#948e84',
                fontWeight: 300,
              }}
            >
              {area.desc}
            </p>

            {'href' in area && area.href && (
              <Link href={area.href} className="area-card__link">
                Conhecer as cirurgias
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
