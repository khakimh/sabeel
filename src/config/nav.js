// Single source of truth for the bottom navigation + header titles per
// screen. Matches the `data-path` values present in the Stitch export
// (beranda / masjid / kajian / perpustakaan / profil) 1:1.
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
  { path: 'profil', route: '/profile', label: 'Profil', headerTitle: 'Profil', icon: 'person', fab: false },
]

export function navItemForRoute(pathname) {
  return NAV_ITEMS.find((item) => item.route === pathname) ?? NAV_ITEMS[0]
}

// Routes that render inside the same persistent AppLayout shell but aren't
// one of the 5 primary bottom-nav tabs above (currently just the About
// settings drill-down, reached by tapping "Tentang Sabeel" on Profile).
// Extend this map — not NAV_ITEMS — for any future page reached by drilling
// into a tab rather than by tapping the bottom nav directly; adding an
// entry here never adds a 6th bottom-nav tab, since BottomNavigation only
// ever maps over NAV_ITEMS.
const SECONDARY_ROUTE_TITLES = {
  '/about': 'Tentang Sabeel',
}

export function headerTitleForRoute(pathname) {
  const item = NAV_ITEMS.find((i) => i.route === pathname)
  if (item) return item.headerTitle
  return SECONDARY_ROUTE_TITLES[pathname] ?? NAV_ITEMS[0].headerTitle
}
