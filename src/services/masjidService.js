import { mosques } from '../mock/masjid'

// Reads mock data today. Swapping to the real Google Apps Script backend
// later only means changing this function's implementation — pages call
// the same function signature either way.
export function getMosqueDirectory() {
  return mosques
}

// Filter chip labels for the "Cari Masjid" screen, in the exact order Stitch
// renders them. Selecting a chip currently only updates its own active
// visual state — Stitch's own raw export wires up bookmark toggling but
// leaves these chips non-functional too, so this matches the reference
// implementation rather than inventing filter behavior it doesn't specify
// (same deferred-functionality treatment as Home's search input).
export const MOSQUE_FILTERS = ['Semua', 'Terdekat', 'Favorit', 'Buka']
