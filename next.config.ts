import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` produces a fully self-contained `out/` folder.
  // Deploys as pure static files to Netlify / Vercel / GitHub Pages / any CDN.
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
