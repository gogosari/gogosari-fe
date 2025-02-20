import type { NextConfig } from 'next'
import { resolve } from 'path'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.alias['@'] = resolve(__dirname)

    return config
  },
}

export default nextConfig
