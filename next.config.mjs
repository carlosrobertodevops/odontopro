// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  // ✅ habilita domínios remotos usados pelo app (maneira mais direta)
  images: {
    domains: [
      "lh3.googleusercontent.com",      // Google avatar (OAuth)
      "avatars.githubusercontent.com",  // GitHub avatar
      "res.cloudinary.com",             // Cloudinary
      "supabase.mondaha.com"            // Supabase Storage (se usar)
    ],
    // Se quiser, você pode manter remotePatterns em vez de domains.
  },
};

export default nextConfig;