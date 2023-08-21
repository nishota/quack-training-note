/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mdbcdn.b-cdn.net',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

module.exports = nextConfig
