/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ❌ No interrumpir el build por errores de ESLint
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
