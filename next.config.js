/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Replace 'portfolio' below with your exact GitHub repo name
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
