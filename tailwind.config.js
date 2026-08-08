/** @type {import('tailwindcss').Config} */
//
// VISUAL REDESIGN (approved): this theme was originally ported verbatim from
// Stitch's generated tailwind-config script to pixel-match Stitch's literal
// render. That constraint is lifted for this redesign — colors/spacing are
// still the exact values Stitch generated (brand identity preserved:
// primary #006a64, secondary/primary-container #4ba8a0), but `fontSize`,
// `borderRadius.card`, `boxShadow.soft`, and the two new neutral colors
// below are now real, deliberately authored values, sourced from Stitch's
// own written "Sabeel Design System" doc (fetched live via the Stitch MCP,
// project 16403309371103694612 — not invented), which was itself never
// wired into the generated config before now. Weights in that doc lean
// bold/700; per the approved redesign brief ("prefer medium/semibold over
// bold everywhere") every size below is paired with 500/600 weight classes
// at each call site, not baked into the fontSize tuple (Tailwind's fontSize
// theme doesn't carry a weight).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'on-error': '#ffffff',
        'tertiary-fixed': '#e0e3e6',
        outline: '#6e7977',
        'on-background': '#121c2a',
        'on-primary-fixed-variant': '#00504b',
        surface: '#f8f9ff',
        error: '#ba1a1a',
        'surface-dim': '#d0dbed',
        'secondary-fixed': '#e1e3e4',
        'error-container': '#ffdad6',
        'surface-container-high': '#dee9fc',
        'on-primary-fixed': '#00201e',
        'on-secondary-fixed-variant': '#454748',
        'surface-tint': '#006a64',
        'on-secondary': '#ffffff',
        'surface-variant': '#d9e3f6',
        'surface-container-highest': '#d9e3f6',
        'on-tertiary-container': '#2e3235',
        'on-secondary-fixed': '#191c1d',
        'on-primary': '#ffffff',
        'on-error-container': '#93000a',
        'on-surface-variant': '#3e4947',
        'on-primary-container': '#003835',
        'on-tertiary-fixed-variant': '#43474a',
        'inverse-on-surface': '#eaf1ff',
        background: '#f8f9ff',
        'primary-container': '#4ba8a0',
        'on-secondary-container': '#626566',
        'outline-variant': '#bdc9c7',
        'tertiary-container': '#969a9d',
        'on-tertiary': '#ffffff',
        'inverse-surface': '#27313f',
        primary: '#006a64',
        'surface-container-lowest': '#ffffff',
        'inverse-primary': '#7bd6cd',
        'secondary-container': '#e1e3e4',
        'on-tertiary-fixed': '#181c1e',
        secondary: '#5c5f60',
        tertiary: '#5b5f62',
        'surface-bright': '#f8f9ff',
        'surface-container': '#e6eeff',
        'primary-fixed': '#97f3e9',
        'primary-fixed-dim': '#7bd6cd',
        'secondary-fixed-dim': '#c5c7c8',
        'surface-container-low': '#eff4ff',
        'on-surface': '#121c2a',
        'tertiary-fixed-dim': '#c4c7ca',
        // New for the visual redesign, sourced from Stitch's "Sabeel Design
        // System" doc (not invented): a neutral hairline border for the new
        // border-first card containment model, and a flatter neutral input
        // background distinct from the M3-generated (bluish) surface tokens
        // above. Used only by the redesign — every existing token is
        // untouched.
        hairline: '#e9ecef',
        'surface-input': '#f3f4f6',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
        // New: the one standardized "content card" radius for the redesign
        // (Kajian/Mosque/Video cards) — replaces the mix of rounded-[18px]/
        // rounded-[20px] arbitrary values those cards used individually.
        card: '1rem',
      },
      spacing: {
        '3xl': '64px',
        base: '4px',
        sm: '8px',
        md: '16px',
        '2xl': '48px',
        lg: '24px',
        xl: '32px',
        xs: '4px',
      },
      fontFamily: {
        'display-lg': ['Inter'],
        'body-lg': ['Inter'],
        'label-sm': ['Inter'],
        'headline-md': ['Inter'],
        'display-lg-mobile': ['Inter'],
        'body-sm': ['Inter'],
        'label-md': ['Inter'],
      },
      // New for the redesign: a real fontSize scale, keyed to the same
      // names already used as `text-*` classes throughout every component
      // (previously no-ops — Tailwind never generates a rule for a
      // fontSize key that doesn't exist, so `text-headline-md` etc. did
      // nothing before this). Wiring them under these exact names means
      // most existing markup gets correct sizing with zero className
      // changes; `card-title` is the one genuinely new tier, for
      // content-entity card titles (Kajian/Mosque/Video) that need to read
      // slightly smaller than a section header but distinct from plain
      // body text — see docs/architecture.md's Typography conventions.
      fontSize: {
        'display-lg-mobile': ['22px', { lineHeight: '1.25' }],
        'headline-md': ['17px', { lineHeight: '1.3' }],
        'card-title': ['15px', { lineHeight: '1.35' }],
        'body-lg': ['15px', { lineHeight: '1.55' }],
        'body-sm': ['13px', { lineHeight: '1.45' }],
        'label-md': ['13px', { lineHeight: '1.3' }],
        'label-sm': ['11px', { lineHeight: '1.3', letterSpacing: '0.03em' }],
      },
      // New: one standardized soft shadow for content cards, replacing the
      // several slightly-different arbitrary shadow values
      // (`shadow-[0_4px_20px_rgba(0,0,0,0.05)]` /`...0.03)]` etc.) those
      // cards used individually. Value is Stitch's own design-system doc's
      // "Soft Elevation" spec verbatim.
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
