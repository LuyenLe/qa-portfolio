/*
 * toolAccess — client interface for the per-tool "fair-use" limit.
 *
 * IMPORTANT — THIS IS NOT SECURITY ENFORCEMENT.
 * The product rule is "max 3 free uses per IP". That can ONLY be enforced
 * server-side, where the request IP is known and the counter cannot be cleared
 * by the visitor. A static frontend on GitHub Pages cannot do this.
 *
 * The localStorage implementation below is an ADVISORY / DEMO counter only:
 *  - it drives the card CTA state ("N uses left" → disabled) for demonstration,
 *  - it is trivially reset by clearing storage or switching browser/device,
 *  - it must never be described in UI copy as a real limit.
 *
 * FUTURE BACKEND CONTRACT (swap the stub for fetch() calls to these):
 *
 *   GET  /api/tools/:id/usage
 *        → 200 { used, limit, remaining, blocked }   (server keys on request IP)
 *
 *   POST /api/tools/:id/use
 *        → 200 { used, limit, remaining, blocked }   on success (use recorded)
 *        → 429 { used, limit, remaining: 0, blocked: true }  when limit reached
 *
 * When the backend exists, only the three functions below change; callers stay
 * the same (they already treat the API as async).
 */

export const USAGE_LIMIT = 3;
const STORAGE_PREFIX = 'qap.tooluse.';

// Set true only when a real backend is wired up.
const BACKEND_ENABLED = false;
// const BACKEND_BASE_URL = ''; // e.g. 'https://api.example.com'

function shape(used) {
  const clamped = Math.max(0, Math.min(used, USAGE_LIMIT));
  return {
    used: clamped,
    limit: USAGE_LIMIT,
    remaining: Math.max(0, USAGE_LIMIT - clamped),
    blocked: clamped >= USAGE_LIMIT,
    // Flag so the UI can label this as a non-authoritative client-side estimate.
    advisory: !BACKEND_ENABLED,
  };
}

function readLocal(toolId) {
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + toolId);
    const n = Number.parseInt(raw ?? '0', 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
  } catch {
    return 0;
  }
}

function writeLocal(toolId, used) {
  try {
    window.localStorage.setItem(STORAGE_PREFIX + toolId, String(used));
  } catch {
    // best-effort only
  }
}

/**
 * Current usage for a tool. Async so the backend swap is transparent.
 */
export async function getUsage(toolId) {
  if (BACKEND_ENABLED) {
    // const res = await fetch(`${BACKEND_BASE_URL}/api/tools/${toolId}/usage`);
    // return shape((await res.json()).used);
  }
  return shape(readLocal(toolId));
}

/**
 * Record one use of a tool and return the updated usage. If already at the
 * limit, nothing is incremented and `blocked` stays true.
 */
export async function recordUse(toolId) {
  if (BACKEND_ENABLED) {
    // const res = await fetch(`${BACKEND_BASE_URL}/api/tools/${toolId}/use`, { method: 'POST' });
    // const data = await res.json();
    // return shape(data.used);
  }
  const current = readLocal(toolId);
  if (current >= USAGE_LIMIT) return shape(current);
  const next = current + 1;
  writeLocal(toolId, next);
  return shape(next);
}

/**
 * Convenience: whether the tool can still be used.
 */
export async function canUse(toolId) {
  return !(await getUsage(toolId)).blocked;
}

/**
 * Demo helper — clears the advisory counter for one tool (or all tools).
 * Only meaningful for the localStorage stub.
 */
export function resetUsage(toolId) {
  try {
    if (toolId) {
      window.localStorage.removeItem(STORAGE_PREFIX + toolId);
      return;
    }
    for (let i = window.localStorage.length - 1; i >= 0; i -= 1) {
      const key = window.localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX)) window.localStorage.removeItem(key);
    }
  } catch {
    // best-effort only
  }
}
