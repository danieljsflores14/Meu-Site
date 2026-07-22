import Link from 'next/link'
import { CRM, PHONE_DISPLAY, RQE, WHATSAPP_URL } from './contact'

const navLinks = [
  { href: '/#atuacao', label: 'Áreas de Atuação' },
  { href: '/sobre', label: 'Trajetória' },
  { href: '/#hospitais', label: 'Hospitais' },
  { href: '/#consultorio', label: 'Consultório' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.09)', padding: 'clamp(64px, 7vw, 100px) clamp(24px, 6vw, 120px) 40px' }}>
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(30px, 4vw, 60px)',
        }}
      >
        {/* Brand */}
        <div style={{ minWidth: 0, gridColumn: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                border: '1px solid rgba(198,161,91,0.55)',
                borderRadius: '50%',
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '19px',
                color: '#c6a15b',
                flexShrink: 0,
              }}
            >
              DF
            </span>
            <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '21px', letterSpacing: '.14em' }}>
              DR. DANIEL FLORES
            </span>
          </div>
          <p style={{ maxWidth: '42ch', fontSize: '14px', lineHeight: 1.75, color: '#8b857b', fontWeight: 300 }}>
            Cirurgião geral com foco em alta complexidade: cirurgia oncológica, hepatobiliopancreática,
            emergências e cirurgia robótica e minimamente invasiva.
          </p>
        </div>

        <div>
          <div style={{ fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#c6a15b', marginBottom: '22px' }}>
            Navegação
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} style={{ color: '#b6b0a5', fontSize: '14px' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#c6a15b', marginBottom: '22px' }}>
            Registro
          </div>
          <div style={{ fontSize: '14px', lineHeight: 1.8, color: '#b6b0a5', fontWeight: 300 }}>
            {CRM}
            <br />
            {RQE}
            <br />
            Leblon — Rio de Janeiro
          </div>
        </div>

        <div>
          <div style={{ fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#c6a15b', marginBottom: '22px' }}>
            Contato
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#b6b0a5' }}>
            {PHONE_DISPLAY}
          </a>
          <div style={{ fontSize: '12.5px', color: '#7a746b', marginTop: '6px' }}>WhatsApp &amp; telefone</div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1600px',
          margin: '56px auto 0',
          paddingTop: '26px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '14px',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: '#6f6a61',
          letterSpacing: '.03em',
        }}
      >
        <span>© 2026 Dr. Daniel Flores. Todos os direitos reservados.</span>
        <span>
          {CRM} · {RQE}
        </span>
      </div>
    </footer>
  )
}
