// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/:name(i18n|ab-tests|cache-adapter|cache-in-memory|classnames-minifier|config|context|middleware-chain|router)/:path*",
                destination: "/docs/:name",
                statusCode: 308,
            },
            {
                source: "/docs/middleware-chain",
                destination: "/docs/proxy-chain",
                statusCode: 308,
            },
            {
                source: "/getters",
                destination: "/docs/server-getters",
                statusCode: 308,
            },
            {
                source: "/docs/getters",
                destination: "/docs/server-getters",
                statusCode: 308,
            },
        ];
    },
};

export default nextConfig;
