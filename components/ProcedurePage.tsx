import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import ConsultationCTA from './ConsultationCTA'
import ProcedureCard from './ProcedureCard'
import SectionLabel from './SectionLabel'
import { PHONE_DISPLAY, WHATSAPP_URL } from './contact'
import { getRelatedSurgeries, type Surgery } from '@/data/surgeries'

const BASE_URL = 'https://drdanielflores.com.br'

type ProcedurePageProps = {
  surgery: Surgery
}

export default function ProcedurePage({ surgery }: ProcedurePageProps) {
  const pageUrl = `${BASE_URL}/cirurgias-oncologicas/${surgery.slug}/`
  const relatedSurgeries = getRelatedSurgeries(surgery)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE_URL}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cirurgias oncológicas',
        item: `${BASE_URL}/cirurgias-oncologicas/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: surgery.shortTitle,
        item: pageUrl,
      },
    ],
  }

  const medicalPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: surgery.title,
    description: surgery.metaDescription,
    url: pageUrl,
    dateModified: '2026-07-30',
    inLanguage: 'pt-BR',
    audience: {
      '@type': 'Patient',
    },
    about: {
      '@type': 'SurgicalProcedure',
      name: surgery.shortTitle,
      description: surgery.cardDescription,
    },
    publisher: {
      '@id': `${BASE_URL}/#physician`,
    },
    isPartOf: {
      '@type': 'CollectionPage',
      name: 'Cirurgias oncológicas do aparelho digestivo',
      url: `${BASE_URL}/cirurgias-oncologicas/`,
    },
  }

  return (
    <>
      <script
        id={`procedure-breadcrumb-schema-${surgery.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        id={`medical-page-schema-${surgery.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalPageSchema).replace(/</g, '\\u003c'),
        }}
      />

      <main id="conteudo">
        <header className="procedure-hero">
          <div className="procedure-hero__orb procedure-hero__orb--one" aria-hidden="true" />
          <div className="procedure-hero__orb procedure-hero__orb--two" aria-hidden="true" />
          <div className="procedure-shell procedure-hero__inner">
            <nav className="breadcrumb" aria-label="Navegação estrutural">
              <Link href="/">Início</Link>
              <span aria-hidden="true">/</span>
              <Link href="/cirurgias-oncologicas/">Cirurgias oncológicas</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{surgery.shortTitle}</span>
            </nav>

            <Link href="/cirurgias-oncologicas/" className="procedure-hero__back">
              <ArrowLeft size={15} aria-hidden="true" />
              Ver todas as cirurgias
            </Link>

            <SectionLabel>{surgery.category}</SectionLabel>
            {surgery.expertise && (
              <span className="expertise-badge">Área de expertise do Dr. Daniel Flores</span>
            )}
            <h1>{surgery.title}</h1>
            <p className="procedure-hero__lead">{surgery.heroLead}</p>

            <div className="procedure-highlights" aria-label="Resumo do procedimento">
              {surgery.highlights.map((highlight) => (
                <div className="procedure-highlight" key={highlight.label}>
                  <span>{highlight.label}</span>
                  <p>{highlight.value}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="procedure-content">
          <div className="procedure-shell procedure-layout">
            <article className="procedure-article">
              <section id="entenda" className="article-section">
                <SectionLabel>Entenda a cirurgia</SectionLabel>
                <h2>O que é e qual é o seu papel no tratamento?</h2>
                <div className="article-prose">
                  {surgery.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section id="indicacao" className="article-section">
                <SectionLabel>Indicação individualizada</SectionLabel>
                <h2>Quando a cirurgia pode ser considerada?</h2>
                <p className="article-intro">{surgery.indicationsIntro}</p>
                <div className="criteria-grid">
                  {surgery.indications.map((item) => (
                    <div className="criteria-card" key={item.title}>
                      <span className="criteria-card__icon" aria-hidden="true">
                        <Check size={15} />
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="planejamento" className="article-section">
                <SectionLabel>Estratégia terapêutica</SectionLabel>
                <h2>Como o procedimento é planejado?</h2>
                <p className="article-intro">{surgery.procedureIntro}</p>
                <div className="planning-steps">
                  {surgery.procedureSteps.map((step) => (
                    <div className="planning-step" key={step.title}>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="recuperacao" className="article-section">
                <SectionLabel>Depois da operação</SectionLabel>
                <h2>Recuperação e acompanhamento</h2>
                <p className="article-intro">{surgery.recoveryIntro}</p>
                <div className="recovery-list">
                  {surgery.recovery.map((item, index) => (
                    <div className="recovery-item" key={item.title}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="duvidas" className="article-section">
                <SectionLabel>Informação clara</SectionLabel>
                <h2>Perguntas frequentes</h2>
                <div className="faq-list">
                  {surgery.faqs.map((faq) => (
                    <details className="faq-item" key={faq.question}>
                      <summary>
                        <span>{faq.question}</span>
                        <span className="faq-item__mark" aria-hidden="true" />
                      </summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section id="fontes" className="article-section article-sources">
                <SectionLabel>Referências</SectionLabel>
                <h2>Fontes para este conteúdo</h2>
                <p>
                  Conteúdo educativo elaborado a partir de informações institucionais e diretrizes
                  médicas. As fontes não substituem a análise do caso concreto.
                </p>
                <ul>
                  {surgery.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${source.label}; abre em nova janela`}
                      >
                        {source.label}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            <aside className="procedure-aside" aria-label="Nesta página">
              <div className="procedure-aside__nav">
                <span className="procedure-aside__title">Nesta página</span>
                <a href="#entenda">Entenda a cirurgia</a>
                <a href="#indicacao">Quando pode ser indicada</a>
                <a href="#planejamento">Como é planejada</a>
                <a href="#recuperacao">Recuperação</a>
                <a href="#duvidas">Perguntas frequentes</a>
              </div>

              <div className="medical-note">
                <span>Informação médica</span>
                <p>
                  Este conteúdo é informativo e não substitui avaliação médica individualizada. A
                  indicação e a extensão de qualquer cirurgia dependem do diagnóstico e do
                  estadiamento.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="aside-contact"
                aria-label="Agendar avaliação pelo WhatsApp; abre em nova janela"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>
                  <strong>Agendar avaliação</strong>
                  WhatsApp {PHONE_DISPLAY}
                </span>
              </a>
            </aside>
          </div>
        </section>

        <section className="related-procedures" aria-labelledby="related-procedures-title">
          <div className="procedure-shell">
            <div className="related-procedures__header">
              <div>
                <SectionLabel>Continue explorando</SectionLabel>
                <h2 id="related-procedures-title">Outras cirurgias oncológicas</h2>
              </div>
              <Link href="/cirurgias-oncologicas/" className="text-link">
                Ver todas
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="procedure-card-grid procedure-card-grid--three">
              {relatedSurgeries.map((related) => (
                <ProcedureCard key={related.slug} surgery={related} />
              ))}
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
    </>
  )
}
