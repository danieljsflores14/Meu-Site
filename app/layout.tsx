import type { Metadata } from 'next'
import { Archivo, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://drdanielflores.com.br'),
  title: 'Dr. Daniel Flores — Cirurgião Geral e Oncológico | Rio de Janeiro',
  description:
    'Cirurgia oncológica, hepatobiliopancreática e robótica de alta complexidade. Consultório no Leblon, Rio de Janeiro. Agendamento pelo WhatsApp.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dr. Daniel Flores',
    title: 'Dr. Daniel Flores — Cirurgião Geral e Oncológico | Rio de Janeiro',
    description:
      'Cirurgia oncológica, hepatobiliopancreática e robótica de alta complexidade. Consultório no Leblon, Rio de Janeiro.',
    url: '/',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Daniel Flores — Cirurgião Geral e Oncológico | Rio de Janeiro',
    description:
      'Cirurgia oncológica, hepatobiliopancreática e robótica de alta complexidade. Consultório no Leblon, Rio de Janeiro.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${archivo.variable}`}>
      <body
        style={{
          margin: 0,
          background: '#060f1e',
          WebkitFontSmoothing: 'antialiased',
          overflowX: 'hidden',
          fontFamily: 'var(--font-archivo), -apple-system, sans-serif',
          color: '#ece7df',
        }}
      >
        {children}
      </body>
    </html>
  )
}
