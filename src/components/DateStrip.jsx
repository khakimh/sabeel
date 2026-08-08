import { useState } from 'react'
import Icon from './Icon'

// Kajian "Jadwal Kajian" calendar strip: section heading + month label, and
// a horizontally-scrollable row of day circles. Selecting a day only
// updates which circle is highlighted — like Masjid's filter chips, it
// doesn't filter the schedule list below yet (no per-day mock schedule
// data exists to filter against); see technical debt.
//
// The month label is a plain, non-interactive <span>, matching Stitch's own
// markup exactly (not a <button>) — there's no second month to switch to
// yet, so making it a real button would be exactly the kind of unfulfilled
// affordance the Masjid card's href="#" anchor was avoided for.
//
// VISUAL REDESIGN (approved): the w-11 h-11 (44px) day circle — the actual
// touch target — is untouched. Its selected-state shadow moved from a
// saturated teal-tinted value to the neutral `shadow-soft` (the solid teal
// fill already signals "selected" on its own). The numeral now uses the
// `card-title` size (15px) instead of `headline-md`, which is correctly a
// section-title size (17px) now that it's real — a day number isn't a
// section title.
//
// Alignment fix: the event dot used to be conditionally rendered
// (`d.hasKajian && <span .../>`), which means days without a kajian had no
// dot element at all — a genuinely shorter column (measured: 64px vs 76px
// for days with a dot). With `items-center` on the row, each column was
// centered independently within the row's own cross-size, so the shorter
// columns' labels/circles sat 6px lower than the taller ones (measured via
// getBoundingClientRect, not assumed) — the actual cause of the reported
// misalignment. Fixed by always rendering the dot slot at the same size,
// just transparent when there's no kajian that day, so every column has
// identical total height regardless of content — "defined vertical slots"
// rather than a variable-height column. `items-start` replaces
// `items-center` on the row as a second, non-arbitrary correctness fix:
// with every column now the same height it's a no-op today, but it's the
// structurally correct choice for a row of fixed-slot columns (no longer
// relying on all heights happening to match).
/** @param {{ title: string, monthLabel: string, days: import('../mock/kajian').CalendarDay[] }} props */
export default function DateStrip({ title, monthLabel, days }) {
  const [selectedDate, setSelectedDate] = useState(days.find((d) => d.selected)?.date ?? days[0]?.date)

  return (
    <div>
      <div className="flex justify-between items-end px-md mb-3">
        <h2 className="font-headline-md text-headline-md font-semibold text-on-surface">{title}</h2>
        <span className="font-label-md text-label-md font-medium text-primary flex items-center gap-1 active:opacity-70 transition-opacity">
          {monthLabel}
          <Icon name="expand_more" className="text-[18px]" />
        </span>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-3 px-md items-start justify-between [&::-webkit-scrollbar]:hidden">
        {days.map((d) => {
          const isSelected = d.date === selectedDate
          return (
            <div key={d.date} className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <span
                className={`font-label-sm text-label-sm font-medium ${
                  isSelected ? 'text-primary' : d.isWeekend ? 'text-error' : 'text-on-surface-variant'
                }`}
              >
                {d.day}
              </span>
              <button
                type="button"
                onClick={() => setSelectedDate(d.date)}
                aria-pressed={isSelected}
                aria-label={`Tanggal ${d.date}`}
                className={`w-11 h-11 rounded-full flex items-center justify-center font-headline-md text-card-title font-semibold transition-transform active:scale-95 ${
                  isSelected
                    ? 'bg-primary text-on-primary shadow-soft'
                    : 'text-on-surface transition-colors active:bg-surface-container-high'
                }`}
              >
                {d.date}
              </button>
              <span
                className={`w-1 h-1 rounded-full mt-0.5 ${
                  d.hasKajian ? (isSelected ? 'bg-primary' : 'bg-tertiary-fixed-dim') : 'bg-transparent'
                }`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
