/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value:
                            "default-src 'self' data: 'unsafe-inline' *.buildyourresume.online buildyourresume.online",
                    }
                ],
            },
        ];
    },
}

module.exports = nextConfig
