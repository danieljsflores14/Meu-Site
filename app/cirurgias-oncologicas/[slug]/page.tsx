import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProcedurePage from '@/components/ProcedurePage'
import { getSurgery, surgeries } from '@/data/surgeries'

type SurgeryPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return surgeries.map((surgery) => ({ slug: surgery.slug }))
}

export async function generateMetadata({ params }: SurgeryPageProps): Promise<Metadata> {
  const { slug } = await params
  const surgery = getSurgery(slug)

  if (!surgery) {
    notFound()
  }

  const path = `/cirurgias-oncologicas/${surgery.slug}/`

  return {
    title: surgery.metaTitle,
    description: surgery.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      siteName: 'Dr. Daniel Flores',
      title: surgery.metaTitle,
      description: surgery.metaDescription,
      url: path,
      modifiedTime: '2026-07-30T00:00:00-03:00',
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
      title: surgery.metaTitle,
      description: surgery.metaDescription,
      images: ['/og.png'],
    },
  }
}

export default async function SurgeryDetailPage({ params }: SurgeryPageProps) {
  const { slug } = await params
  const surgery = getSurgery(slug)

  if (!surgery) {
    notFound()
  }

  return <ProcedurePage surgery={surgery} />
}
