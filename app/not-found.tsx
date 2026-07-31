import { ArrowLeft, Stethoscope } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ScrollFX from '@/components/ScrollFX'
import SectionLabel from '@/components/SectionLabel'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="conteudo" className="not-found-page">
        <div className="not-found-page__ring" aria-hidden="true" />
        <div className="not-found-page__inner">
          <SectionLabel>Página não encontrada</SectionLabel>
          <span className="not-found-page__code">404</span>
          <h1>O endereço que você procurou não está disponível.</h1>
          <p>
            Você pode voltar ao início ou conhecer os conteúdos sobre cirurgias oncológicas do
            aparelho digestivo.
          </p>
          <div className="not-found-page__actions">
            <Link href="/" className="gold-button">
              <ArrowLeft size={17} aria-hidden="true" />
              Voltar ao início
            </Link>
            <Link href="/cirurgias-oncologicas/" className="not-found-page__secondary">
              <Stethoscope size={17} aria-hidden="true" />
              Ver cirurgias oncológicas
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollFX />
    </>
  )
}
