/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['miro.medium.com'],
  },
  experimental: {
    appDir: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig