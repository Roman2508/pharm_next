/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['localhost'],
    // formats: ['image/jpg', 'image/jpeg', 'image/png', 'image/svg'],
  },
  env: {
    API_URL: 'http://localhost:1337',
    GRAPHQL_API_URL: 'http://localhost:1337/graphql',
    SENDGRID_API_KEY: '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',
  },
}

module.exports = nextConfig
