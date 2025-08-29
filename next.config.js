/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.lua$/i,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = nextConfig;