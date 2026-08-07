// Mock profile data. Content transcribed verbatim from the Stitch "Profil
// Saya" screen (verified live via the Stitch MCP, project
// 16403309371103694612). The avatar is deliberately NOT duplicated here —
// Stitch's own export uses the identical image URL for this screen's large
// profile picture as it does for AppHeader's top-right avatar, so
// profileService reuses the same CURRENT_USER_AVATAR_URL constant instead
// of repeating the literal a second time.

/**
 * @typedef {object} ProfileData
 * @property {string} name
 * @property {string} location
 */

/** @type {ProfileData} */
export const profile = {
  name: 'Ahmad Sulaiman',
  location: 'Jakarta, Indonesia',
}
