/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Since adding .test.tsx files was causing bugs during build, I added this rule for resolution between page and page test files.
  // https://github.com/vercel/next.js/discussions/34249
  pageExtensions: ['page.tsx'],
}

module.exports = nextConfig
