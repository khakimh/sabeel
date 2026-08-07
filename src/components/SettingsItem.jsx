import Icon from './Icon'

// Profile's settings/menu row: icon circle + label + trailing chevron.
// Used 5 times across Profile's 3 groups. `iconVariant` covers the one
// visual split Stitch actually makes: "Google Calendar Sync" gets an
// active teal icon circle ("accent"); the other 4 rows get the plain
// neutral gray circle ("neutral", the default) — not a per-row style
// choice, just these two fixed values.
//
// Rendered as a real, inert button — none of these 5 rows has a
// destination yet (no calendar-sync flow, no notification-settings page,
// no favorites list, no About page); see technical debt.
/** @param {{ icon: string, label: string, iconVariant?: 'accent'|'neutral' }} props */
export default function SettingsItem({ icon, label, iconVariant = 'neutral' }) {
  const iconWrapperClasses =
    iconVariant === 'accent'
      ? 'bg-primary-container/20 text-primary'
      : 'bg-surface-container-high text-on-surface-variant'

  return (
    <button
      type="button"
      className="w-full flex items-center justify-between p-4 bg-surface-container-lowest hover:bg-surface-container-low transition-colors rounded-xl text-left"
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconWrapperClasses}`}>
          <Icon name={icon} />
        </div>
        <span className="font-headline-md text-[16px] text-on-surface">{label}</span>
      </div>
      <Icon name="chevron_right" className="text-on-surface-variant" />
    </button>
  )
}
