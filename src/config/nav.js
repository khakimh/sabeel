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
