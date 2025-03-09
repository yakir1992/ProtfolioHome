/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Configure images for static export
  images: {
    unoptimized: true,
  },

  // Add rewrites for development only (these don't apply to static exports)
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
  },

  // Explicitly set output to export
  output: 'export',

  // Turn off image optimization explicitly
  experimental: {
    images: {
      allowFutureImage: true,
    },
  }
}

module.exports = nextConfig