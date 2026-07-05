import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://drdanielflores.com.br'
const LAST_MODIFIED = '2026-07-05'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
