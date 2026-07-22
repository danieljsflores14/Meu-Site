import Link from 'next/link'
import { WHATSAPP_URL } from './contact'

const navLinks = [
  { href: '/#atuacao', label: 'Áreas de Atuação' },
  { href: '/sobre', label: 'Trajetória' },
  { href: '/#hospitais', label: 'Hospitais' },
  { href: '/#consultorio', label: 'Consultório' },
]

export default function Navbar() {
  return (
    <nav
      id="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '22px clamp(24px, 6vw, 120px)',
        borderBottom: '1px solid rgba(255,255,255,0)',
        transition: 'background .5s ease, border-color .5s ease, backdrop-filter .5s ease',
      }}
    >
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#ece7df' }}>
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
            letterSpacing: '.04em',
            color: '#c6a15b',
            flexShrink: 0,
          }}
        >
          DF
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '19px',
              letterSpacing: '.16em',
              fontWeight: 500,
            }}
          >
            DR. DANIEL FLORES
          </span>
          <span
            style={{
              fontSize: '9.5px',
              letterSpacing: '.34em',
              textTransform: 'uppercase',
              color: '#8b857b',
            }}
          >
            Cirurgião Geral
          </span>
        </span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 2.6vw, 44px)' }}>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 2.6vw, 44px)' }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ color: '#c8c2b8', fontSize: '13px', letterSpacing: '.06em', whiteSpace: 'nowrap' }}
            >
              {label}
            </Link>
          ))}
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#c6a15b] hover:!text-[#060f1e] hover:border-[#c6a15b] transition-colors duration-300"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            padding: '12px 26px',
            border: '1px solid rgba(198,161,91,0.6)',
            borderRadius: '100px',
            color: '#e6c987',
            fontSize: '12.5px',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Agendar
        </a>
      </div>
    </nav>
  )
}
