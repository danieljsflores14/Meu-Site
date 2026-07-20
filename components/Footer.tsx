import { PHONE_DISPLAY, WHATSAPP_URL } from './contact'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.09)', padding: 'clamp(64px,7vw,100px) clamp(24px,6vw,120px) 40px' }}>
      <div id="footerGrid" style={{ maxWidth: '1600px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 'clamp(30px,4vw,60px)' }}>
        <div>
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
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '19px',
                color: '#c6a15b',
              }}
            >
              DF
            </span>
            <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '21px', letterSpacing: '.14em' }}>DR. DANIEL FLORES</span>
          </div>
          <p style={{ maxWidth: '42ch', fontSize: '14px', lineHeight: 1.75, color: '#8b857b', fontWeight: 300 }}>
            Cirurgião geral com foco em alta complexidade: cirurgia oncológica, hepatobiliopancreática, emergências e
            cirurgia robótica e minimamente invasiva.
          </p>
        </div>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#c6a15b', marginBottom: '22px' }}>
            Navegação
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            <a href="/#atuacao" style={{ color: '#b6b0a5', fontSize: '14px', textDecoration: 'none' }}>
              Áreas de Atuação
            </a>
            <a href="/sobre" style={{ color: '#b6b0a5', fontSize: '14px', textDecoration: 'none' }}>
              Trajetória
            </a>
            <a href="/#hospitais" style={{ color: '#b6b0a5', fontSize: '14px', textDecoration: 'none' }}>
              Hospitais
            </a>
            <a href="/#consultorio" style={{ color: '#b6b0a5', fontSize: '14px', textDecoration: 'none' }}>
              Consultório
            </a>
          </div>
        </div>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#c6a15b', marginBottom: '22px' }}>
            Registro
          </div>
          <div style={{ fontSize: '14px', lineHeight: 1.8, color: '#b6b0a5', fontWeight: 300 }}>
            CRM-RJ 52.72115-8
            <br />
            RQE 56396
            <br />
            Leblon — Rio de Janeiro
          </div>
        </div>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '.24em', textTransform: 'uppercase', color: '#c6a15b', marginBottom: '22px' }}>
            Contato
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#b6b0a5', textDecoration: 'none' }}>
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
        <span>CRM-RJ 52.72115-8 · RQE 56396</span>
      </div>
    </footer>
  )
}
