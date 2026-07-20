import Link from 'next/link'
import { WHATSAPP_URL } from './contact'

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
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#ece7df', textDecoration: 'none' }}>
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
          }}
        >
          DF
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '19px', letterSpacing: '.16em', fontWeight: 500 }}>
            DR. DANIEL FLORES
          </span>
          <span style={{ fontSize: '9.5px', letterSpacing: '.34em', textTransform: 'uppercase', color: '#8b857b' }}>
            Cirurgião Geral
          </span>
        </span>
      </Link>

      <div id="navLinks" className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 2.6vw, 44px)' }}>
        <a href="/#atuacao" style={{ color: '#c8c2b8', fontSize: '13px', letterSpacing: '.06em', whiteSpace: 'nowrap', textDecoration: 'none' }}>
          Áreas de Atuação
        </a>
        <Link href="/sobre" style={{ color: '#c8c2b8', fontSize: '13px', letterSpacing: '.06em', textDecoration: 'none' }}>
          Trajetória
        </Link>
        <a href="/#hospitais" style={{ color: '#c8c2b8', fontSize: '13px', letterSpacing: '.06em', textDecoration: 'none' }}>
          Hospitais
        </a>
        <a href="/#consultorio" style={{ color: '#c8c2b8', fontSize: '13px', letterSpacing: '.06em', textDecoration: 'none' }}>
          Consultório
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
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
            textDecoration: 'none',
          }}
        >
          Agendar
        </a>
      </div>

      <button id="navBurger" className="nav-burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="navLinks">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
