/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['localhost', 'pharm.zt.ua', 'pharm.vercel.app', 'pharm-strapi.onrender.com'],
    minimumCacheTTL: 1200,
    // formats: ['image/jpg', 'image/jpeg', 'image/png', 'image/svg'],
  },
  env: {
    // API_URL: 'http://localhost:1337',
    // GRAPHQL_API_URL: 'http://localhost:1337/graphql',
    API_URL: 'https://pharm-strapi.onrender.com',
    GRAPHQL_API_URL: 'https://pharm-strapi.onrender.com/graphql',
    SENDGRID_API_KEY: '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',
  },
}

module.exports = nextConfig
