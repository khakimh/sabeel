// Home repeats this exact utility combination twice (Kajian Terdekat +
// Kajian Online Terbaru carousels); Kajian/Masjid/Library will need the same
// pattern for their own carousels. Extracted once so future pages reuse
// this instead of retyping the class string — same markup/classes as
// before, just named.
//
// Density pass (explicitly requested): card gap and bottom scroll-clearance
// padding trimmed one step; -mx-md/px-md kept exactly as-is since that pair
// is load-bearing for the edge-bleed effect, not incidental whitespace.
export default function HorizontalScroller({ children }) {
  return (
    <div className="flex overflow-x-auto gap-sm pb-2 snap-x snap-mandatory -mx-md px-md [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  )
}
