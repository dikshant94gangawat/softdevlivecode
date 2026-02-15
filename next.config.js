const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // No custom webpack aliases required — components use Next.js Link directly now.
  webpack: (config) => config,
};

module.exports = nextConfig;

