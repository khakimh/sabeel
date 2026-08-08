import { Link } from 'react-router-dom'
import Icon from './Icon'

// Profile's settings/menu row: icon circle + label + trailing chevron.
// Used 5 times across Profile's 3 groups. `iconVariant` covers the one
// visual split Stitch actually makes: "Google Calendar Sync" gets an
// active teal icon circle ("accent"); the other 4 rows get the plain
// neutral gray circle ("neutral", the default).
//
// VISUAL REDESIGN (approved): flattened from a filled/hover-tinted row
// inside a card into a plain list row with a hairline bottom divider
// (`last:border-b-0` drops it on each group's final row) — Profile
// settings are explicitly called out to go flat rather than every row
// living inside a floating card. The row itself is still the full tap
// target (icon + label + chevron all sit inside one <button>/<Link>), so
// even though the icon circle shrank to 36px, the effective touch target
// is the whole row's height, comfortably over 44px.
//
// Rendered as a real, inert <button> by default — 4 of these 5 rows have
// no destination yet (no calendar-sync flow, no notification-settings
// page, no favorites list; see technical debt). Pass `to` for a row that
// DOES have a real destination ("Tentang Sabeel" → /about) and it renders
// as a real <Link> instead, with identical styling.
/** @param {{ icon: string, label: string, iconVariant?: 'accent'|'neutral', to?: string }} props */
export default function SettingsItem({ icon, label, iconVariant = 'neutral', to }) {
  const iconWrapperClasses =
    iconVariant === 'accent'
      ? 'bg-primary-container/20 text-primary'
      : 'bg-surface-container-high text-on-surface-variant'

  const className =
    'w-full flex items-center justify-between gap-3 py-3 border-b border-hairline last:border-b-0 active:bg-surface-container-low transition-colors text-left'

  const content = (
    <>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${iconWrapperClasses}`}>
          <Icon name={icon} className="text-[19px]" />
        </div>
        <span className="font-body-lg text-body-lg text-on-surface">{label}</span>
      </div>
      <Icon name="chevron_right" className="text-on-surface-variant text-[20px]" />
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
