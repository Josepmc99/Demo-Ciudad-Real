/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ❌ No interrumpir el build por errores de ESLint
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
