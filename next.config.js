/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Add these settings for image optimization
  images: {
    unoptimized: true,
  },

  // Keep only basic rewrites
  async rewrites() {
    return [
      {
        source: '/todo/:path*',
        destination: '/todo/:path*',
      }
    ]
  }
}

module.exports = nextConfig