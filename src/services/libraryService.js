import { homeCarouselVideos, libraryVideos } from '../mock/library'

// Reads mock data today. Swapping to the real Google Apps Script backend
// later only means changing this function's implementation — pages call
// the same function signature either way.
export function getHomeCarouselVideos() {
  return homeCarouselVideos
}

// Reads mock data today, same swap-later note as getHomeCarouselVideos.
export function getLibraryVideos() {
  return libraryVideos
}
