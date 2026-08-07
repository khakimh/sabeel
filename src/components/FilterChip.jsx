// Reusable pill toggle used by Masjid's filter row (Semua/Terdekat/Favorit/
// Buka). Named and built now — unlike SearchBar/SectionHeader's deferred
// variants — because it's used 4 times on this single screen, exactly the
// "duplicated 3+ times" threshold that justifies a component rather than
// inline-repeating the same two class strings.
export default function FilterChip({ label, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? 'shrink-0 h-8 px-4 bg-primary text-on-primary rounded-full font-label-sm shadow-sm'
          : 'shrink-0 h-8 px-4 bg-surface-container text-on-surface-variant rounded-full font-label-sm transition-colors active:bg-surface-variant'
      }
    >
      {label}
    </button>
  )
}
