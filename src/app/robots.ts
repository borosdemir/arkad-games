import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/registro'], // Evitamos indexar formularios
    },
    sitemap: 'https://arkad-games.vercel.app/sitemap.xml',
  }
}
