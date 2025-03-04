import type { NextConfig } from 'next'
import { resolve } from 'path'

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: '/api/v1/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/:path*`,
    },
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.alias['@'] = resolve(__dirname)

    return config
  },
}

export default nextConfig
