/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    // formats: ['image/jpg', 'image/jpeg', 'image/png', 'image/svg'],
  },
  env: {
    API_URL: 'http://127.0.0.1:1337',
    GRAPHQL_API_URL: 'http://127.0.0.1:1337/graphql',
  },
}

module.exports = nextConfig
