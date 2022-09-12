/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.discordapp.com',
      's.gravatar.com',
      'lh3.googleusercontent.com' // Google account profile picture
    ],
  },
};

module.exports = nextConfig;
