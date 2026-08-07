import Icon from './Icon'
import BookmarkButton from './BookmarkButton'

// Kajian renders as different card shapes depending on context. Only the
// two Home variants are implemented in this increment — the full schedule
// card (Kajian page) is added when that page's turn comes.

// Home "Kajian Terdekat" horizontal-scroll card.
export function KajianCardCompact({ item }) {
  return (
    <div className="min-w-[260px] w-[260px] flex flex-col bg-surface-container-lowest rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] snap-start overflow-hidden cursor-pointer transition-transform active:scale-[0.98]">
      <div className="bg-cover bg-center w-full h-32 relative" style={{ backgroundImage: `url('${item.image}')` }}>
        <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Icon name="location_on" className="text-[14px] text-primary" />
          <span className="font-label-sm text-label-sm text-on-surface">{item.distanceKm}</span>
        </div>
        {item.todayBadge && (
          <div className="absolute bottom-3 right-3 bg-primary text-on-primary px-2 py-1 rounded-lg shadow-sm">
            <span className="font-label-sm text-label-sm">Hari Ini</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h3 className="font-headline-md text-headline-md text-on-surface text-[16px] leading-tight line-clamp-2">
          {item.title}
        </h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <Icon name="person" className="text-[18px] text-primary/70" />
            <span className="font-body-sm text-body-sm truncate">{item.ustadz}</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <Icon name="schedule" className="text-[18px] text-primary/70" />
            <span className="font-body-sm text-body-sm">{item.time}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Home "Kajian Hari Ini" vertical list item, with bookmark toggle.
export function KajianCardListItem({ item }) {
  const categoryClasses =
    item.categoryStyle === 'accent'
      ? 'bg-primary-container text-on-primary-container'
      : 'bg-surface-container-high text-on-surface'

  return (
    <div className="flex items-center gap-4 p-3 bg-surface-container-lowest rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] relative cursor-pointer transition-transform active:scale-[0.98]">
      <img className="w-20 h-20 rounded-xl object-cover shrink-0" src={item.image} alt="" loading="lazy" />
      <div className="flex flex-col flex-1 min-w-0 py-1">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span
            className={`px-2 py-0.5 ${categoryClasses} rounded-full font-label-sm text-[10px] uppercase tracking-wider`}
          >
            {item.category}
          </span>
          <BookmarkButton
            id={item.id}
            defaultBookmarked={item.bookmarked}
            className="p-1 hover:text-primary transition-colors focus:outline-none"
            iconClassName="text-[20px]"
            inactiveClassName="text-outline-variant"
          />
        </div>
        <h3 className="font-body-lg text-body-lg text-on-surface font-semibold truncate">{item.title}</h3>
        <div className="flex items-center gap-3 mt-1.5 text-on-surface-variant">
          <div className="flex items-center gap-1 min-w-0">
            <Icon name="mosque" className="text-[14px]" />
            <span className="font-body-sm text-[12px] truncate">{item.mosque}</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Icon name="schedule" className="text-[14px]" />
            <span className="font-body-sm text-[12px]">{item.time}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
