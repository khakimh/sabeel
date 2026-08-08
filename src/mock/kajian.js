// Mock kajian data. Content transcribed verbatim from the Stitch "Beranda
// Sabeel" and "Jadwal Kajian" screens (verified live via the Stitch MCP,
// project 16403309371103694612) — same titles, images, ustadz names, times.

/**
 * @typedef {object} NearbyKajianItem
 * @property {string} id
 * @property {string} image
 * @property {string} distanceKm - Display string, e.g. "1.2 km".
 * @property {boolean} todayBadge - Whether to show the "Hari Ini" badge.
 * @property {string} title
 * @property {string} ustadz
 * @property {string} time
 */

/**
 * @typedef {object} TodayKajianItem
 * @property {string} id
 * @property {string} image
 * @property {string} category
 * @property {'accent'|'neutral'} categoryStyle
 * @property {string} title
 * @property {string} mosque
 * @property {string} time
 * @property {boolean} bookmarked - Initial bookmark state (BookmarkButton
 *   persists toggles to localStorage after this).
 */

/** @type {NearbyKajianItem[]} */
export const nearbyKajian = [
  {
    id: 'nearby-1',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaPxyyTKQIle2wC-k8noNWnmypSt_CPw9lKEuTP7PB3SmjuHm4KRC6DAf2Tw_FEMKXcw-c0w0aE8rLt0lxehLzcHgOnQUuCsDfEhmrY4E80aE4YGZG2DuMTtnRYyF8T3rMFTpIKccfFET4DKlHYlJsj6yvBYq9OwTMnCuxPobqAQwgUDTCZWie_cHAd2ad-vTCWj3vm2Y_tKln7NKVgccDaXsXxCKfwTW-J6qVryTo9-1SuNPgGOqn2w',
    distanceKm: '1.2 km',
    todayBadge: true,
    title: 'Tafsir Ibnu Katsir: Surat Al-Kahfi & Keutamaannya',
    ustadz: 'Ust. Dr. Syafiq Riza Basalamah',
    time: 'Maghrib - Isya',
  },
  {
    id: 'nearby-2',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBT3NH7DMsn--b1lu8wJStvNqavzJEC7h_4_NtljDngIHOy7qYjB-4-M6BhhkYQpiP0uLyahkkOgTpiVOdWUNwi67vShPpqwiH1CAPUXCkuqz6EJpjVdOiNzgSinvBTzDluQlDfpGZcjg_jSZDhgqCeUpsjHAOnmWsxZ07t1776vJJvFvLmOi_hYTBqhYaMofLqzIAOvBTkzK3CKN374D0C3RXABFFM6xpaX8l9_QFFCPkVrrTEpW9iaw',
    distanceKm: '3.5 km',
    todayBadge: false,
    title: 'Kajian Tematik: Membangun Keluarga Sakinah',
    ustadz: 'Ust. Khalid Basalamah',
    time: '09:00 - 11:30 WIB',
  },
]

/**
 * @typedef {object} ScheduleKajianItem
 * @property {string} id
 * @property {string} category
 * @property {boolean} live - Whether to show the pulsing "Sedang
 *   Berlangsung" badge and the error-colored top accent bar.
 * @property {string} title
 * @property {string} ustadzName
 * @property {string} ustadzAvatar
 * @property {string} time - Display string, e.g. "16:00 - Selesai (Ba'da Ashar)".
 * @property {string} mosque
 * @property {string} address
 * @property {string} distance - Display string, e.g. "800 m".
 * @property {'walk'|'car'} distanceMode - Selects the distance icon.
 * @property {boolean} bookmarked - Initial bookmark state (BookmarkButton
 *   persists toggles to localStorage after this).
 */

/**
 * @typedef {object} CalendarDay
 * @property {number} date
 * @property {string} day - 3-letter Indonesian day abbreviation, e.g. "SEN".
 * @property {boolean} isWeekend
 * @property {boolean} hasKajian - Whether to render the small dot indicator.
 * @property {boolean} selected - Initially-selected day (DateStrip owns the
 *   live selection state after this).
 */

