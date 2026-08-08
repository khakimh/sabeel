import { Link, useLocation } from 'react-router-dom'
import { headerTitleForRoute } from '../config/nav'
import { SABEEL_LOGO_URL, CURRENT_USER_AVATAR_URL } from '../config/constants'

// Identical across all 5 Stitch screens except the title text ("Beranda" /
// "Masjid" / "Kajian" / "Perpustakaan" / "Profil"), plus any secondary page
// reached by drilling into a tab (e.g. "Tentang Sabeel" via Profile) — see
// config/nav.js's SECONDARY_ROUTE_TITLES. Title updates automatically from
// the current route via React Router's useLocation — this is the
// persistent app-shell header, rendered once by AppLayout.
export default function AppHeader() {
  const location = useLocation()
  const headerTitle = headerTitleForRoute(location.pathname)

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-md flex items-center justify-between">
        <div className="flex items-center gap-sm">
          <img alt="Sabeel Logo" className="h-8 w-auto object-contain" src={SABEEL_LOGO_URL} />
          <span className="font-headline-md text-headline-md text-primary tracking-tight">{headerTitle}</span>
        </div>
        <Link to="/profile" aria-label="Profil">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={CURRENT_USER_AVATAR_URL} />
        </Link>
      </div>
    </header>
  )
}
