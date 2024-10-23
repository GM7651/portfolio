/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com', // Add your external domain here
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;
