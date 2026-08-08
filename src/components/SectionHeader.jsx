// Home's section-header pattern only ("Title" alone, or "Title" + "Lihat
// Semua" action). Library draws this pattern differently (own action-button
// style) — deliberately not built here yet; add it as its own variant when
// Library's increment lands, same discipline as SearchBar/KajianCard/VideoCard.
//
// VISUAL REDESIGN (approved): now that headline-md/label-md carry real
// sizes (17px/13px, from tailwind.config.js), both get an explicit weight
// class too — semibold for the section title, medium for the action —
// per the redesign's "medium/semibold over bold" typography rule. The
// action button previously had zero padding (just bare text), measuring
// well under the 44px touch-target floor — `min-h-11 flex items-center`
// guarantees the real tap height regardless of the text's own line-height,
// without changing its visual size (padding, not a bigger font).
export default function SectionHeader({ title, action }) {
  const heading = <h2 className="font-headline-md text-headline-md font-semibold text-on-surface">{title}</h2>

  if (!action) {
    return heading
  }

  return (
    <div className="flex items-center justify-between">
      {heading}
      <button
        type="button"
        className="min-h-11 flex items-center font-label-md text-label-md font-medium text-primary active:opacity-70 transition-opacity"
      >
        {action}
      </button>
    </div>
  )
}
