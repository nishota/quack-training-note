/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'contents.quack-teal.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

module.exports = nextConfig
