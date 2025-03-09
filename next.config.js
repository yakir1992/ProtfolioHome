/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Add these settings for image optimization
  images: {
    unoptimized: true,
  },

  // Use more specific rewrites for the todo app
  async rewrites() {
    return [
      {
        source: '/todo',
        destination: '/todo',
      },
      {
        source: '/todo/:path*',
        destination: '/todo/:path*',
      }
    ]
  }
}

module.exports = nextConfig