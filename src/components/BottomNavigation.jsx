import { NavLink } from 'react-router-dom'
import Icon from './Icon'
import { NAV_ITEMS } from '../config/nav'

// All 5 destinations now render through one identical path — Kajian is a
// normal nav item, not a floating FAB. Removed: the FAB branch (circular
// bg-primary button, its negative-margin overhang, its larger icon size,
// its own shadow/press-scale treatment) — none of that is needed anymore.
// React Router's NavLink still handles the active-state class
// automatically from the current route, same mechanism as before; Kajian
// now gets exactly the same `text-primary active` treatment as every other
// item when active (previously the FAB deliberately never used that class,
// since teal text on its own teal circle would have been invisible — that
// reason no longer applies now that there's no circle).
//
// Height: was h-20 (80px) to make room for the FAB's overhang above the
// bar. With no FAB, h-16 (64px) is a standard, appropriately compact
// mobile bottom-nav height — `items-stretch` still makes each NavLink fill
// that full height (so the touch target is the whole 64px-tall column, not
// just the icon+label's own content height), and each item's own
// `justify-center` keeps its icon+label centered within it.
//
// config/nav.js's Kajian entry still has `fab: true` in its data — that
// field is no longer read here at all (nothing branches on it anymore),
// so it's inert. Left it as-is since this change is scoped to
// BottomNavigation only; flagging it in case a config cleanup is wanted.
export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl border-t border-hairline">
      <div className="flex items-stretch justify-between h-16 px-md">
        {NAV_ITEMS.map((item) => (
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
        ))}
      </div>
    </nav>
  )
}
