import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import BottomNavigation from '../components/BottomNavigation'
import { useScrollToTop } from '../hooks/useScrollToTop'

// The persistent app shell: header + bottom nav are rendered exactly once
// here and never unmount between navigations — only <Outlet /> (the current
// page) swaps.
//
// VISUAL REDESIGN (approved): `pt-16` → `pt-14` to match AppHeader's new
// 56px height (was 64px) — kept in lockstep with that change, not a
// separate edit.
//
// useScrollToTop() resets window scroll to the top on every route change —
// see that hook's own comment for why this has to live here rather than
// in any individual page: AppLayout is the one component that's mounted
// for every route without itself unmounting between them.
export default function AppLayout() {
  useScrollToTop()

  return (
    <>
      <AppHeader />
      <main className="relative w-full pt-14 pb-3xl bg-surface min-h-screen">
        <Outlet />
      </main>
      <BottomNavigation />
    </>
  )
}
