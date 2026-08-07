import { nearbyKajian, todayKajian } from '../mock/kajian'

// Reads mock data today. Swapping to the real Google Apps Script backend
// later only means changing this function's implementation — pages call
// the same function signature either way.
export function getHomeKajian() {
  return { nearby: nearbyKajian, today: todayKajian }
}
