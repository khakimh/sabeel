import { Link } from 'react-router-dom'
import { SABEEL_LOGO_URL, CURRENT_USER_AVATAR_URL } from '../config/constants'

// The persistent app-shell header, rendered once by AppLayout, identical
// on every page.
//
// The per-route page title (previously "Beranda"/"Masjid"/"Kajian"/etc.,
// via config/nav.js's headerTitleForRoute) was removed: the new
// sabeel-logo.png is a landscape wordmark that already carries the Sabeel
// brand on its own, so a text label next to it would be redundant. This
// component no longer needs the current route at all, hence no more
// useLocation/headerTitleForRoute import — headerTitleForRoute itself is
// left defined in config/nav.js (unused now, but removing it is a config
// change beyond this "focused AppHeader change," not required to make
// this work, and not otherwise requested).
//
// VISUAL REDESIGN (approved): shadow+blur chrome replaced with a hairline
// bottom border; height trimmed 64px→56px — AppLayout's matching `pt-14`
// offset was updated in lockstep. That height is unchanged again here —
// the logo's height (28px) fits the existing 56px bar with room to spare,
// so no further adjustment was needed.
//
// Logo sizing: the source asset is a 1000x1000 canvas with the actual
// wordmark occupying a small landscape region in the middle (see
// constants.js) — using that file at its literal 1:1 ratio and a
// header-scale height would render the wordmark a few px tall, effectively
// invisible. `SABEEL_LOGO_URL` now points at a losslessly-cropped version
// (same pixels, just the empty canvas trimmed) with its true ~3.9:1
// landscape ratio, so a fixed height + `w-auto` + `object-contain` here
// preserves that ratio exactly — never stretched, never distorted.
// `max-w-[160px]` is a defensive ceiling (currently renders at ~110px
// wide, well under it) rather than something actively constraining it
// today.
export default function AppHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl pt-safe border-b border-hairline">
      <div className="h-14 px-md flex items-center justify-between">
        <img alt="Sabeel" className="h-7 w-auto max-w-[160px] object-contain" src={SABEEL_LOGO_URL} />
        <Link to="/profile" aria-label="Profil" className="w-11 h-11 flex items-center justify-center rounded-full">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={CURRENT_USER_AVATAR_URL} />
        </Link>
      </div>
    </header>
  )
}
