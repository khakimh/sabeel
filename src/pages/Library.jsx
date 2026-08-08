import Icon from '../components/Icon'
import { VideoCardListItem } from '../components/VideoCard'
import { getLibraryVideos } from '../services/libraryService'

// Matches the Stitch "Perpustakaan" screen exactly (verified live via the
// Stitch MCP, project 16403309371103694612): content-type tab row, "Kajian
// Terbaru" section header, full-width video card list.
//
// "Catatan" is a real disabled control, not a fake-clickable one — it's
// explicitly marked "Segera" (coming soon) in the design, and there is
// genuinely nothing to switch to yet. "Kajian Online" is the only
// available view, so it's a static label rather than a button with
// nothing to toggle away from (Stitch's own export doesn't wire either of
// these up as an actual switcher either).
//
// VISUAL REDESIGN (approved): tab pills bumped to the 44px touch-target
// row height (for alignment consistency — "Kajian Online" itself is a
// static label, not interactive, but sitting in a row of pills at a
// consistent height reads as one considered control group). Both the
// section heading and the "Lihat Semua" action were missing an explicit
// text-size utility entirely before this (inheriting whatever ambient
// size applied) — now explicitly sized/weighted to match every other
// section header in the app.
export default function Library() {
  const videos = getLibraryVideos()

  return (
    <div className="flex flex-col w-full gap-sm">
      {/* Content type tabs */}
      <div className="px-md flex gap-sm overflow-x-auto py-sm [&::-webkit-scrollbar]:hidden">
        <span className="bg-primary text-on-primary font-label-md text-label-md font-medium px-4 h-11 rounded-full whitespace-nowrap flex items-center gap-1.5">
          <Icon name="play_circle" className="!text-[18px]" />
          Kajian Online
        </span>
        <button
          type="button"
          disabled
          aria-label="Catatan — segera hadir"
          className="bg-surface-input text-on-surface-variant font-label-md text-label-md font-medium px-4 h-11 rounded-full whitespace-nowrap flex items-center gap-1.5 opacity-70"
        >
          <Icon name="edit_document" className="!text-[18px]" />
          Catatan
          <span className="font-label-sm text-label-sm font-medium bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full ml-1">
            Segera
          </span>
        </button>
      </div>

      {/* Section header */}
      <div className="px-md flex items-center justify-between mt-1">
        <h2 className="font-headline-md text-headline-md font-semibold text-on-surface">Kajian Terbaru</h2>
        <button
          type="button"
          className="min-h-11 text-primary font-label-md text-label-md font-medium flex items-center gap-xs hover:bg-primary/5 px-2 rounded-lg transition-colors"
        >
          Lihat Semua
          <Icon name="arrow_forward" className="!text-[16px]" />
        </button>
      </div>

      {/* Video list */}
      <div className="px-md flex flex-col gap-sm">
        {videos.map((video) => (
          <VideoCardListItem key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}
