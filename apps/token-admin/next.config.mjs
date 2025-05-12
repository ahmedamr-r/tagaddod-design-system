/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@tagaddod/tokens', '@tagaddod/react'],
  experimental: {
    // Allows us to import from packages in the monorepo
    externalDir: true,
  },
  eslint: {
    // Skip ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
