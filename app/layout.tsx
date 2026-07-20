import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
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
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <body
        style={{
          margin: 0,
          background: '#08121e',
          WebkitFontSmoothing: 'antialiased',
          overflowX: 'hidden',
          fontFamily: 'var(--font-manrope), -apple-system, sans-serif',
          color: '#e8eef5',
        }}
      >
        {children}
      </body>
    </html>
  )
}
