import Icon from './Icon'

// Shared search-input shell (icon + input) reused by Home and Masjid.
// Stitch draws this differently per screen — Home uses a taller, more
// rounded, shadowless pill with a dimmed placeholder and an explicit 24px
// icon; Masjid uses a shorter, fully-rounded, shadowed pill with a
// full-opacity placeholder and a default-sized icon. Rather than
// duplicating the whole component for those differences, `className`/
// `iconClassName` carry only the classes that actually vary, defaulted to
// Home's values so its call site is unaffected by Masjid's own override.
//
// Kajian's variant (trailing mic button) is still deliberately not built
// here — same discipline as KajianCard/VideoCard: each page's own variant
// gets added when that page's increment lands, instead of speculative
// unused branches sitting in a shared component untested.
//
// `aria-label` is required here — the placeholder is the only text hint in
// the design, and a placeholder alone is not a valid accessible name (it
// disappears on input and isn't reliably announced by all assistive tech).
//
// Density pass (explicitly requested): Home's default height trimmed from
// h-14 (56px) to h-12 (48px) — still above the 44px minimum comfortable
// touch target. Masjid passes its own full className override already, so
// this default change has no effect there.
export default function SearchBar({
  placeholder,
  className = 'h-12 bg-surface-container rounded-[18px] placeholder:text-on-surface-variant/60',
  iconClassName = 'text-[22px]',
}) {
  return (
    <div className="relative w-full">
      <Icon
        name="search"
        className={`absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant ${iconClassName}`}
      />
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        className={`w-full pl-12 pr-4 font-body-lg text-body-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-primary transition-shadow ${className}`}
      />
    </div>
  )
}
