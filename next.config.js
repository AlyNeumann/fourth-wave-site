/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  compiler: {
    chakra: true,
  },
  //this should stop the ethers library error but it's not for some reason....AH!
  webpack: {
    unknownContextCritical: false,
    unknownContextRegExp: /^.\/.*$/
  },
}

module.exports = nextConfig
