import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import BottomNavigation from '../components/BottomNavigation'

// The persistent app shell: header + bottom nav are rendered exactly once
// here and never unmount between navigations — only <Outlet /> (the current
// page) swaps. Matches the fixed-header/fixed-nav structure of every Stitch
// screen.
export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <main className="relative w-full pt-16 pb-3xl bg-surface min-h-screen">
        <Outlet />
      </main>
      <BottomNavigation />
    </>
  )
}
