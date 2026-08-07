// Mock mosque directory. Content transcribed verbatim from the Stitch
// "Cari Masjid" screen (verified live via the Stitch MCP, project
// 16403309371103694612) — same names, addresses, images, distances, and
// kajian-today counts.
//
// Card 1's bookmark icon markup in Stitch's raw HTML export is corrupted (a
// broken inline `style` attribute, mangled into stray attributes on the
// <span>). Repaired here as `bookmarked: true`, matching its decodable
// intent (a filled bookmark icon) — the same category of straightforward
// invalid-HTML repair already made for this exact screen's card 1 in the
// original vanilla-JS build, not a design change.

/**
 * @typedef {object} MosqueItem
 * @property {string} id
 * @property {string} image
 * @property {string} name
 * @property {string} address
 * @property {string} distanceKm - Display string, e.g. "1.2 km".
 * @property {number} kajianToday - Count of kajian scheduled today; 0 renders
 *   the "Tidak ada kajian hari ini" state instead.
 * @property {boolean} bookmarked - Initial bookmark state (BookmarkButton
 *   persists toggles to localStorage after this).
 */

/** @type {MosqueItem[]} */
export const mosques = [
  {
    id: 'mosque-1',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBT_46snlGN9XJXonc77NfjZ1RvtG8eKzBskNtKc1q782xjnTefZtbW5aP3G1wD1Yq7WoAhwTo6IHZfBvG0CQ8RpyXb66cyAGLkTQFnEzvBWZIUQYsx3Jgmktgys2_U_TfkeTmUxyBIPwL14V541Rl3bx8fLnub1CHxO2E40tgvTjj6UQLSKrT0W45H85kYPmwpe2hg4WG-LnQFmiHALbg79ZHXS27HjuW7JfyI9SdoOro41Ls46AwY8g',
    name: 'Masjid Agung Al-Falah',
    address: 'Jl. Jendral Sudirman No.1, Jakarta Selatan',
    distanceKm: '1.2 km',
    kajianToday: 3,
    bookmarked: true,
  },
  {
    id: 'mosque-2',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBT7K_6h8ToRdaqpK8iXEoozWhGnA3IG-XTGmFN9dloxCQVGhwnIFuF5cfF5bwjywrZWZaWj9_-QdmpRRacvnLvW5b9AAaJLF3DbqUL8Is0j0hfsM1QerVUZOlRgqOuMd5oKkfwNludMOoQ4OXw-lsVVjrhitDK74_HOOmpUZsZU34CkAlOviEND1wW2nk_SwtCPaLokp-IkmePLhXXAnyJXk9VqMy9bSrwNBTUAjkuoI5WZyT7kx4SKw',
    name: "Masjid Jami' As-Salam",
    address: 'Jl. Raya Kebayoran Lama, Jakarta Selatan',
    distanceKm: '3.5 km',
    kajianToday: 1,
    bookmarked: false,
  },
  {
    id: 'mosque-3',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ207OQtOhonTEJa3xW_gkqd1XHFCaQWFY1K50eRHwrWqf6LpYX0OEO5DC0IiLyuJ_t4xB3pXHuuQZBCA3C5lQRomvdrBlW8LlY-aRxldJTByxI7qmsmnM_94bJcwpNdZMAhaaP3KCwxLfzYDLyQeAKtzBCKz_IZ4t8-E0rta4nDXGJJmRnGT1I8SfA6vnU8apXJMH3NSuDTtLxTyJnbv16qowiSQi7A3mKh_t068lOj7_u4k2va50tw',
    name: 'Masjid Istiqlal',
    address: 'Taman Wijaya Kusuma, Jakarta Pusat',
    distanceKm: '5.8 km',
    kajianToday: 0,
    bookmarked: false,
  },
]
