/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['miro.medium.com'],
  },
  exportPathMap: async function (
    defaultPathMap,
    { home }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig