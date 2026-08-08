import { Link } from 'react-router-dom'
import Icon from './Icon'

// Profile's settings/menu row: icon circle + label + trailing chevron.
// Used 5 times across Profile's 3 groups. `iconVariant` covers the one
// visual split Stitch actually makes: "Google Calendar Sync" gets an
// active teal icon circle ("accent"); the other 4 rows get the plain
// neutral gray circle ("neutral", the default) — not a per-row style
// choice, just these two fixed values.
//
// Rendered as a real, inert <button> by default — 4 of these 5 rows have
// no destination yet (no calendar-sync flow, no notification-settings
// page, no favorites list; see technical debt). Pass `to` for a row that
// DOES have a real destination ("Tentang Sabeel" → /about) and it renders
// as a real <Link> instead, with identical styling — same
// backward-compatible-prop pattern as SearchBar's className/iconClassName.
//
// Density pass (explicitly requested): row padding trimmed one step
// (p-4→p-3) — the 40px icon circle plus padding still keeps the row well
// above the 44px comfortable-touch-target floor.
/** @param {{ icon: string, label: string, iconVariant?: 'accent'|'neutral', to?: string }} props */
export default function SettingsItem({ icon, label, iconVariant = 'neutral', to }) {
  const iconWrapperClasses =
    iconVariant === 'accent'
      ? 'bg-primary-container/20 text-primary'
      : 'bg-surface-container-high text-on-surface-variant'

  const className =
    'w-full flex items-center justify-between p-3 bg-surface-container-lowest hover:bg-surface-container-low transition-colors rounded-xl text-left'

  const content = (
    <>
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconWrapperClasses}`}>
          <Icon name={icon} />
        </div>
        <span className="font-headline-md text-[16px] text-on-surface">{label}</span>
      </div>
      <Icon name="chevron_right" className="text-on-surface-variant" />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={className}>
      {content}
    </button>
  )
}
