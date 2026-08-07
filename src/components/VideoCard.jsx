import Icon from './Icon'

// Home's "Kajian Online Terbaru" carousel card. Library's full-width list
// variant is added when the Library page's own increment lands.
export function VideoCardCarousel({ video }) {
  return (
    <div className="min-w-[220px] w-[220px] flex flex-col gap-3 snap-start group cursor-pointer">
      <div
        className="w-full h-32 rounded-xl bg-cover bg-center relative shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
        style={{ backgroundImage: `url('${video.thumbnail}')` }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-xl flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
            <Icon name="play_arrow" className="text-primary" filled />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-inverse-surface/90 text-inverse-on-surface px-1.5 py-0.5 rounded text-[10px] font-label-sm">
          {video.duration}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-body-sm text-body-sm text-on-surface font-semibold line-clamp-2 leading-snug">
          {video.title}
        </h3>
        <span className="font-label-sm text-[11px] text-on-surface-variant font-normal">{video.ustadz}</span>
      </div>
    </div>
  )
}
