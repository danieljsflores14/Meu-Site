import type { Metadata } from 'next'
import { Archivo, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-archivo',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const DESCRIPTION =
  'Cirurgião geral com foco em alta complexidade: cirurgia oncológica do aparelho digestivo, hepatobiliopancreática, tumores neuroendócrinos, emergências e cirurgia robótica e minimamente invasiva. Formação e docência na UFRJ. Consultório no Leblon, Rio de Janeiro. CRM-RJ 52.72115-8 · RQE 56396.'

export const metadata: Metadata = {
  metadataBase: new URL('https://drdanielflores.com.br'),
  title: 'Dr. Daniel Flores | Cirurgião Geral — Alta Complexidade',
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://drdanielflores.com.br',
    siteName: 'Dr. Daniel Flores',
    title: 'Dr. Daniel Flores | Cirurgião Geral — Alta Complexidade',
    description: DESCRIPTION,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Daniel Flores — Cirurgião Geral',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Daniel Flores | Cirurgião Geral — Alta Complexidade',
    description: DESCRIPTION,
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        {/* Arm scroll-reveal before paint (no FOUC) and guarantee content
            appears even if the React runtime never hydrates. */}
        <script
          id="scroll-reveal-bootstrap"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.setAttribute('data-fx','on');setTimeout(function(){document.querySelectorAll('[data-reveal]').forEach(function(el){el.classList.add('is-in')})},4000)}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
