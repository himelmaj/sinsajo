import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sinsajo.vercel.app',
      lastModified: new Date(),
      changeFrequency: undefined,    
      priority: 1,
    },
  ]
}