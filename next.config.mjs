/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React compiler (you already had this)
  reactCompiler: true,

  // 👇 Enable static site generation
  output: 'export',

  // 👇 Important if you're using Next.js <Image> component
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
