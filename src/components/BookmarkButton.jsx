import Icon from './Icon'
import { useBookmark } from '../hooks/useBookmark'

// One implementation reused everywhere a bookmark toggle appears (Home's
// list items, Masjid's mosque cards, Kajian's schedule cards; Library
// reuses this in its own increment). Each call site supplies its own
// wrapper/icon/state classes so it keeps its exact per-screen visual
// treatment from Stitch — only the toggle mechanism is shared.
// `activeClassName` exists because Masjid's bookmark button (per Stitch's
// own export) never turns primary-colored when bookmarked — only the icon
// glyph/fill toggles — unlike Home's and Kajian's, which do turn
// primary-colored. Defaults preserve Home's exact existing behavior.
//
// `hover:text-primary transition-colors` is baked in here rather than
// repeated per call site: all 4 current consumers (Home, Masjid, Kajian,
// Library reuses this shape too) already ask for the identical
// hover/transition treatment.
//
// VISUAL REDESIGN (approved): the custom `focus:outline-none
// focus-visible:ring-2 ...` this used to carry is removed — that
// `focus:outline-none` was silently defeating the app-wide :focus-visible
// outline now defined once in styles/index.css (Tailwind's utilities
// layer beats `@layer base` regardless of specificity), which was a real
// accessibility regression waiting to happen the moment a shared rule was
// introduced. Every bookmark button now gets the same global focus ring as
// everything else, for free, with less code here.
export default function BookmarkButton({
  id,
  defaultBookmarked = false,
  className = '',
  iconClassName = '',
  inactiveClassName = 'text-outline-variant',
  activeClassName = 'text-primary',
}) {
  const [bookmarked, toggle] = useBookmark(id, defaultBookmarked)

  return (
    <button
      type="button"
      aria-label={bookmarked ? 'Remove Bookmark' : 'Bookmark'}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toggle()
      }}
      className={`hover:text-primary transition-colors ${className} ${bookmarked ? activeClassName : inactiveClassName}`}
    >
      <Icon name={bookmarked ? 'bookmark' : 'bookmark_border'} className={iconClassName} filled={bookmarked} />
    </button>
  )
}
