  /**
   * @type {import('next').NextConfig}
   */
// `next-pwa` config should be passed here
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

// Use `withPWA` and pass general Next.js config
module.exports = withPWA({    
  webpack5: true,
  webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
  },
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy'],
    unoptimized: true,
  },
 
  output: "standalone"
});









