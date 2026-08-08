import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilterChip from '../components/FilterChip'
import { MosqueCard } from '../components/MosqueCard'
import { getMosqueDirectory, MOSQUE_FILTERS } from '../services/masjidService'

// Masjid is off the bottom nav (see config/nav.js) but its route, page, and
// every component it uses stay fully intact — and per explicit
// instruction, it gets the same visual redesign as every other page, not
// a frozen legacy look.
//
// VISUAL REDESIGN (approved): SearchBar's override here moved from a
// shadowed, fully-pill `bg-surface-container` field to the same flat
// `surface-input`/`rounded-xl` language every other input now uses — one
// consistent input style app-wide instead of a bespoke per-screen shape.
// Card list gap and bottom padding brought in line with Kajian's list
// spacing (both are vertical lists of content-entity cards); the old
// `pb-24` was redundant with AppLayout's own `pb-3xl` bottom clearance,
// which every other page already relies on alone.
export default function Masjid() {
  const mosques = getMosqueDirectory()
  const [activeFilter, setActiveFilter] = useState(MOSQUE_FILTERS[0])

  return (
    <div className="flex flex-col w-full px-md gap-md">
      {/* Search & Filter Area */}
      <div className="flex flex-col gap-md">
        <SearchBar
          placeholder="Cari masjid atau lokasi..."
          className="h-11 bg-surface-input rounded-xl placeholder:text-on-surface-variant"
          iconClassName="text-[20px]"
        />
        <div className="flex gap-sm overflow-x-auto pb-2 -mx-md px-md [&::-webkit-scrollbar]:hidden">
          {MOSQUE_FILTERS.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              active={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 pb-6">
        {mosques.map((mosque) => (
          <MosqueCard key={mosque.id} mosque={mosque} />
        ))}
      </div>
    </div>
  )
}
