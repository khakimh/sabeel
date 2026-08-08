import { NavLink } from 'react-router-dom'
import Icon from './Icon'
import { NAV_ITEMS } from '../config/nav'

// Structure/behavior unchanged: React Router's NavLink handles the
// active-state class automatically from the current route — no manual DOM
// class-toggling needed. NAV_ITEMS now has 4 entries, not 5 — Masjid was
// removed from that array per explicit instruction (see config/nav.js),
// not from here; this component still just maps over whatever NAV_ITEMS
// contains.
//
// The center Kajian tab is a highlighted FAB. Its active state only ever
// toggles the `active` class (which drives the filled-icon look via
// `.active .material-symbols-outlined` in src/styles/index.css) — it
// deliberately never toggles a `text-primary` color class. The FAB sits on
// its own bg-primary (teal) background at all times; adding a teal text
// color on top of a teal background makes the icon render the same color
// as what it's sitting on, i.e. invisible. Keeping this exact mechanism
// through the redesign, not just at the old pixel-matched sizes.
//
// VISUAL REDESIGN (approved): shadow+blur chrome replaced with a hairline
// top border; the FAB's shadow moved from a saturated teal-tinted value to
// the same neutral `shadow-soft` every other elevated element now uses
// (quieter, but the FAB stays unmistakably the primary action through its
// size/position/solid-fill alone — nothing about its emphasis changed);
// inactive icons/labels sized down slightly for a lighter default weight.
//
// Touch-target fix (measured, not assumed): the row wrapper used
// `items-center`, which sizes each flex child to its own content height —
// each non-FAB NavLink was only ~40px tall despite the 80px bar, well
// under the 44px floor. Switched to `items-stretch` so every NavLink fills
// the full bar height; each one's own `justify-center` keeps its icon+label
// vertically centered inside that taller tap area.
//
// FAB vertical position: the wrapper's negative top margin controls how
// far the 56px FAB overhangs above the bar's top edge — measured (not
// guessed) at -mt-8 (-32px): 32px overhang, only 24px overlapping into the
// 80px bar, leaving a visibly large empty gap above it. Reduced to -mt-6
// (-24px) — 24px overhang / 32px overlap — the smallest change that
// noticeably closes that gap while the FAB (still 56px, unchanged) stays
// clearly elevated above the regular tabs and keeps overlapping the bar's
// top edge. FAB size/color/icon/shape/shadow, bar height, and every other
// item's position are untouched.
export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl border-t border-hairline">
      <div className="flex items-stretch justify-between h-20 px-md relative">
        {NAV_ITEMS.map((item) =>
          item.fab ? (
            <div key={item.path} className="flex-1 flex justify-center -mt-6">
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  `w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-soft transition-transform active:scale-95${
                    isActive ? ' active' : ''
                  }`
                }
              >
                <Icon name={item.icon} className="!text-[26px] !fill-1" />
              </NavLink>
            </div>
          ) : (
            <NavLink
              key={item.path}
              to={item.route}
              end={item.route === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 gap-1 transition-colors ${
                  isActive ? 'text-primary active' : 'text-on-surface-variant'
                }`
              }
            >
              <Icon name={item.icon} className="!text-[22px]" />
              <span className="font-label-sm text-label-sm font-medium">{item.label}</span>
            </NavLink>
          )
        )}
      </div>
    </nav>
  )
}
