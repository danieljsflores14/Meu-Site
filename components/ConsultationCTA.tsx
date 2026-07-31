import { ArrowRight, Calendar } from 'lucide-react'
import { PHONE_DISPLAY, WHATSAPP_URL } from './contact'
import SectionLabel from './SectionLabel'

type ConsultationCTAProps = {
  eyebrow?: string
  title?: string
  description?: string
}

export default function ConsultationCTA({
  eyebrow = 'Avaliação individualizada',
  title = 'Cada caso começa com uma análise cuidadosa.',
  description = 'Leve seus exames e laudos para uma consulta. A indicação cirúrgica e a sequência do tratamento são definidas de acordo com o diagnóstico, o estadiamento e suas condições clínicas.',
}: ConsultationCTAProps) {
  return (
    <section className="consultation-cta" aria-labelledby="consultation-cta-title">
      <div className="consultation-cta__glow" aria-hidden="true" />
      <div className="consultation-cta__inner">
        <SectionLabel align="center">{eyebrow}</SectionLabel>
        <h2 id="consultation-cta-title">{title}</h2>
        <p>{description}</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-button"
          aria-label="Agendar consulta pelo WhatsApp; abre em nova janela"
        >
          <Calendar size={17} aria-hidden="true" />
          Agendar consulta
          <ArrowRight size={17} aria-hidden="true" />
        </a>
        <span className="consultation-cta__phone">WhatsApp {PHONE_DISPLAY}</span>
      </div>
    </section>
  )
}
