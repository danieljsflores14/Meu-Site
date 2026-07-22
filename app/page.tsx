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

export default function Home() {
  return (
    <>
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
