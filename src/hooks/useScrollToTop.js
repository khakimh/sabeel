import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Browsers try to restore each history entry's own scroll position by
// default (`history.scrollRestoration === 'auto'`). That, combined with
// React Router never resetting scroll itself on a client-side route
// change, is why navigating to a new page kept roughly the previous
// page's scroll position instead of starting at the top. Turning this off
// once, at module load, hands scroll restoration entirely to the effect
// below instead of racing the browser's own attempt at it.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// Resets scroll position to the top on every route change. Called once
// from AppLayout — the persistent app shell that, by design, never
// unmounts between page navigations (that's what keeps the header/bottom
// nav mounted) — so this is the one place a route-level effect can live
// without duplicating it into every page.
//
// `behavior: 'instant'` matters specifically in this codebase:
// styles/index.css sets `scroll-behavior: smooth` on <body>, and
// `window.scrollTo`'s default `behavior: 'auto'` respects that CSS
// property — meaning without an explicit 'instant', navigating would
// visibly animate/slide from the old scroll position down to the top
// instead of the new page appearing there immediately.
export function useScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
}
