/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/action.html',
        destination: '/',
        permanent: true, // 301 редирект
      },
    ];
  },
};

export default nextConfig;
