/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    basePath: '@/api',
    bodyParser: false,
    externalResolver: 'src/app/api',
  },
};

export default nextConfig;
