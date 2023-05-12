/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com", "files.stripe.com"],
  },
};

module.exports = nextConfig;
