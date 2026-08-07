// Mock library/video data. Content transcribed verbatim from the Stitch
// "Beranda Sabeel" screen's "Kajian Online Terbaru" section (verified live
// via the Stitch MCP). Library page's full video-list data will be added to
// this same file when that page's increment lands.

/**
 * @typedef {object} VideoItem
 * @property {string} id
 * @property {string} thumbnail
 * @property {string} duration - Display string, e.g. "45:20".
 * @property {string} title
 * @property {string} ustadz
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
