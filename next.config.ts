/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "unsafe-none",
  },
  // SECURITY: Content-Security-Policy — mitigates XSS and injection at browser level.
  // unsafe-inline required for GTM (loaded in layout.tsx). unsafe-eval NOT included.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://checkout.razorpay.com",
      "connect-src 'self' https://api.razorpay.com https://www.googletagmanager.com https://www.clarity.ms https://api.telegram.org",
      "frame-src 'none'",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "media-src 'self'",
    ].join("; "),
  },
];

const nextConfig = {
  // SECURITY FIX: allowedDevOrigins removed from production config.
  // Dev tunneling domains should not appear in production builds.
  // For local development use next.config.local.ts or environment variables instead.

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
