import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Add trailing slashes for static hosting compatibility
  trailingSlash: true,

  // Disable image optimization (not supported on static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
