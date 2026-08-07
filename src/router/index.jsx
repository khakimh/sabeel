import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Masjid from '../pages/Masjid'
import Kajian from '../pages/Kajian'
import Library from '../pages/Library'
import Profile from '../pages/Profile'

// Matches the routing spec exactly: / /masjid /kajian /library /profile,
// all nested under the persistent AppLayout shell (header + bottom nav).
// Only Home is a real implementation this increment — the other 4 are
// placeholders (see each page file) so the bottom nav is fully clickable
// and demonstrable end-to-end without building unapproved pages early.
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
    ],
  },
])
