// Mock library/video data. Content transcribed verbatim from the Stitch
// "Beranda Sabeel" screen's "Kajian Online Terbaru" section and the
// "Perpustakaan" screen's "Kajian Terbaru" list (verified live via the
// Stitch MCP, project 16403309371103694612).

/**
 * @typedef {object} VideoItem
 * @property {string} id
 * @property {string} thumbnail
 * @property {string} duration - Display string, e.g. "45:20".
 * @property {string} title
 * @property {string} ustadz
 */

/**
 * @typedef {object} LibraryVideoItem
 * @property {string} id
 * @property {string} thumbnail
 * @property {string} avatar
 * @property {string} title
 * @property {string} ustadzName
 * @property {string} duration - Display string, e.g. "1:24:05".
 * @property {boolean} live - Whether to show the "Live Now" badge and the
 *   live view-count styling instead of a views+timestamp row.
 * @property {string} views - Display string. Stitch uses a different verb
 *   per state: "14.2K ditonton" once finished, "3.2K menonton" while live.
 * @property {string} [timestamp] - Display string, e.g. "2 hari yang lalu".
 *   Omitted for live videos (Stitch's list drops it there too).
 */

/** @type {VideoItem[]} */
export const homeCarouselVideos = [
  {
    id: 'home-online-1',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDx2ONp6lc3LXr1M6-tRWiOBTFDdXjPC_RYKFlqVo_jyguycDkJH45ik9dvwOqGsNYPuvxa8gnCVvuKNdp-_Oa7iCw88HKpuxhp4IUATHI-2BTJP4iL_6DXFQVKXU16WzKY7c101eEB0hf1_kCnOWeSx7Myr3oq_ddfgl2ZKkfk-rwRS3JuGg-tbcHhBjD4vcAW6N8aNux8xRQV12oH41eGujgNnkb21A8U5exspruF4kmBpCRJfPde9Q',
    duration: '45:20',
    title: "Adab Penuntut Ilmu Bagian 1 - Kitab Ta'lim Muta'allim",
    ustadz: 'Ust. Firanda Andirja',
  },
  {
    id: 'home-online-2',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgZOp933TyujVEu6RKphSxYt4WxL6Wtpp76qB1G61Az3kuJqlaEPLDSKQrYc4T-OxC6ICseqQyCGAQwyt7JYUCuD5RPiO8GfyDviRIF06vaR1gStt9qenOgkU47buaSBEx5E9yowOvqSJisZdyupJ9W_KDbDyt0WXPj6cOZxdy2pGWYfBszn9oot4p1zTKsFJeD_PU0JPBKRQEXvEKnKmOzz8XkMBNibhlbSgQJWgONgIDaCm9PdN6UA',
    duration: '1:12:05',
    title: 'Sabar Menghadapi Ujian Kehidupan',
    ustadz: 'Ust. Nuzul Dzikri',
  },
]

/** @type {LibraryVideoItem[]} */
export const libraryVideos = [
  {
    id: 'library-1',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQV8-oDQqxklVuiAmnj5y7V5Y8nGFjaQ8JB5L5PyYBLTtZZ-tFQnwJzwLkhjqkY77X6oKL9WsJSbu1O6KSa3HLBCS-f60ZixUTOZMFVX5pdVhh_fOCvixZ8uK-0lViTfzRAPVKRK8BKj1iEKYneAul2qM0B4ild1HoQ3DMMa32ajTlkhIB3BNVllzehkfZDWZ2wZN57BijPzpdQ8Hb8eBCotVjrD82ImFDlEool9uTDjbB94o0t2InDw',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8OWSPrTuh3ox15svzIjsHqDJBXcMJv9rM00KPNy13p0bsN7-YUwnflI3hhjoXC2_7QyE0sxRLUWSrTfbkISwjKOnixGO11wDv0_A9zbZy_WkzS92qPiuRftrFPcByVgIXMMqQYy5KfMdJXjF8t7CwJcwwzU8dDDL6RwrfXBb0sL8zCbK5Gp3-4IeQvzZJ8v5rEQ-34xympR4Ued7R0B-pL3WRyxf5iURGchX3z3Aw8L6OkpolfCKvwQ',
    title: 'Tafsir Surah Al-Kahfi: Menghadapi Fitnah Akhir Zaman (Bagian 1)',
    ustadzName: 'Ustadz Syafiq Riza Basalamah',
    duration: '1:24:05',
    live: false,
    views: '14.2K ditonton',
    timestamp: '2 hari yang lalu',
  },
  {
    id: 'library-2',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDilqeyxbS40rCHa7b-qv1CDlxSgkfpvBaRnNmvsbuPffg2tpudolW9UrQyhb2wd89027fw7spYgqAyp_h_KSLjtW42uhMMIenHPrFDCm3257WV7r1GcTGvYBGFxXeVRHQSnyjGLpNi40qtJ5HDYETPa-sDI1lBkBcR8LYJkCEARRRty8I8pviFiqk6f00aruTQtKl3D3vqD5booZSKK_7tA3lxlFpqeTP2YrtLam9ClZfwIiEff81vfQ',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCykZWcTMRI1YEQ5sveCAulumu3Ac3dYSTOcJkPeFnModVqeS1wbT-rqL8kiou_cU4WLPv3hsZRzNaAHnDzJrCq5iDywvblWjbbZu8ML8r5BHN94rPFpFNvm7yG-Kl3O2vVCUE30VSd0Jfj6O8f5vAwIdpL0KRmxwsewbpSrk-X7UZsmEPQQB_UoyuZrVkh1ouFSDpHqe1IajPuZe92uKocUpbh_uwk8ClNnAXcEH2NtMGHQRbYUQgdBw',
    title: 'Sirah Nabawiyah: Perjalanan Hijrah yang Menginspirasi',
    ustadzName: 'Ustadz Khalid Basalamah',
    duration: '58:30',
    live: false,
    views: '8.5K ditonton',
    timestamp: '1 minggu yang lalu',
  },
  {
    id: 'library-3',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIjt7a79TS4T3yVt3ri5URp8c1QBtkFxns12oWdtzAuQM2t3JNpRUXdSnq2aCKeSCvE69QzlYjCt1e1vqSi49dKF3V4pQXC3dF9jdkmfWX6HX8E5CAXbkh_HE0AsBewVeBpIehnl49KIpIhP0u28tFmhDC5GoDtQII_hwOKULXMV7d5RF8Bkh3ZCJNQ3PXnq17E6ObfY31MhqBZPfj9ziFNbjeHh86v9v9hGy4x0affbcDXJChx9sGcA',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLGwTI0ZsCZTT22UCCnD6ZEthD18ROb0yKMLNEK4mwUVH9pvwnu33ZUIeJL7iNy9Qyiom1Ksd-19smXBxPwWShHkZzFmTXpe_BbZxtCfdidtCSVEIbYkOxOQSPFkLHzYn-pRutGTKM_GuuRfJkV495aaqG6cWUPlkhKJIgknPBbYB0JFRtoBUw1Xg9-GjpOnoGZ2oI32jj2vUvsIKBWv-Od0qgId4eq0nENDQzEZPlthPRqSEiVixA0w',
    title: 'Tanya Jawab Seputar Fiqih Muamalah Kontemporer',
    ustadzName: 'Ustadz Erwandi Tarmizi',
    duration: '45:12',
    live: true,
    views: '3.2K menonton',
  },
]
