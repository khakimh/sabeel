import { NavLink } from 'react-router-dom'
import Icon from './Icon'
import { NAV_ITEMS } from '../config/nav'

// Identical across all 5 Stitch screens except which tab is active.
// React Router's NavLink handles the active-state class automatically from
// the current route — no manual DOM class-toggling needed.
//
// The center Kajian tab is a highlighted FAB, exactly as designed. Its
// active state only ever toggles the `active` class (which drives the
// filled-icon look via `.active .material-symbols-outlined` in
// src/styles/index.css) — it deliberately never toggles a `text-primary`
// color class. The FAB sits on its own bg-primary (teal) background at all
// times; adding a teal text color on top of a teal background makes the
// icon render the same color as what it's sitting on, i.e. invisible. This
// exact bug exists in Stitch's own raw HTML export (verified by opening it
// directly) — reproducing it here would not be "matching the design," it
// would be reproducing a rendering defect Stitch's own visual screenshot
// doesn't actually show. Every other visual property (position, size,
// shadow, background) is unchanged.
export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between h-20 px-md relative">
        {NAV_ITEMS.map((item) =>
          item.fab ? (
            <div key={item.path} className="flex-1 flex justify-center -mt-10">
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  `w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_4px_20px_rgba(0,106,100,0.3)] transition-transform active:scale-95${
                    isActive ? ' active' : ''
                  }`
                }
              >
                <Icon name={item.icon} className="!text-[32px] !fill-1" />
              </NavLink>
            </div>
          ) : (
            <NavLink
              key={item.path}
              to={item.route}
              end={item.route === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 gap-xs transition-colors ${
                  isActive ? 'text-primary active' : 'text-on-surface-variant'
                }`
              }
            >
              <Icon name={item.icon} />
              <span className="font-label-sm text-label-sm">{item.label}</span>
            </NavLink>
          )
        )}
      </div>
    </nav>
  )
}
