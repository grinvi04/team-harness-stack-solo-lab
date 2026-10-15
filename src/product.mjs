export function normalizeTitle(value) {
  if (typeof value !== 'string' || !value.trim() || value.trim().length > 80) throw new Error('invalid title');
  return value.trim();
}
export function health() { return {status: 'ok', product: 'synthetic-only'}; }
