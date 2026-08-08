import { useCallback, useState } from 'react'

// Bookmark state persisted to localStorage, keyed by item id, so the same
// item bookmarked on one screen stays bookmarked if it appears elsewhere.
const STORAGE_KEY = 'sabeel:bookmarks'

function readOverrides() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function writeOverrides(overrides) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides))
}

export function useBookmark(id, defaultBookmarked = false) {
  const [bookmarked, setBookmarked] = useState(() => {
    const overrides = readOverrides()
    return id in overrides ? overrides[id] : defaultBookmarked
  })

  const toggle = useCallback(() => {
    setBookmarked((prev) => {
      const next = !prev
      const overrides = readOverrides()
      overrides[id] = next
      writeOverrides(overrides)
      return next
    })
  }, [id])

  return [bookmarked, toggle]
}

// Read-only, non-hook accessor for the same storage this hook manages —
// added for Shortlist, which needs to know what's currently bookmarked
// from a service function (not a component), and must not read
// localStorage a second, independent way to get that answer. This is the
// "one source of truth for bookmarked Kajian" the feature is built around:
// every write still goes through `useBookmark`'s `toggle` above; this only
// adds a read path onto the exact same storage.
export function isBookmarked(id, defaultBookmarked = false) {
  const overrides = readOverrides()
  return id in overrides ? overrides[id] : defaultBookmarked
}
