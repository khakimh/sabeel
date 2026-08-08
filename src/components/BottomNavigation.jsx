import { NavLink } from 'react-router-dom'
import Icon from './Icon'
import { NAV_ITEMS } from '../config/nav'

// All 5 destinations render through one identical structure, in one row,
// inside the bar — Kajian is not a floating FAB and never overlaps the
// content above the bar. React Router's NavLink still handles the
// active-state class automatically from the current route.
//
// Two separate, independent concerns, deliberately not conflated:
// 1. Kajian's teal circular icon container ("primary action" styling) —
//    driven purely by config/nav.js's `fab` flag (still `true` only on the
//    Kajian entry, left over from the old floating-button implementation,
//    now repurposed for this). Always on for Kajian, always off for the
//    other four, never tied to the current route.
// 2. Current-page active styling (teal text, filled icon) — driven
//    entirely by NavLink's own `isActive`, for all 5 items including
//    Kajian. Unaffected by concern 1.
//
// Kajian has no VISIBLE text label (per explicit instruction), but its
// label <span> is still rendered — just `invisible` (visibility:hidden) —
// rather than omitted outright. This is deliberate, not leftover markup:
// first tried removing it and letting `justify-center` re-center the lone
// icon, then correcting the gap with a negative margin; measured (not
// assumed) that the correction only moved the icon 4px of the needed 8px,
// because a negative margin on a single flex item under
// `justify-content: center` doesn't shift position 1:1 — it also shrinks
// the free-space calculation centering uses, which re-splits and only
// applies half the intended offset. Rendering the same-sized label slot
// for every item (visible text for 4, hidden for Kajian) makes all 5
// columns' total content height identical again, so centering naturally
// lines up every icon with zero margin math — the same "reserve the slot,
// hide the content" fix already used once before in DateStrip's event-dot
// alignment bug. `aria-label` on the NavLink + `aria-hidden` on the hidden
// span keep Kajian's accessible name as "Kajian" for assistive tech, since
// `visibility:hidden` text isn't otherwise available to compute one from.
//
// Height: h-16 (64px, unchanged) — `items-stretch` still makes each
// NavLink fill that full height, so the touch target is the whole column;
// the 40px circle sits comfortably inside it with no overflow, and
// `shadow-soft` gives it a subtle shadow without a heavier FAB-style one.
// Icon-to-label gap tightened (gap-1 → gap-0.5) for the requested more
// compact bar — applies identically to all 5 items, Kajian included
// (its hidden label still reserves the same gap).
//
// Icon-to-label spacing fix: the 40px icon container can't shrink (it's
// Kajian's circle size, which must stay exactly as-is), so most of the
// perceived "too much whitespace" wasn't the gap-0.5 itself — it was the
// ~9px of invisible padding *inside* that 40px box below the centered 22px
// glyph, before the label even starts. Kajian's icon still needs to sit
// centered within its own circle (`items-center`, unchanged), but the 4
// regular items' container is otherwise invisible layout scaffolding, so
// their glyph is bottom-aligned instead (`items-end`) — closing that
// internal padding without touching the container's own size or position,
// leaving only the explicit gap-0.5 (2px) as the visible icon-to-label
// space. Never both `items-center` and `items-end` on the same element —
// same two-classes-same-property collision risk as the FAB icon-color bug.
//
// Vertical position of the 4 regular items: confirmed by inspection (and
// by the identical measurements already taken) that Home/Masjid/
// Library/Profil are pixel-identical — there's no per-item distinction, so
// a "Home feels too low" report applies equally to all four. Per explicit
// direction, nudged all four up together on their own flex column. This
// isn't a negative margin: it's bottom padding on a flex item that's
// already stretched to a fixed height (`items-stretch` on the row makes
// every NavLink exactly h-16 regardless of content), so it shrinks that
// item's own available content area from the bottom before
// `justify-center` centers icon+label within it — a plain, predictable
// box-model effect (shift ≈ half the padding value), not fighting a
// parent's margin-based centering math the way earlier attempts did.
//
// Second pass: tried bumping the 4 regular items from `pb-2` (8px) to
// `pb-3` (12px) for another ≈2px of upward movement. Measured (not
// assumed) that this was unsafe: with icon(40) + gap-0.5(2) + this label's
// rendered height, the column's required content already exactly fills
// the 64px bar's available space at `pb-2` — confirmed by directly probing
// padding values from 8px to 12px, where the icon container's own
// rendered height silently shrank from 40px down to 36px as flex-shrink
// compressed it to fit. `pb-2` is the actual maximum safe value here, not
// a number chosen by feel — going further would violate "icon sizes
// unchanged" (the container would shrink) even though no visible
// clipping/overflow would occur, so the 4 regular items stay at `pb-2`,
// unchanged from the previous pass. Reported this constraint rather than
// silently shrinking the icon to hit an arbitrary "2-3px more" target.
//
// Kajian mirrors the same mechanism with `pt-2` (8px, ≈4px shift) on its
// own column instead — same predictable box-model effect, opposite
// direction, moving its circle down. Verified safe the same way (its
// circle stays exactly 40×40 up to pt-8, only starts shrinking at pt-9,
// so pt-2 has comfortable headroom). Its own icon-container still centers
// the calendar glyph via `items-center` exactly as before — this only
// moves where that whole centered block sits within the bar, not anything
// about the circle's own size, color, or internal layout. Icon size,
// icon-to-label gap (still gap-0.5), and horizontal position are all
// untouched on every item.
export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl border-t border-hairline">
      <div className="flex items-stretch justify-between h-16 px-md">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.route}
            end={item.route === '/'}
            aria-label={item.fab ? item.label : undefined}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 gap-0.5 transition-colors ${
                item.fab ? 'pt-2' : 'pb-2'
              } ${isActive ? 'text-primary active' : 'text-on-surface-variant'}`
            }
          >
            <span
              className={`w-10 h-10 flex justify-center rounded-full transition-colors ${
                item.fab ? 'items-center bg-primary shadow-soft' : 'items-end'
              }`}
            >
              <Icon name={item.icon} className={`!text-[22px] ${item.fab ? 'text-on-primary' : ''}`} />
            </span>
            <span
              aria-hidden={item.fab ? 'true' : undefined}
              className={`font-label-sm text-label-sm font-medium ${item.fab ? 'invisible' : ''}`}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
