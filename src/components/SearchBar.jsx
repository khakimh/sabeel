import Icon from './Icon'

// Shared search-input shell (icon + input) reused by Home and Masjid.
// Each screen still supplies its own `className`/`iconClassName` for
// whatever genuinely differs (Kajian's own inline search input, with its
// trailing mic button, remains intentionally separate — same reasoning as
// before, now just restyled at its own call site).
//
// `aria-label` is required here — the placeholder is the only text hint in
// the design, and a placeholder alone is not a valid accessible name.
//
// VISUAL REDESIGN (approved): flat input language from Stitch's own design
// doc — `surface-input` (#f3f4f6) background, invisible border until
// focus, then a real 1px primary-color border. No `focus:outline-none`
// anywhere here — the global :focus-visible outline in styles/index.css
// must keep working for keyboard users; the border-color change on
// `focus:` is an additional (not replacement) visual cue for any focus,
// including a mouse/touch tap into the field. Height trimmed to h-11
// (44px) — the accessible-touch-target floor, not below it.
export default function SearchBar({
  placeholder,
  className = 'h-11 bg-surface-input rounded-xl',
  iconClassName = 'text-[20px]',
}) {
  return (
    <div className="relative w-full">
      <Icon
        name="search"
        className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant ${iconClassName}`}
      />
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        className={`w-full pl-10 pr-4 font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant border border-transparent focus:border-primary transition-colors ${className}`}
      />
    </div>
  )
}
