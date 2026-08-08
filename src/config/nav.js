// Single source of truth for the bottom navigation + header titles per
// screen.
//
// Product change: the 5th bottom-nav destination changed from Profil to
// Shortlist. Profile is not gone — its route/page are untouched (see
// SECONDARY_ROUTE_TITLES below) — it's just reached via the avatar in
// AppHeader now (already wired there, see components/AppHeader.jsx),
// not a bottom-nav tab.
export const NAV_ITEMS = [
  { path: 'beranda', route: '/', label: 'Beranda', headerTitle: 'Beranda', icon: 'home', fab: false },
  { path: 'masjid', route: '/masjid', label: 'Masjid', headerTitle: 'Masjid', icon: 'mosque', fab: false },
  { path: 'kajian', route: '/kajian', label: 'Kajian', headerTitle: 'Kajian', icon: 'calendar_today', fab: true },
  {
    path: 'perpustakaan',
    route: '/library',
    label: 'Library',
    headerTitle: 'Perpustakaan',
    icon: 'library_books',
    fab: false,
  },
  { path: 'shortlist', route: '/shortlist', label: 'Shortlist', headerTitle: 'Shortlist', icon: 'bookmark', fab: false },
]

export function navItemForRoute(pathname) {
  return NAV_ITEMS.find((item) => item.route === pathname) ?? NAV_ITEMS[0]
}

// Routes that render inside the same persistent AppLayout shell but aren't
// one of the bottom-nav tabs above (the About settings drill-down, and now
// Profile, reached via AppHeader's avatar instead of a tab). Extend this
// map — not NAV_ITEMS — for any future page reached by drilling into
// something else rather than tapping the bottom nav directly; adding an
// entry here never adds a tab, since BottomNavigation only ever maps over
// NAV_ITEMS. (headerTitleForRoute itself is currently unused by AppHeader,
// which dropped the page-title text entirely in an earlier pass — kept
// accurate anyway since it costs nothing and other consumers may want it.)
const SECONDARY_ROUTE_TITLES = {
  '/about': 'Tentang Sabeel',
  '/profile': 'Profil',
}

export function headerTitleForRoute(pathname) {
  const item = NAV_ITEMS.find((i) => i.route === pathname)
  if (item) return item.headerTitle
  return SECONDARY_ROUTE_TITLES[pathname] ?? NAV_ITEMS[0].headerTitle
}
