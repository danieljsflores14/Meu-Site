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
  'Cirurgião geral com foco em alta complexidade: cirurgia oncológica, hepatobiliopancreática, emergências e cirurgia robótica e minimamente invasiva. Formação e docência na UFRJ, membro da primeira equipe de transplante de pâncreas do Rio de Janeiro. Consultório no Leblon, Rio de Janeiro. CRM-RJ 52.72115-8 · RQE 56396.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drdanielflores.com.br'),
  title: 'Dr. Daniel Flores | Cirurgião Geral — Alta Complexidade',
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.drdanielflores.com.br',
    siteName: 'Dr. Daniel Flores',
    title: 'Dr. Daniel Flores | Cirurgião Geral — Alta Complexidade',
    description: DESCRIPTION,
    images: [
      {
        url: '/images/dr-daniel-rosto.png',
        width: 530,
        height: 529,
        alt: 'Dr. Daniel Flores — Cirurgião Geral',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Daniel Flores | Cirurgião Geral — Alta Complexidade',
    description: DESCRIPTION,
    images: ['/images/dr-daniel-rosto.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        {/* Arm scroll-reveal before paint (no FOUC) and guarantee content
            appears even if the React runtime never hydrates. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.setAttribute('data-fx','on');setTimeout(function(){document.querySelectorAll('[data-reveal]').forEach(function(el){el.classList.add('is-in')})},4000)}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
