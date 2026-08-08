import { scheduleKajian } from '../mock/kajian'
import { isBookmarked } from '../hooks/useBookmark'

// Kajian the user has bookmarked, for the Shortlist page.
//
// Deliberately no mock/shortlist.js: Shortlist doesn't introduce new
// subject-matter content — it's a filtered view over the existing Kajian
// domain (same content, plus bookmark state), so it reads directly from
// mock/kajian.js's `scheduleKajian` rather than duplicating those records
// into a second file. `scheduleKajian` specifically (not nearbyKajian or
// todayKajian) because it's the one existing shape that already carries
// every field this page needs — ustadz, category, full mosque/location,
// time — so KajianCardSchedule can render it with zero adaptation.
//
// Each item's live bookmark state comes from `isBookmarked()` (the same
// localStorage-backed read `useBookmark` uses everywhere else), falling
// back to the mock's own `bookmarked` flag — this is the "one source of
// truth for bookmarked Kajian" the feature asks for: there's no second,
// separate bookmark system here, just a read against the existing one.
// This computes a fresh snapshot each time it's called (i.e. each time
// this page mounts/navigates to), so unbookmarking something on
// Home/Kajian is reflected here on the next visit — it will not live-update
// while already sitting on this page without a shared reactive store,
// which is the explicitly scoped "for now, mock-driven" gap called out in
// this feature's own brief, not an oversight.
export function getShortlistedKajian() {
  return scheduleKajian.filter((item) => isBookmarked(item.id, item.bookmarked))
}
