import { useState } from 'react'
import Icon from '../components/Icon'
import DateStrip from '../components/DateStrip'
import { KajianCardSchedule } from '../components/KajianCard'
import { getKajianSchedule, KAJIAN_QUICK_FILTERS } from '../services/kajianService'

// Matches the Stitch "Jadwal Kajian" screen exactly (verified live via the
// Stitch MCP, project 16403309371103694612): search bar with trailing mic
// button, quick-filter chip row, calendar strip, and the schedule card list
// inside a rounded bottom sheet.
//
// The search bar and filter chips here are deliberately NOT built through
// the shared SearchBar/FilterChip components used by Home/Masjid: Stitch
// styles almost every property differently on this screen (padding, focus
// ring, transition, shadow, chip height/shadow/font-size), and this screen
// additionally has a trailing mic button and a leading icon-only filter
// button that those screens don't. Forcing this through the same
// components would mean either drifting from Stitch's actual markup here,
// or piling on enough override props that the shared component stops
// meaning anything — see docs/architecture.md's Tailwind/Reusability
// conventions. If a future screen needs this exact same treatment, that's
// the point to extract it.
//
// Density pass (explicitly requested): search/filter section padding and
// the schedule sheet's top padding/margin trimmed one step; chip height
// (h-9, already near the 44px comfortable-touch floor) and the day-circle
// size in DateStrip are untouched.
export default function Kajian() {
  const { calendar, schedule } = getKajianSchedule()
  const [activeQuickFilter, setActiveQuickFilter] = useState(KAJIAN_QUICK_FILTERS[0])

  return (
    <div className="flex flex-col w-full">
      {/* Search Section */}
      <div className="px-md pt-sm pb-xs">
        <div className="relative w-full shadow-sm rounded-xl">
          <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            type="text"
            placeholder="Cari ustaz, tema, atau masjid..."
            aria-label="Cari ustaz, tema, atau masjid..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/50 font-body-lg text-body-lg transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          />
          <button
            type="button"
            aria-label="Cari dengan suara"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-surface-container text-primary transition-colors active:scale-95"
          >
            <Icon name="mic" className="text-[20px]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-md [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          aria-label="Filter lanjutan"
          className="flex items-center justify-center min-w-[40px] h-9 rounded-full bg-surface-container-lowest text-on-surface shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-95 transition-transform"
        >
          <Icon name="tune" className="text-[20px]" />
        </button>
        <div className="w-px h-5 bg-outline-variant/50 mx-1" />
        {KAJIAN_QUICK_FILTERS.map((filter) => {
          const active = filter === activeQuickFilter
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveQuickFilter(filter)}
              aria-pressed={active}
              className={
                active
                  ? 'px-4 h-9 rounded-full bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap shadow-[0_4px_12px_rgba(0,106,100,0.25)] transition-transform active:scale-95'
                  : 'px-4 h-9 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md whitespace-nowrap shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform active:scale-95 active:bg-surface-container-high'
              }
            >
              {filter}
            </button>
          )
        })}
      </div>

      {/* Date Selector + Schedule Sheet */}
      <div className="bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.02)] py-3 mt-1 rounded-t-3xl relative z-10 flex-1 min-h-[calc(100vh-200px)]">
        <DateStrip title="Jadwal Kajian" monthLabel={calendar.monthLabel} days={calendar.days} />

        <div className="h-1.5 w-12 bg-surface-container mx-auto rounded-full mb-3" />

        <div className="flex flex-col gap-3 px-md pb-lg">
          {schedule.map((item) => (
            <KajianCardSchedule key={item.id} item={item} />
          ))}

          <div className="flex flex-col items-center justify-center py-4 gap-2 text-on-surface-variant opacity-80">
            <Icon name="mosque" className="text-[32px]" />
            <p className="font-body-sm text-body-sm text-center max-w-[200px]">
              Temukan lebih banyak majelis ilmu di sekitarmu.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
