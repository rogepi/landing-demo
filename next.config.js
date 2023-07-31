const { createContentlayerPlugin } = require('next-contentlayer')
const withNextIntl = require('next-intl/plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withContentlayer = createContentlayerPlugin({})

const withPlugins = (plugins) => (config) =>
  plugins.reduce((acc, plugin) => plugin(acc), config)

module.exports = withPlugins([withNextIntl('./lib/i18n/config.ts'), withContentlayer])(
  nextConfig
)
