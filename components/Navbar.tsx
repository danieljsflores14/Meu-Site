import { Calendar } from 'lucide-react'
import { WHATSAPP_URL } from './contact'

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px clamp(24px, 6vw, 80px)',
        background: 'rgba(8,18,30,0.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(201,170,108,0.14)',
      }}
    >
      <a
        href="#topo"
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Dr. Daniel Flores — Cirurgião Geral"
          style={{
            height: 'clamp(60px, 7vw, 84px)',
            width: 'auto',
            display: 'block',
          }}
        />
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 40px)' }}>
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '34px' }}>
          <a
            href="#atuacao"
            className="hover:text-[#f3f0e9] transition-colors duration-200"
            style={{
              textDecoration: 'none',
              color: '#b3c0d0',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.3px',
            }}
          >
            Áreas de Atuação
          </a>
          <a
            href="#hospitais"
            className="hover:text-[#f3f0e9] transition-colors duration-200"
            style={{
              textDecoration: 'none',
              color: '#b3c0d0',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.3px',
            }}
          >
            Hospitais
          </a>
          <a
            href="#consultorio"
            className="hover:text-[#f3f0e9] transition-colors duration-200"
            style={{
              textDecoration: 'none',
              color: '#b3c0d0',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.3px',
            }}
          >
            Consultório
          </a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,170,108,0.34)] transition-all duration-200"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '2px',
            background: 'linear-gradient(180deg, #d4b676 0%, #c19a52 100%)',
            color: '#1a1206',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.4px',
            boxShadow: '0 6px 24px rgba(201,170,108,0.22)',
          }}
        >
          <Calendar size={16} />
          Agendar
        </a>
      </div>
    </nav>
  )
}
