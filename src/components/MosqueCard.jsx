import Icon from './Icon'
import BookmarkButton from './BookmarkButton'

// Masjid "Cari Masjid" list card.
//
// Stitch's own export wraps this in <a href="#">, but there is no mosque
// detail page yet — same situation as Home's Kajian/Video cards, and
// resolved the same way: a plain, visually-identical, non-interactive
// element rather than a real link to nowhere (an href="#" anchor is a
// genuine anti-pattern, not just an accessibility nitpick — it does nothing
// or jumps the scroll position unexpectedly). Every visual property
// (shape, spacing, shadow, press animation) is unchanged; only the DOM tag
// differs. Becomes a real `<Link>` once a detail route exists.
//
// The bookmark button here intentionally never turns primary-colored (see
// BookmarkButton's `activeClassName` doc) — matching this screen's Stitch
// export exactly, not Home's.
//
// VISUAL REDESIGN (approved): same card recipe as Kajian's cards
// (border-hairline + shadow-soft + rounded-card) — Masjid is explicitly
// in scope for the redesign even though it's temporarily off the bottom
// nav. Bookmark button's tap target bumped 32px→44px; title moved off the
// (now real, 17px, section-tier) `headline-md` onto `card-title` (15px).
/** @param {{ mosque: import('../mock/masjid').MosqueItem }} props */
export function MosqueCard({ mosque }) {
  const hasKajianToday = mosque.kajianToday > 0

  return (
    <div className="bg-surface-container-lowest border border-hairline rounded-card shadow-soft overflow-hidden active:scale-[0.98] transition-transform cursor-pointer">
      <div
        className="relative w-full h-40 bg-surface-variant bg-cover bg-center"
        style={{ backgroundImage: `url('${mosque.image}')` }}
      >
        <BookmarkButton
          id={mosque.id}
          defaultBookmarked={mosque.bookmarked}
          className="absolute top-2 right-2 w-11 h-11 rounded-full bg-surface-container-lowest/80 backdrop-blur flex items-center justify-center text-on-surface"
          iconClassName="!text-[20px]"
          inactiveClassName=""
          activeClassName=""
        />
        <div className="absolute bottom-3 left-3 bg-primary-container text-on-primary-container px-2 py-1 rounded-md font-label-sm text-label-sm font-medium flex items-center gap-1">
          <Icon name="near_me" className="!text-[13px]" />
          {mosque.distanceKm}
        </div>
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h3 className="font-headline-md text-card-title font-semibold text-on-surface truncate">{mosque.name}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{mosque.address}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <Icon
            name={hasKajianToday ? 'campaign' : 'event_busy'}
            className={`!text-[15px] ${hasKajianToday ? 'text-primary' : 'text-on-surface-variant'}`}
          />
          <span
            className={`font-label-md text-label-md font-medium ${hasKajianToday ? 'text-primary' : 'text-on-surface-variant'}`}
          >
            {hasKajianToday ? `${mosque.kajianToday} Kajian hari ini` : 'Tidak ada kajian hari ini'}
          </span>
        </div>
      </div>
    </div>
  )
}
