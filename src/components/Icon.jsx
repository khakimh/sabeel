// Renders a Google Material Symbols Outlined glyph (same font, same base
// .material-symbols-outlined class from src/styles/index.css, same
// FILL-toggle mechanism via the `filled` prop).
//
// Reviewed for the visual redesign: every icon in the app already goes
// through this one component, and the base CSS pins one consistent weight
// (`wght 400`) for both filled and outlined states — there's no second
// icon mechanism anywhere to reconcile, so no change was needed here.
export default function Icon({ name, className = '', filled = false, style }) {
  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ''}`}
      style={filled ? { fontVariationSettings: "'FILL' 1", ...style } : style}
    >
      {name}
    </span>
  )
}