/** @type {TodayKajianItem[]} */
export const todayKajian = [
  {
    id: 'today-1',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBfnbclbFwuHbmoQnYDu0BfjU0FZrz4-W5Gy94fKGXoG1vQeGEnxVkCwkcMfhW8N-cAaS0_CP7MVrMg0IpCGPgA30a1TOwYtxnBG-EOiVVlZvF7RfLOzwUI0y_x0j_1l2lk8TGfX-XN13pNaPj9i3G3kNsRQvJORZJ_4iEiYIIOzci3uYaOcHRPKaHTvjR7EBTOw-FUOU5AvlzRiWSqGWRsw6JFpW0m3zPHm1IwjFOh8Uve3vQ_-IpMag',
    category: 'Fikih Muamalah',
    categoryStyle: 'accent',
    title: 'Hukum Jual Beli Online',
    mosque: 'Masjid Bintaro',
    time: '19:30',
    bookmarked: false,
  },
  {
    id: 'today-2',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAN0qPved-LA-vc9neyZ-ELbOeArfFJreKm5yoY9Co01Ro5ODKtYwxIXtU42YY3IWXiUx-ytLfhhe9jUhZoSMFgmDSGuDic4lDc8Xpa6MRD47Sx7sr5erqjN2LZlMDYJ649XeeAfUd7vE2MLDjZrr-xNdqbpp4F0_-EV1Brf2gZ6CXc7RbkTIhkgrtsRXbI4BE7F_CTMqUkNebK0mT8eofhpgWzB3tLSoqBtPJK5bcHe135G87pWZoiiA',
    category: 'Tafsir',
    categoryStyle: 'neutral',
    title: 'Tadabbur Juz Amma',
    mosque: 'Masjid Al-Azhar',
    time: 'Subuh',
    bookmarked: true,
  },
]

/** @type {ScheduleKajianItem[]} */
export const scheduleKajian = [
  {
    id: 'schedule-1',
    category: 'Aqidah',
    live: true,
    title: 'Mengenal Nama & Sifat Allah (Asmaul Husna)',
    ustadzName: 'Ust. Dr. Firanda Andirja, MA',
    ustadzAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEJgokDFK4AwzCi-Q3OwucXR0dbsiFWqaWrK3e7ebZIybTg2th4x7BlajCd89k2g90Gk7yOVY8XaLrlkH3bSJCwMaOtABcGytG2V4WrhR5-ATBe6cS-oLW0mK_8Ti0dYPJs9xfDJZCH909SQl3OiTbj5I_l7AsyqLfPniLnBWPdaFL_Ot8GxF814beCx7um-L1khwgNblcY-QHnPx6HfzTYu0VnhddryYStwyw4KPGGM_KRMqhomstcw',
    time: "16:00 - Selesai (Ba'da Ashar)",
    mosque: 'Masjid Astra',
    address: 'Sunter, Jakarta Utara',
    distance: '800 m',
    distanceMode: 'walk',
    bookmarked: true,
  },
  {
    id: 'schedule-2',
    category: 'Sirah Nabawiyah',
    live: false,
    title: 'Perang Badar: Pelajaran Keimanan dari Pasukan Kecil',
    ustadzName: 'Ust. Nuzul Dzikri, Lc',
    ustadzAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHBe5IxCWd3rTS0ribikeiGASZpJSgp8n01S1LPyYRvMlNyDNzImZNKFo88lfCDN_OxcWxW2psK70HW6MAyMdKb_s6VTwgcpPeAqn_S9OTLYPhVDa1I2GE8-LN6oVCnJKIn64HKzb36A5qe-ee5QQoSucPwaOfmwrH7hWUHBHDiQm-3kRA71dQlkY23zsPqIifhzU0hbysSjIAj1BQWe4WC5H9XC1Cd5_etP-IqQ02iniNW_jSRmHcPw',
    time: "18:15 - 19:30 (Ba'da Maghrib)",
    mosque: 'Masjid Nurul Iman',
    address: 'Blok M Square, Kebayoran Baru',
    distance: '2.4 km',
    distanceMode: 'car',
    // Flipped true (was false) so the new Shortlist page's mock data has
    // more than one bookmarked item to display — reusing this existing
    // record rather than inventing a new one, per that feature's own
    // instructions. Side effect, disclosed rather than silent: this card
    // now also shows as bookmarked by default on the Kajian page itself.
    bookmarked: true,
  },
]

export const kajianCalendarMonthLabel = 'Maret 2024'

/** @type {CalendarDay[]} */
export const kajianCalendarDays = [
  { date: 11, day: 'SEN', isWeekend: false, hasKajian: false, selected: false },
  { date: 12, day: 'SEL', isWeekend: false, hasKajian: true, selected: true },
  { date: 13, day: 'RAB', isWeekend: false, hasKajian: true, selected: false },
  { date: 14, day: 'KAM', isWeekend: false, hasKajian: true, selected: false },
  { date: 15, day: 'JUM', isWeekend: false, hasKajian: false, selected: false },
  { date: 16, day: 'SAB', isWeekend: true, hasKajian: true, selected: false },
  { date: 17, day: 'MIN', isWeekend: true, hasKajian: false, selected: false },
]
