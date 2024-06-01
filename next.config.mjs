import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.hyperfunctor.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/marcinbialkowski/next-store/**',
      },
    ],
  },
  experimental: {
    mdxRs: true,
    typedRoutes: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  redirects: () => [
    {
      source: '/products',
      destination: '/products/1',
      permanent: true,
    },
    {
      source: '/categories/:categorySlug',
      destination: '/categories/:categorySlug/1',
      permanent: true,
    },
  ],
  rewrites: () => [
    {
      source: '/search',
      destination: '/search/1',
    },
  ],
};

export default nextMDX()(nextConfig);
