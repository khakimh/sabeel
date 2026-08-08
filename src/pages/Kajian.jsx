import { useState } from 'react'
import Icon from '../components/Icon'
import DateStrip from '../components/DateStrip'
import { KajianCardSchedule } from '../components/KajianCard'
import { getKajianSchedule, KAJIAN_QUICK_FILTERS } from '../services/kajianService'

// Kajian is the app's primary feature — its cards get the standard content
// card treatment via KajianCardSchedule, and this page's own inline
// search/filter chrome (still deliberately not routed through
// SearchBar/FilterChip — the structural differences that justified that
// call originally are unchanged) now matches the same flat-input/flat-chip
// language those components carry.
//
// VISUAL REDESIGN (approved):
// - Search input: flat `surface-input` fill, invisible border until focus
//   (via `focus-within` on the wrapper, since the input itself is the
//   element that receives :focus) — no `focus:outline-none` anywhere, so
//   the global :focus-visible outline keeps working for keyboard users.
// - Mic/tune buttons and every quick-filter chip bumped to the 44px
//   touch-target floor (were 32-36px) and moved off shadows onto flat
//   fills, consistent with "accent used intentionally, not on every chip."
// - The schedule sheet's soft-but-still-present shadow replaced with a
//   hairline top border — one flat surface, not another elevated layer.
export default function Kajian() {
  const { calendar, schedule } = getKajianSchedule()
  const [activeQuickFilter, setActiveQuickFilter] = useState(KAJIAN_QUICK_FILTERS[0])

  return (
    <div className="flex flex-col w-full">
      {/* Search Section */}
      <div className="px-md pt-sm pb-xs">
        <div className="relative w-full border border-transparent focus-within:border-primary rounded-xl transition-colors">
          <Icon
            name="search"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
          />
          <input
            type="text"
            placeholder="Cari ustaz, tema, atau masjid..."
            aria-label="Cari ustaz, tema, atau masjid..."
            className="w-full pl-11 pr-14 py-3 rounded-xl bg-surface-input text-on-surface placeholder:text-on-surface-variant font-body-lg text-body-lg"
          />
          <button
            type="button"
            aria-label="Cari dengan suara"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-primary transition-colors active:scale-95"
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
          className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-surface-input text-on-surface active:scale-95 transition-transform"
        >
          <Icon name="tune" className="text-[20px]" />
        </button>
        <div className="w-px h-5 bg-hairline mx-1" />
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
                  ? 'px-4 h-11 rounded-full bg-primary text-on-primary font-label-md text-label-md font-medium whitespace-nowrap transition-transform active:scale-95'
                  : 'px-4 h-11 rounded-full bg-surface-input text-on-surface-variant font-label-md text-label-md font-medium whitespace-nowrap transition-transform active:scale-95 active:bg-surface-container'
              }
            >
              {filter}
            </button>
          )
        })}
      </div>

      {/* Date Selector + Schedule Sheet */}
      <div className="bg-surface-container-lowest border-t border-hairline py-3 mt-1 rounded-t-3xl relative z-10 flex-1 min-h-[calc(100vh-200px)]">
        <DateStrip title="Jadwal Kajian" monthLabel={calendar.monthLabel} days={calendar.days} />

        <div className="h-1.5 w-12 bg-hairline mx-auto rounded-full mb-3" />

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
