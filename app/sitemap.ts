import type { MetadataRoute } from 'next'
import { surgeries } from '@/data/surgeries'

export const dynamic = 'force-static'

const BASE_URL = 'https://drdanielflores.com.br'
const LAST_MODIFIED = '2026-07-30'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/sobre/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cirurgias-oncologicas/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...surgeries.map((surgery) => ({
      url: `${BASE_URL}/cirurgias-oncologicas/${surgery.slug}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ]
}
