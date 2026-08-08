import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Masjid from '../pages/Masjid'
import Kajian from '../pages/Kajian'
import Library from '../pages/Library'
import Profile from '../pages/Profile'
import About from '../pages/About'

// Matches the routing spec exactly: / /masjid /kajian /library /profile,
// all nested under the persistent AppLayout shell (header + bottom nav).
// /about is a secondary route reached by drilling into Profile's "Tentang
// Sabeel" row rather than a 6th bottom-nav tab — it's nested here too so it
// keeps the same persistent header/bottom-nav shell (see
// config/nav.js's SECONDARY_ROUTE_TITLES for its header title).
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'masjid', element: <Masjid /> },
      { path: 'kajian', element: <Kajian /> },
      { path: 'library', element: <Library /> },
      { path: 'profile', element: <Profile /> },
      { path: 'about', element: <About /> },
    ],
  },
])
