const areas = [
  {
    title: 'Cirurgia Oncológica',
    description:
      'Ressecção de tumores do aparelho digestivo com trabalho integrado e multidisciplinar — o tratamento é planejado em conjunto com oncologista, clínico, radioterapeuta e demais especialistas, definindo a melhor estratégia para cada paciente.',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Cirurgia HPB',
    description:
      'Cirurgia hepatobiliopancreática de alta complexidade — fígado, vias biliares e pâncreas — com técnica refinada e segurança em cada etapa.',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
  },
  {
    title: 'Emergências Cirúrgicas',
    description:
      'Conduta imediata e segura nos quadros agudos do abdome, com decisão rápida e suporte cirúrgico em ambiente de alta complexidade.',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
      </svg>
    ),
  },
  {
    title: 'Cirurgia Robótica e Minimamente Invasiva',
    description:
      'Plataformas robóticas e técnicas minimamente invasivas para maior precisão, menor trauma e recuperação mais rápida — mesmo em procedimentos de alta complexidade.',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
]

export default function AreasDeAtuacao() {
  return (
    <section
      id="atuacao"
      style={{
        background: 'linear-gradient(180deg, #08121e 0%, #0b1828 100%)',
        padding: 'clamp(80px, 11vw, 150px) clamp(24px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ maxWidth: '700px', marginBottom: 'clamp(50px, 7vw, 84px)' }}>
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
              Áreas de Atuação
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 400,
              fontSize: 'clamp(34px, 4.4vw, 56px)',
              lineHeight: 1.08,
              letterSpacing: '-0.5px',
              margin: '0 0 18px',
              color: '#f3f0e9',
            }}
          >
            Quatro frentes, um único
            <br />
            padrão de excelência.
          </h2>

          <p style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#93a2b4', fontWeight: 300, margin: 0 }}>
            Cirurgião geral dedicado à alta complexidade — onde experiência, técnica e tecnologia se
            encontram em cada procedimento.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {areas.map((area) => (
            <article
              key={area.title}
              className="card-hover"
              style={{
                position: 'relative',
                padding: '44px 36px 40px',
                background: 'rgba(255,255,255,0.022)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '3px',
                  background: 'rgba(201,170,108,0.1)',
                  border: '1px solid rgba(201,170,108,0.28)',
                  color: '#d4b676',
                  marginBottom: '30px',
                }}
              >
                {area.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontWeight: 500,
                  fontSize: '27px',
                  margin: '0 0 14px',
                  color: '#f3f0e9',
                }}
              >
                {area.title}
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: 1.65,
                  color: '#a7b5c6',
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
