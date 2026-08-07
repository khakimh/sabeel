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
/** @param {{ title: string, monthLabel: string, days: import('../mock/kajian').CalendarDay[] }} props */
export default function DateStrip({ title, monthLabel, days }) {
  const [selectedDate, setSelectedDate] = useState(days.find((d) => d.selected)?.date ?? days[0]?.date)

  return (
    <div>
      <div className="flex justify-between items-end px-md mb-4">
        <h2 className="font-headline-md text-headline-md text-on-surface">{title}</h2>
        <span className="font-label-md text-label-md text-primary flex items-center gap-1 active:opacity-70 transition-opacity">
          {monthLabel}
          <Icon name="expand_more" className="text-[18px]" />
        </span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-md items-center justify-between [&::-webkit-scrollbar]:hidden">
        {days.map((d) => {
          const isSelected = d.date === selectedDate
          return (
            <div key={d.date} className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <span
                className={`font-label-sm text-label-sm ${
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
                className={`w-11 h-11 rounded-full flex items-center justify-center font-headline-md text-headline-md transition-transform active:scale-95 ${
                  isSelected
                    ? 'bg-primary text-on-primary shadow-[0_4px_12px_rgba(0,106,100,0.3)]'
                    : 'text-on-surface transition-colors active:bg-surface-container-high'
                }`}
              >
                {d.date}
              </button>
              {d.hasKajian && (
                <span
                  className={`w-1 h-1 rounded-full mt-0.5 ${isSelected ? 'bg-primary' : 'bg-tertiary-fixed-dim'}`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
