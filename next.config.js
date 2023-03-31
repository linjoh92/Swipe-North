/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  features: {
    midwayRuntime: true,
  },
}

module.exports = nextConfig;
