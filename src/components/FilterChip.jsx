// Reusable pill toggle used by Masjid's filter row (Semua/Terdekat/Favorit/
// Buka).
//
// VISUAL REDESIGN (approved): flat neutral by default, solid teal only
// when active — the "accent used intentionally, not everywhere" rule
// applied to chips specifically. Height bumped 32px→44px (the accessible
// touch-target floor); label size moved from label-sm (11px, meant for
// badges/nav labels) to label-md (13px) since chip text is genuinely
// meaningful/actionable, not decorative — a 44px pill with 11px text would
// look and read oddly.
export default function FilterChip({ label, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? 'shrink-0 h-11 px-5 bg-primary text-on-primary rounded-full font-label-md text-label-md font-medium'
          : 'shrink-0 h-11 px-5 bg-surface-input text-on-surface-variant rounded-full font-label-md text-label-md font-medium transition-colors active:bg-surface-container'
      }
    >
      {label}
    </button>
  )
}
