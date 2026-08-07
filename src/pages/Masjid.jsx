import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilterChip from '../components/FilterChip'
import { MosqueCard } from '../components/MosqueCard'
import { getMosqueDirectory, MOSQUE_FILTERS } from '../services/masjidService'

// Matches the Stitch "Cari Masjid" screen exactly (verified live via the
// Stitch MCP, project 16403309371103694612): search bar, filter chip row,
// mosque card list.
export default function Masjid() {
  const mosques = getMosqueDirectory()
  const [activeFilter, setActiveFilter] = useState(MOSQUE_FILTERS[0])

  return (
    <div className="flex flex-col w-full px-md gap-lg">
      {/* Search & Filter Area */}
      <div className="flex flex-col gap-md">
        <SearchBar
          placeholder="Cari masjid atau lokasi..."
          className="h-12 bg-surface-container rounded-full shadow-sm placeholder:text-on-surface-variant"
          iconClassName=""
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
      <div className="flex flex-col gap-4 pb-24">
        {mosques.map((mosque) => (
          <MosqueCard key={mosque.id} mosque={mosque} />
        ))}
      </div>
    </div>
  )
}
