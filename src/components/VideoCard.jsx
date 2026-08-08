import Icon from './Icon'

// Home's "Kajian Online Terbaru" carousel card. See VideoCardListItem below
// for Library's full-width list variant.
//
// VISUAL REDESIGN (approved): deliberately kept card-less (image + caption,
// no border/shadow wrapper) — unlike Kajian's compact carousel card, this
// one has almost no text below the thumbnail, so the thumbnail itself is
// already the whole visual unit; wrapping it in a card frame would be
// exactly the "unnecessary visual chrome" the redesign brief asks to
// avoid. `shadow-soft` still applied to the thumbnail image itself for a
// touch of lift, replacing the old ad hoc shadow value.
/** @param {{ video: import('../mock/library').VideoItem }} props */
export function VideoCardCarousel({ video }) {
  return (
    <div className="min-w-[220px] w-[220px] flex flex-col gap-2 snap-start group cursor-pointer">
      <div
        className="w-full h-28 rounded-xl bg-cover bg-center relative shadow-soft"
        style={{ backgroundImage: `url('${video.thumbnail}')` }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-xl flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center">
            <Icon name="play_arrow" className="text-primary" filled />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-inverse-surface/90 text-inverse-on-surface px-1.5 py-0.5 rounded text-label-sm font-label-sm font-medium">
          {video.duration}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-body-sm text-body-sm text-on-surface font-semibold line-clamp-2 leading-snug">
          {video.title}
        </h3>
        <span className="font-label-sm text-label-sm text-on-surface-variant">{video.ustadz}</span>
      </div>
    </div>
  )
}

// Library "Kajian Terbaru" full-width list card — a real content-entity
// card, so it gets the same border/shadow-soft/rounded-card recipe as
// Kajian's and Masjid's cards. `video.live` switches the top-left "Live
// Now" badge and the live view-count styling — Stitch's original verb
// distinction ("ditonton" once finished, "menonton" while live) and the
// dropped timestamp row for live videos are unchanged.
//
// The trailing "more options" button has no menu behind it yet (same
// technical debt as before) — its tap target was bumped to 44px (was a
// ~28px effective target from `p-1` alone) to meet the accessible-touch-
// target floor; the icon itself stays visually small.
/** @param {{ video: import('../mock/library').LibraryVideoItem }} props */
export function VideoCardListItem({ video }) {
  return (
    <div className="bg-surface-container-lowest border border-hairline rounded-card shadow-soft overflow-hidden flex flex-col group cursor-pointer transition-transform active:scale-[0.98]">
      <div className="relative w-full h-40 bg-surface-container">
        <img className="w-full h-full object-cover" src={video.thumbnail} alt="" />
        <div className="absolute bottom-2 right-2 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface font-label-sm text-label-sm font-medium px-2 py-1 rounded-md">
          {video.duration}
        </div>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-soft">
            <Icon name="play_arrow" className="!text-[28px]" filled />
          </div>
        </div>
        {video.live && (
          <div className="absolute top-2 left-2 bg-error text-on-error font-label-sm text-label-sm font-medium px-2 py-1 rounded-md uppercase tracking-wide flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-on-error rounded-full animate-pulse" />
            Live Now
          </div>
        )}
      </div>
      <div className="p-3 flex gap-sm">
        <img className="w-10 h-10 rounded-full object-cover shrink-0" src={video.avatar} alt="" />
        <div className="flex flex-col">
          <h3 className="font-body-lg text-card-title font-semibold text-on-surface line-clamp-2 leading-snug group-active:text-primary transition-colors">
            {video.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{video.ustadzName}</p>
          {video.live ? (
            <div className="flex items-center gap-2 mt-1 font-body-sm text-body-sm text-error font-medium">
              <span>{video.views}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 mt-1 font-body-sm text-body-sm text-outline">
              <span>{video.views}</span>
              <div className="w-1 h-1 rounded-full bg-outline-variant" />
              <span>{video.timestamp}</span>
            </div>
          )}
        </div>
        <button
          type="button"
          aria-label="Opsi lainnya"
          className="ml-auto self-start shrink-0 w-11 h-11 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-colors"
        >
          <Icon name="more_vert" className="!text-[20px]" />
        </button>
      </div>
    </div>
  )
}
