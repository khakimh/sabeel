// Home repeats this exact utility combination twice (Kajian Terdekat +
// Kajian Online Terbaru carousels) — the only two consumers of this
// component anywhere in the app (verified via grep before touching it, per
// "don't blindly change this globally").
//
// Spacing fix: this used to cancel Home's own `px-md` container padding
// with `-mx-md` and then re-add it via `px-md` on itself (an edge-bleed
// pattern). That made the scroll *viewport* span the full screen width, so
// at rest the partially-visible next card was cut off flush against the
// true screen edge — no right-side breathing room, unlike "Kajian Hari
// Ini" (a plain list with no bleed, boxed entirely within Home's own
// px-md). Removed the bleed entirely: this now just inherits the parent's
// existing padding, so both edges match "Kajian Hari Ini" exactly. Cards'
// own width/height/content/radius/shadow are untouched — only this
// wrapper's horizontal margin/padding changed.
export default function HorizontalScroller({ children }) {
  return (
    <div className="flex overflow-x-auto gap-sm pb-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  )
}
