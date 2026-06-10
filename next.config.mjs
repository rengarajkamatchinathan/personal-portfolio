/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    // Captured at build time → reflects the last deploy. The header's "last sync"
    // badge formats this relative to the visitor's current time. Updates itself on
    // every Vercel deploy (and every local `next dev` start) — no manual edits.
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
}

export default nextConfig
