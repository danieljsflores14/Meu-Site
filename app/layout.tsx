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
  title: 'Dr. Daniel Flores | Cirurgião Geral',
  description:
    'Cirurgião geral com foco em alta complexidade: cirurgia oncológica, hepatobiliopancreática, emergências e cirurgia robótica e minimamente invasiva. Formação e docência na UFRJ, membro da primeira equipe de transplante de pâncreas do Rio de Janeiro. Consultório no Leblon, Rio de Janeiro. CRM-RJ 52.72115-8.',
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
