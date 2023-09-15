/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  eslint: { dirs: ["src"] }
};

module.exports = nextConfig;
