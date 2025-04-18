/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://xaidezkashmir.com', 
    generateRobotsTxt: true,
    sitemapSize: 5000, 
    changefreq: 'weekly',
    transform: async (config, path) => {
        // Default values
        let priority = 0.7;
        let changefreq = 'weekly';
    
        if (path === '/') {
          priority = 1.0;
          changefreq = 'daily';
} else if (path.startsWith('/about') || path.startsWith('/contact') || path.startsWith('/products') ||  path.startsWith('/photos') || path.startsWith('/videos')) {
priority = 0.8;
        } else if (
          path.includes('policy') ||
          path.includes('terms') ||
          path.includes('disclaimer')
        ) {
          priority = 0.5;
          changefreq = 'yearly';
        }
    
        return {
          loc: path,
          changefreq,
          priority,
          lastmod: new Date().toISOString(),
        };
      },
    exclude: ['/404', '/500'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  }
  