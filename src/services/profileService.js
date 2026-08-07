import { profile } from '../mock/profile'
import { CURRENT_USER_AVATAR_URL } from '../config/constants'

/**
 * @typedef {object} Profile
 * @property {string} name
 * @property {string} location
 * @property {string} avatar
 */

// Reads mock data today. Swapping to the real Google Apps Script backend
// later only means changing this function's implementation — pages call
// the same function signature either way.
/** @returns {Profile} */
export function getProfile() {
  return { ...profile, avatar: CURRENT_USER_AVATAR_URL }
}

// Settings menu structure for the "Profil Saya" screen, in the exact
// groups/order Stitch renders them. Static UI structure rather than
// content, so it lives here as a plain constant (same treatment as
// MOSQUE_FILTERS/KAJIAN_QUICK_FILTERS) instead of in mock/profile.js.
export const SETTINGS_GROUPS = [
  {
    label: 'Pengaturan & Sinkronisasi',
    items: [
      { icon: 'sync', label: 'Google Calendar Sync', iconVariant: 'accent' },
      { icon: 'notifications', label: 'Pengaturan Notifikasi' },
    ],
  },
  {
    label: 'Favorit',
    items: [
      { icon: 'school', label: 'Ustadz Favorit' },
      { icon: 'mosque', label: 'Masjid Favorit' },
    ],
  },
  {
    label: null,
    items: [{ icon: 'info', label: 'Tentang Sabeel' }],
  },
]
