import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Masjid from '../pages/Masjid'
import Kajian from '../pages/Kajian'
import Library from '../pages/Library'
import Shortlist from '../pages/Shortlist'
import Profile from '../pages/Profile'
import About from '../pages/About'

// Matches the routing spec exactly: / /masjid /kajian /library /shortlist
// /profile /about, all nested under the persistent AppLayout shell (header
// + bottom nav). /shortlist is a new bottom-nav destination (replacing
// Profil there — see config/nav.js). /profile and /about are both
// secondary routes reached by drilling in (the header avatar, and Profile's
// "Tentang Sabeel" row, respectively) rather than bottom-nav tabs — nested
// here too so they keep the same persistent header/bottom-nav shell.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'masjid', element: <Masjid /> },
      { path: 'kajian', element: <Kajian /> },
      { path: 'library', element: <Library /> },
      { path: 'shortlist', element: <Shortlist /> },
      { path: 'profile', element: <Profile /> },
      { path: 'about', element: <About /> },
    ],
  },
])
