// Renders a Google Material Symbols Outlined glyph exactly as used in the
// Stitch export (same font, same base .material-symbols-outlined class from
// src/styles/index.css, same FILL-toggle mechanism via the `filled` prop).
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
