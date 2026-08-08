import Icon from './Icon'
import BookmarkButton from './BookmarkButton'

// Kajian renders as different card shapes depending on context: two compact
// Home variants, and the full schedule card below for the Kajian page.
//
// VISUAL REDESIGN (approved): all 3 variants below now share one card
// recipe — white surface, a 1px `border-hairline`, one `shadow-soft`
// elevation, and the standardized `rounded-card` (16px) radius — replacing
// the previous mix of arbitrary shadow/radius values. Titles moved to the
// new `card-title` size (15px/600) instead of the old `headline-md`
// (which is now correctly a *section*-title size, 17px, and would have
// been the wrong tier here) or a raw `text-[16px]` override. This is
// Kajian's primary content-entity card — see the "live" indicator note on
// KajianCardSchedule below for how it stays prominent without being heavy.

const DISTANCE_ICON = { walk: 'directions_walk', car: 'directions_car' }

// Home "Kajian Terdekat" horizontal-scroll card.
/** @param {{ item: import('../mock/kajian').NearbyKajianItem }} props */
export function KajianCardCompact({ item }) {
  return (
    <div className="min-w-[260px] w-[260px] flex flex-col bg-surface-container-lowest border border-hairline rounded-card shadow-soft snap-start overflow-hidden cursor-pointer transition-transform active:scale-[0.98]">
      <div className="bg-cover bg-center w-full h-28 relative" style={{ backgroundImage: `url('${item.image}')` }}>
        <div className="absolute top-2 left-2 bg-surface/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
          <Icon name="location_on" className="text-[13px] text-primary" />
          <span className="font-label-sm text-label-sm font-medium text-on-surface">{item.distanceKm}</span>
        </div>
        {item.todayBadge && (
          <div className="absolute bottom-2 right-2 bg-primary text-on-primary px-2 py-1 rounded-md">
            <span className="font-label-sm text-label-sm font-medium">Hari Ini</span>
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        <h3 className="font-headline-md text-card-title font-semibold text-on-surface leading-snug line-clamp-2">
          {item.title}
        </h3>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <Icon name="person" className="text-[15px] text-primary/70" />
            <span className="font-body-sm text-body-sm truncate">{item.ustadz}</span>
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant">
            <Icon name="schedule" className="text-[15px] text-primary/70" />
            <span className="font-body-sm text-body-sm">{item.time}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Home "Kajian Hari Ini" vertical list item, with bookmark toggle.
/** @param {{ item: import('../mock/kajian').TodayKajianItem }} props */
export function KajianCardListItem({ item }) {
  const categoryClasses =
    item.categoryStyle === 'accent'
      ? 'bg-primary-container text-on-primary-container'
      : 'bg-surface-container-high text-on-surface'

  return (
    <div className="flex items-center gap-3 p-2.5 bg-surface-container-lowest border border-hairline rounded-card shadow-soft relative cursor-pointer transition-transform active:scale-[0.98]">
      <img className="w-16 h-16 rounded-xl object-cover shrink-0" src={item.image} alt="" loading="lazy" />
      <div className="flex flex-col flex-1 min-w-0 py-0.5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span
            className={`px-2 py-0.5 ${categoryClasses} rounded-full font-label-sm text-label-sm font-medium uppercase tracking-wide`}
          >
            {item.category}
          </span>
          <BookmarkButton
            id={item.id}
            defaultBookmarked={item.bookmarked}
            className="w-11 h-11 shrink-0 flex items-center justify-center"
            iconClassName="text-[20px]"
            inactiveClassName="text-outline-variant"
          />
        </div>
        <h3 className="font-body-lg text-card-title text-on-surface font-semibold truncate">{item.title}</h3>
        <div className="flex items-center gap-3 mt-1 text-on-surface-variant">
          <div className="flex items-center gap-1 min-w-0">
            <Icon name="mosque" className="text-[13px]" />
            <span className="font-body-sm text-body-sm truncate">{item.mosque}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Icon name="schedule" className="text-[13px]" />
            <span className="font-body-sm text-body-sm">{item.time}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Kajian "Jadwal Kajian" full schedule card — the app's primary feature,
// so it gets the same card recipe as everything else rather than a heavier
// one. The top accent bar and the "Sedang Berlangsung" badge both key off
// `item.live`.
//
// Live indicator, redesigned but not removed (explicit guardrail): the
// pulsing dot + short label + colored top bar are the same 3-signal
// mechanism as before (color, motion, text — redundant on purpose so it
// reads at a glance for colorblind/low-vision users too), just restyled
// with the new type scale (label-md, 13px, instead of the old label-sm)
// so "Sedang Berlangsung" is comfortably readable rather than a tiny tag.
//
// The bookmark button here uses BookmarkButton's defaults (bookmarked =
// primary-colored, matching Stitch's inline `color: #006a64` on the filled
// icon here) — the same behavior as Home's, unlike Masjid's.
/** @param {{ item: import('../mock/kajian').ScheduleKajianItem }} props */
export function KajianCardSchedule({ item }) {
  const accentClasses = item.live
    ? 'from-error to-error-container opacity-80'
    : 'from-primary-container to-primary opacity-50'

  return (
    <div className="bg-surface-container-lowest border border-hairline rounded-card shadow-soft p-3 flex flex-col gap-2 relative overflow-hidden group">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentClasses}`} />
      <div className="flex justify-between items-start gap-3">
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-medium">
              {item.category}
            </span>
            {item.live && (
              <span className="font-label-md text-label-md font-medium text-error flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse" /> Sedang Berlangsung
              </span>
            )}
          </div>
          <h3 className="font-headline-md text-card-title font-semibold text-on-surface line-clamp-2 leading-snug">
            {item.title}
          </h3>
        </div>
        <BookmarkButton
          id={item.id}
          defaultBookmarked={item.bookmarked}
          className="w-11 h-11 shrink-0 -mt-1 -mr-1 flex items-center justify-center text-on-surface-variant"
          inactiveClassName=""
        />
      </div>
      <div className="flex items-center gap-2 mt-0.5">
        <img className="w-8 h-8 rounded-full object-cover bg-surface-container" src={item.ustadzAvatar} alt="" />
        <span className="font-label-md text-label-md font-medium text-on-surface">{item.ustadzName}</span>
      </div>
      <div className="h-px w-full bg-hairline my-0.5" />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <Icon name="schedule" className="text-[16px]" />
          <span className="font-body-sm text-body-sm">{item.time}</span>
        </div>
        <div className="flex items-start gap-2 text-on-surface-variant">
          <Icon name="location_on" className="text-[16px] mt-0.5" />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="font-label-md text-label-md font-medium text-on-surface truncate">{item.mosque}</span>
            <span className="font-body-sm text-body-sm truncate">{item.address}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="px-2 py-1.5 rounded-lg bg-surface-input text-on-surface font-label-sm text-label-sm font-medium flex items-center gap-1">
              <Icon name={DISTANCE_ICON[item.distanceMode]} className="text-[13px] text-primary" />
              {item.distance}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
