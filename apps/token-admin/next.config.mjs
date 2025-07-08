/** @type {import('next').NextConfig} */
const nextConfig = {
  // Using published npm packages only
  eslint: {
    // Skip ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
