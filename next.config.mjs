/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This is the critical line
  images: {
    unoptimized: true,   // GitHub Pages doesn't support the Next.js Image Optimization API
  },
  // If your repo is NOT 'username.github.io' (e.g. it's a project repo),
  // you need to add the base path:
  // basePath: '/reponame',
};

export default nextConfig;