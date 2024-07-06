/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '4000',
                pathname: '/images/uploads/**',
            },
        ],
    },
};

export default nextConfig;
