/** @type {import('next').NextConfig} */
const nextConfig = {
    sentry: {
        hideSourceMaps: process.env.NEXT_PUBLIC_VERCEL_ENV === "production",
      },
}

module.exports = nextConfig
