const coveragePluginOptions = {
  instrumentLog: {
    level: 'trace',
    enableTrace: true
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [
      ["swc-plugin-coverage-instrument", coveragePluginOptions]
    ]
  }
}

module.exports = nextConfig
