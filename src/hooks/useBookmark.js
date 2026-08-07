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
