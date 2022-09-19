/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'libs'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
