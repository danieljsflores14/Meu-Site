import AreasDeAtuacao from '@/components/AreasDeAtuacao'
import Consultorio from '@/components/Consultorio'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Hospitais from '@/components/Hospitais'
import Navbar from '@/components/Navbar'
import ScrollFX from '@/components/ScrollFX'
import StatsBand from '@/components/StatsBand'
import Trajetoria from '@/components/Trajetoria'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://drdanielflores.com.br/#physician',
  name: 'Dr. Daniel Flores',
  description:
    'Cirurgião geral dedicado à alta complexidade: cirurgia oncológica do aparelho digestivo, cirurgia hepatobiliopancreática, emergências cirúrgicas e cirurgia robótica e minimamente invasiva.',
  url: 'https://drdanielflores.com.br/',
  image: 'https://drdanielflores.com.br/images/dr-daniel-retrato.webp',
  telephone: '+5521992932940',
  medicalSpecialty: ['Surgical', 'Oncologic'],
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'CRM-RJ', value: '52.72115-8' },
    { '@type': 'PropertyValue', propertyID: 'RQE', value: '56396' },
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidade Federal do Rio de Janeiro (UFRJ)',
  },
  hospitalAffiliation: [
    { '@type': 'Hospital', name: 'Hospital Copa Star' },
    { '@type': 'Hospital', name: 'Hospital Samaritano Barra' },
    { '@type': 'Hospital', name: "Hospital Barra D'Or" },
    { '@type': 'Hospital', name: 'Hospital Samaritano Botafogo' },
    { '@type': 'Hospital', name: 'Hospital Federal de Ipanema' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenida Ataulfo de Paiva, 135 — Sala 1503, Leblon',
    addressLocality: 'Rio de Janeiro',
    addressRegion: 'RJ',
    postalCode: '22440-901',
    addressCountry: 'BR',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <AreasDeAtuacao />
        <Trajetoria />
        <Hospitais />
        <Consultorio />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollFX />
    </>
  )
}
