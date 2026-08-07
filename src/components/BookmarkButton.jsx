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
// `hover:text-primary transition-colors` and the focus-visible ring are
// baked in here rather than repeated per call site: all 3 current
// consumers (Home, Masjid, Kajian) already asked for the identical
// hover/transition treatment, so it's a genuine repeated pattern, not a
// speculative one — and one consumer had dropped the focus outline
// (`focus:outline-none`) with no replacement, a real keyboard-accessibility
// gap. Owning focus/hover here once fixes that gap for every consumer
// instead of re-deciding it ad hoc per call site.
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
      className={`hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${className} ${
        bookmarked ? activeClassName : inactiveClassName
      }`}
    >
      <Icon name={bookmarked ? 'bookmark' : 'bookmark_border'} className={iconClassName} filled={bookmarked} />
    </button>
  )
}
