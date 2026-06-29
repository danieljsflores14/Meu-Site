import AreasDeAtuacao from '@/components/AreasDeAtuacao'
import Consultorio from '@/components/Consultorio'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Hospitais from '@/components/Hospitais'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AreasDeAtuacao />
        <Consultorio />
        <Hospitais />
      </main>
      <Footer />
    </>
  )
}
