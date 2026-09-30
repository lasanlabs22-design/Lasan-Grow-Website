const isDev = process.env.NODE_ENV === "development";

// The site loads nothing from other origins: fonts are self-hosted by next/font and every image is
// inline SVG or HTML. Inline scripts stay allowed because Next.js injects some on static pages.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=(), payment=(), usb=(), interest-cohort=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  // lasangrow.com is the site's address; www forwards there.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lasangrow.com" }],
        destination: "https://lasangrow.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
