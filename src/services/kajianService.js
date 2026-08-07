import { nearbyKajian, todayKajian, scheduleKajian, kajianCalendarMonthLabel, kajianCalendarDays } from '../mock/kajian'

// Reads mock data today. Swapping to the real Google Apps Script backend
// later only means changing this function's implementation — pages call
// the same function signature either way.
export function getHomeKajian() {
  return { nearby: nearbyKajian, today: todayKajian }
}

// Reads mock data today, same swap-later note as getHomeKajian.
export function getKajianSchedule() {
  return {
    calendar: { monthLabel: kajianCalendarMonthLabel, days: kajianCalendarDays },
    schedule: scheduleKajian,
  }
}

// Quick-filter chip labels for the "Jadwal Kajian" screen, in the exact
// order Stitch renders them. Like Masjid's MOSQUE_FILTERS, selecting one
// currently only updates its own active visual state — Stitch's own raw
// export doesn't wire these up either, so this matches the reference
// implementation rather than inventing filter behavior it doesn't specify.
export const KAJIAN_QUICK_FILTERS = ['Hari Ini', 'Besok', 'Minggu Ini', 'Weekend']
