import SearchBar from '../components/SearchBar'
import SectionHeader from '../components/SectionHeader'
import HorizontalScroller from '../components/HorizontalScroller'
import { KajianCardCompact, KajianCardListItem } from '../components/KajianCard'
import { VideoCardCarousel } from '../components/VideoCard'
import { getHomeKajian } from '../services/kajianService'
import { getHomeCarouselVideos } from '../services/libraryService'

// Matches the Stitch "Beranda Sabeel" screen exactly (verified live via the
// Stitch MCP, project 16403309371103694612): greeting, search bar, "Kajian
// Terdekat" carousel, "Kajian Hari Ini" list, "Kajian Online Terbaru" carousel.
//
// VISUAL REDESIGN (approved): most of Home's new look comes for free from
// the shared/card components already redesigned (SearchBar, SectionHeader,
// KajianCard, VideoCard) — the only page-level change needed is the
// greeting's weight (display-lg-mobile is now a real 22px size and needs
// an explicit weight to match the "medium/semibold, not bold" rule; it
// previously had no weight class at all, which was harmless when the size
// was a no-op). Section order/content/spacing are unchanged from the
// density pass.
export default function Home() {
  const { nearby, today } = getHomeKajian()
  const onlineLatest = getHomeCarouselVideos()

  return (
    <div className="flex flex-col w-full px-md mt-sm gap-lg">
      {/* Greeting */}
      <div className="flex flex-col gap-1">
        <h1 className="font-display-lg-mobile text-display-lg-mobile font-semibold text-on-surface">
          Assalamu&apos;alaikum 👋
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Temukan kajian di sekitar Anda.</p>
      </div>

      <SearchBar placeholder="Search kajian, ustadz, or mosque..." />

      {/* Kajian Terdekat */}
      <section className="flex flex-col gap-sm">
        <SectionHeader title="Kajian Terdekat" action="Lihat Semua" />
        <HorizontalScroller>
          {nearby.map((item) => (
            <KajianCardCompact key={item.id} item={item} />
          ))}
        </HorizontalScroller>
      </section>

      {/* Kajian Hari Ini */}
      <section className="flex flex-col gap-sm">
        <SectionHeader title="Kajian Hari Ini" />
        <div className="flex flex-col gap-2">
          {today.map((item) => (
            <KajianCardListItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Kajian Online Terbaru */}
      <section className="flex flex-col gap-sm">
        <SectionHeader title="Kajian Online Terbaru" />
        <HorizontalScroller>
          {onlineLatest.map((video) => (
            <VideoCardCarousel key={video.id} video={video} />
          ))}
        </HorizontalScroller>
      </section>
    </div>
  )
}
