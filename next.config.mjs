/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol:'https',
          hostname: 'api.xaidezkashmir.com'
        }
      ],
    },
  };

export default nextConfig;
