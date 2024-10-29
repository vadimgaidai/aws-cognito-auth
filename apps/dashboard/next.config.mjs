/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/tailwind-config', '@repo/ui'],
}

export default nextConfig
