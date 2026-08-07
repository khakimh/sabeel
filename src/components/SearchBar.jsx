import Icon from './Icon'

// Home's search bar variant only. The Stitch export draws this 2 more
// different ways on Kajian (trailing mic button) and Masjid (pill shape) —
// deliberately not built here. Following the same discipline already used
// by KajianCard/VideoCard: each page's own variant gets added when that
// page's increment lands, instead of speculative unused branches sitting
// in a shared component untested.
//
// `aria-label` is required here — the placeholder is the only text hint in
// the design, and a placeholder alone is not a valid accessible name (it
// disappears on input and isn't reliably announced by all assistive tech).
export default function SearchBar({ placeholder }) {
  return (
    <div className="relative w-full">
      <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[24px]" />
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full h-14 pl-12 pr-4 bg-surface-container rounded-[18px] font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
      />
    </div>
  )
}
