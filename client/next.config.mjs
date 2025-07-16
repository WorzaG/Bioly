/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/@:username',
            destination: '/profile/:username',
          },
        ]
      },
};

export default nextConfig;
