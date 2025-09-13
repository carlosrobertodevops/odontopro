// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" }, // Google OAuth avatar
      { protocol: "https", hostname: "avatars.githubusercontent.com" }, // GitHub avatar
      { protocol: "https", hostname: "res.cloudinary.com" }, // Cloudinary
      { protocol: "https", hostname: "supabase.mondaha.com" }, // Supabase Storage (se usar imagens públicas)
      { protocol: "https", hostname: "images.unsplash.com" }, // opcional
      { protocol: "https", hostname: "cdn.jsdelivr.net" }, // opcional
    ],
  },
};

module.exports = nextConfig;