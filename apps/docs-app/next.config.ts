import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@tagaddod-design/react", "@tabler/icons-react"],
  },
  transpilePackages: ["@tagaddod-design/react", "@tagaddod-design/tokens"],
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Static file serving optimization
  async headers() {
    return [
      {
        source: '/setup-files/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/markdown',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
