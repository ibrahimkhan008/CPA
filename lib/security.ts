/**
 * Security utilities — centralized helpers for input sanitization,
 * IP extraction, and other shared security logic.
 */

import { NextRequest } from "next/server";

// Vercel proxy IP ranges — trust these when checking X-Forwarded-For.
// Traffic from these IPs is known to be behind Vercel's edge,
// so any IPs further left in X-Forwarded-For can be trusted.
const VERCEL_PROXY_CIDRS = [
  "76.76.21.0/24",
  "76.76.2.0/24",
] as const;

function ipToInt(ip: string): number {
  return ip.split(".").reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

function ipInCidr(cidr: string, ip: string): boolean {
  const [rangeStr, bitsStr] = cidr.split("/");
  const bits = parseInt(bitsStr, 10);
  const mask = bits === 0 ? 0 : (~0 << (32 - bits)) >>> 0;
  return (ipToInt(ip) & mask) === (ipToInt(rangeStr) & mask);
}

function isVercelProxy(ip: string): boolean {
  return VERCEL_PROXY_CIDRS.some((cidr) => ipInCidr(cidr, ip));
}

/**
 * SECURITY FIX: Extract the real client IP from X-Forwarded-For.
 *
 * Before: blindly trusted the first IP in X-Forwarded-For,
 * allowing attackers to spoof IP addresses via:
 *   X-Forwarded-For: <spoofed>, <real-vercel-ip>
 *
 * After: skips Vercel's own proxy IPs and returns the first
 * untrusted hop — the actual client IP.
 *
 * Falls back to `x-real-ip` header which Vercel sets directly
 * (cannot be spoofed by clients because Vercel sets it server-side).
 *
 * @returns The real client IP, or undefined if none found.
 */
export function getClientIp(req: NextRequest): string | undefined {
  // Try Vercel's own unspoofable header first
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.split(",")[0].trim();

  const forwarded = req.headers.get("x-forwarded-for");
  if (!forwarded) return undefined;

  const parts = forwarded.split(",").map((p) => p.trim()).filter(Boolean);

  // Find the first IP that is NOT a Vercel proxy.
  // Vercel appends the client IP to the chain, so we scan left-to-right.
  for (const ip of parts) {
    if (!isVercelProxy(ip)) {
      return ip;
    }
  }

  // All hops are Vercel proxies — fall back to the rightmost (client IP set by Vercel)
  return parts[parts.length - 1];
}
