// Home's section-header pattern only ("Title" alone, or "Title" + "Lihat
// Semua" action). Library draws this pattern differently (own action-button
// style) — deliberately not built here yet; add it as its own variant when
// Library's increment lands, same discipline as SearchBar/KajianCard/VideoCard.
export default function SectionHeader({ title, action }) {
  const heading = <h2 className="font-headline-md text-headline-md text-on-surface">{title}</h2>

  if (!action) {
    return heading
  }

  return (
    <div className="flex items-center justify-between">
      {heading}
      <button type="button" className="font-label-md text-label-md text-primary active:opacity-70 transition-opacity">
        {action}
      </button>
    </div>
  )
}
