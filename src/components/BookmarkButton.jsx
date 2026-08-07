import Icon from './Icon'
import { useBookmark } from '../hooks/useBookmark'

// One implementation reused everywhere a bookmark toggle appears (Home's
// list items today; Kajian/Masjid cards will reuse this in their own
// increments). Each call site supplies its own wrapper/icon classes so it
// keeps its exact per-screen visual treatment from Stitch — only the toggle
// mechanism is shared.
export default function BookmarkButton({
  id,
  defaultBookmarked = false,
  className = '',
  iconClassName = '',
  inactiveClassName = 'text-outline-variant',
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
      className={`${className} ${bookmarked ? 'text-primary' : inactiveClassName}`}
    >
      <Icon name={bookmarked ? 'bookmark' : 'bookmark_border'} className={iconClassName} filled={bookmarked} />
    </button>
  )
}
