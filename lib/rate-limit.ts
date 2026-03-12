// Very simple rate limiting per session base on IP.
const rateLimit = new Map<string, { count: number; lastReset: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 20;

export function checkRateLimit(ip: string): { allowed: boolean } {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.lastReset > WINDOW_MS) {
    rateLimit.set(ip, { count: 1, lastReset: now });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false };
  }

  entry.count++;
  return { allowed: true };
}
