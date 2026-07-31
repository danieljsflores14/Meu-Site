import type { Metadata } from 'next'
import { ArrowDown, CheckCircle2, HeartHandshake, ScanSearch, UsersRound } from 'lucide-react'
import Link from 'next/link'
import ConsultationCTA from '@/components/ConsultationCTA'
import ProcedureCard from '@/components/ProcedureCard'
import SectionLabel from '@/components/SectionLabel'
import { surgeries, surgeryGroups, type SurgeryGroup } from '@/data/surgeries'

const BASE_URL = 'https://drdanielflores.com.br'

export const metadata: Metadata = {
  title: 'Cirurgias Oncológicas do Aparelho Digestivo | Dr. Daniel Flores',
  description:
    'Conheça as principais cirurgias oncológicas do aparelho digestivo realizadas pelo Dr. Daniel Flores, incluindo pâncreas, fígado, vias biliares, estômago, intestino, cólon e reto.',
  alternates: { canonical: '/cirurgias-oncologicas/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dr. Daniel Flores',
    title: 'Cirurgias Oncológicas do Aparelho Digestivo',
    description:
      'Informação clara sobre operações de alta complexidade, da indicação ao acompanhamento.',
    url: '/cirurgias-oncologicas/',
    images: [
      {
        url: '/og.png',
        width: 1730,
        height: 909,
        alt: 'Cirurgias Oncológicas do Aparelho Digestivo — Dr. Daniel Flores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cirurgias Oncológicas do Aparelho Digestivo',
    description:
      'Informação clara sobre operações de alta complexidade, da indicação ao acompanhamento.',
    images: ['/og.png'],
  },
}

const careSteps = [
  {
    icon: ScanSearch,
    title: 'Diagnóstico e estadiamento',
    text: 'Imagens, anatomopatológico e condições clínicas são analisados em conjunto para compreender a extensão da doença.',
  },
  {
    icon: UsersRound,
    title: 'Decisão multidisciplinar',
    text: 'A sequência entre cirurgia, oncologia, endoscopia, radiologia e outras terapias é definida para cada pessoa.',
  },
  {
    icon: HeartHandshake,
    title: 'Recuperação acompanhada',
    text: 'Nutrição, função dos órgãos operados e continuidade do tratamento fazem parte do cuidado depois da cirurgia.',
  },
]

export default function SurgeriesHubPage() {
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
    ],
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Cirurgias oncológicas do aparelho digestivo',
    description:
      'Conteúdo educativo sobre as principais cirurgias oncológicas do aparelho digestivo realizadas pelo Dr. Daniel Flores.',
    url: `${BASE_URL}/cirurgias-oncologicas/`,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${BASE_URL}/#physician` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: surgeries.map((surgery, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: surgery.shortTitle,
        url: `${BASE_URL}/cirurgias-oncologicas/${surgery.slug}/`,
      })),
    },
  }

  return (
    <>
      <script
        id="surgeries-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        id="surgeries-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema).replace(/</g, '\\u003c'),
        }}
      />

      <main id="conteudo">
        <header className="surgeries-hero">
          <div className="surgeries-hero__line surgeries-hero__line--one" aria-hidden="true" />
          <div className="surgeries-hero__line surgeries-hero__line--two" aria-hidden="true" />
          <div className="procedure-shell surgeries-hero__inner">
            <nav className="breadcrumb" aria-label="Navegação estrutural">
              <Link href="/">Início</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Cirurgias oncológicas</span>
            </nav>
            <SectionLabel>Cirurgia oncológica de alta complexidade</SectionLabel>
            <h1>
              Cirurgias oncológicas
              <br />
              do <em>aparelho digestivo</em>.
            </h1>
            <p>
              Informação clara para compreender por que uma cirurgia pode ser indicada, como ela é
              planejada e o que faz parte da recuperação. Cada decisão respeita o diagnóstico, o
              estágio da doença e a realidade de cada paciente.
            </p>
            <a href="#procedimentos" className="hero-scroll-link">
              Conhecer os procedimentos
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </header>

        <section className="surgeries-intro" aria-labelledby="surgeries-intro-title">
          <div className="procedure-shell surgeries-intro__grid">
            <div>
              <SectionLabel>Precisão em cada decisão</SectionLabel>
              <h2 id="surgeries-intro-title">
                A operação é uma parte de um plano maior de tratamento.
              </h2>
            </div>
            <div className="surgeries-intro__copy">
              <p>
                Em oncologia, a melhor cirurgia não é necessariamente a maior ou a mais
                tecnológica. É aquela que respeita os princípios oncológicos, pode ser realizada
                com segurança e se integra às outras etapas do cuidado.
              </p>
              <p>
                Os conteúdos abaixo apresentam informações gerais. A indicação, a extensão e a via
                de acesso — aberta, laparoscópica ou robótica — só podem ser definidas depois de uma
                avaliação completa.
              </p>
              <span>
                <CheckCircle2 size={17} aria-hidden="true" />
                Conteúdo educativo, sem promessas e com referências médicas.
              </span>
            </div>
          </div>
        </section>

        <section id="procedimentos" className="surgeries-catalog">
          <div className="procedure-shell">
            {(Object.keys(surgeryGroups) as SurgeryGroup[]).map((groupKey) => {
              const group = surgeryGroups[groupKey]
              const groupSurgeries = surgeries.filter((surgery) => surgery.group === groupKey)

              return (
                <div className="surgery-group" key={groupKey}>
                  <div className="surgery-group__header">
                    <div>
                      <SectionLabel>{group.eyebrow}</SectionLabel>
                      <h2>{group.title}</h2>
                    </div>
                    <p>{group.description}</p>
                  </div>
                  <div className="procedure-card-grid">
                    {groupSurgeries.map((surgery) => (
                      <ProcedureCard
                        key={surgery.slug}
                        surgery={surgery}
                        index={surgery.order - 1}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="care-path" aria-labelledby="care-path-title">
          <div className="procedure-shell">
            <div className="care-path__header">
              <SectionLabel align="center">Do diagnóstico ao seguimento</SectionLabel>
              <h2 id="care-path-title">Como uma estratégia cirúrgica é construída</h2>
              <p>
                O plano é individual e pode mudar conforme novos exames, resposta a tratamentos ou
                achados durante o acompanhamento.
              </p>
            </div>
            <div className="care-path__grid">
              {careSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <article key={step.title}>
                    <div className="care-path__number">{String(index + 1).padStart(2, '0')}</div>
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <ConsultationCTA
          title="A cirurgia certa começa por uma avaliação precisa."
          description="Uma consulta permite revisar o diagnóstico, os exames e as alternativas possíveis antes de definir qualquer procedimento."
        />
      </main>
    </>
  )
}
