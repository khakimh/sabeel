// Home repeats this exact utility combination twice (Kajian Terdekat +
// Kajian Online Terbaru carousels); Kajian/Masjid/Library will need the same
// pattern for their own carousels. Extracted once so future pages reuse
// this instead of retyping the class string — same markup/classes as
// before, just named.
export default function HorizontalScroller({ children }) {
  return (
    <div className="flex overflow-x-auto gap-md pb-4 snap-x snap-mandatory -mx-md px-md [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  )
}
