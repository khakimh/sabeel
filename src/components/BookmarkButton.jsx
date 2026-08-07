import Icon from './Icon'
import { useBookmark } from '../hooks/useBookmark'

// One implementation reused everywhere a bookmark toggle appears (Home's
// list items, Masjid's mosque cards; Kajian/Library cards reuse this in
// their own increments). Each call site supplies its own wrapper/icon/state
// classes so it keeps its exact per-screen visual treatment from Stitch —
// only the toggle mechanism is shared. `activeClassName` exists because
// Masjid's bookmark button (per Stitch's own export) never turns
// primary-colored when bookmarked — only the icon glyph/fill toggles — unlike
// Home's, which does turn primary-colored. Defaults preserve Home's exact
// existing behavior.
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
      className={`${className} ${bookmarked ? activeClassName : inactiveClassName}`}
    >
      <Icon name={bookmarked ? 'bookmark' : 'bookmark_border'} className={iconClassName} filled={bookmarked} />
    </button>
  )
}
