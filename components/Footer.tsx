export default function Footer() {
  return (
    <footer
      style={{
        background: '#070f19',
        padding: 'clamp(50px, 7vw, 72px) clamp(24px, 6vw, 80px) 36px',
        borderTop: '1px solid rgba(201,170,108,0.12)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Main footer row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '36px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Brand column */}
          <div style={{ maxWidth: '360px' }}>
            <div
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '26px',
                fontWeight: 500,
                color: '#f3f0e9',
                marginBottom: '14px',
              }}
            >
              Dr. Daniel Flores
            </div>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#8b9aac',
                fontWeight: 300,
                margin: 0,
              }}
            >
              Cirurgião geral com foco em alta complexidade: cirurgia oncológica,
              hepatobiliopancreática, emergências e cirurgia robótica e minimamente invasiva.
            </p>
          </div>

          {/* Links columns */}
          <div style={{ display: 'flex', gap: 'clamp(40px, 6vw, 80px)', flexWrap: 'wrap' }}>
            {/* Navigation */}
            <div>
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#c9aa6c',
                  marginBottom: '16px',
                }}
              >
                Navegação
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {[
                  { href: '#atuacao', label: 'Áreas de Atuação' },
                  { href: '#hospitais', label: 'Hospitais' },
                  { href: '#consultorio', label: 'Consultório' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="hover:text-[#f3f0e9] transition-colors duration-200"
                    style={{
                      textDecoration: 'none',
                      color: '#b3c0d0',
                      fontSize: '14px',
                      fontWeight: 400,
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* CRM / Registration */}
            <div>
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#c9aa6c',
                  marginBottom: '16px',
                }}
              >
                Registro
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <span style={{ color: '#e8eef5', fontSize: '14px', fontWeight: 500 }}>
                  CRM-RJ 52.72115-8
                </span>
                <span style={{ color: '#8b9aac', fontSize: '14px', fontWeight: 300 }}>
                  Leblon — Rio de Janeiro
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '14px',
            paddingTop: '26px',
          }}
        >
          <span style={{ fontSize: '13px', color: '#6b7889', fontWeight: 300 }}>
            © 2026 Dr. Daniel Flores. Todos os direitos reservados.
          </span>
          <span style={{ fontSize: '13px', color: '#6b7889', fontWeight: 300 }}>
            CRM-RJ 52.72115-8
          </span>
        </div>
      </div>
    </footer>
  )
}
