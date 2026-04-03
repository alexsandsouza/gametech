/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint errors won't block production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript errors won't block production builds
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
