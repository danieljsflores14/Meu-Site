import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ScrollFX from '@/components/ScrollFX'

export default function SurgeriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Navbar />
      {children}
      <Footer />
      <ScrollFX />
    </>
  )
}
