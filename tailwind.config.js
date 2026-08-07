/** @type {import('tailwindcss').Config} */
//
// IMPORTANT: this theme.extend block is ported VERBATIM from the tailwind-config
// <script> embedded in every Stitch-exported screen (Beranda, Kajian, Masjid,
// Perpustakaan, Profil) — re-verified live against the Stitch MCP project
// (projects/16403309371103694612) before writing this file, not from memory.
// Do not "fix" or extend it based on the Sabeel Design System markdown doc —
// that doc and this generated config disagree in a few places (e.g. the
// border-radius scale, and the doc's fontSize scale was never wired in here
// at all), and pixel-exact parity with what Stitch actually renders means
// keeping those discrepancies, not resolving them.
//
// Tailwind v4 is CSS-config-first by default, but this JS config is bridged
// in via the `@config` directive in src/styles/index.css — that keeps the
// exact same verified token values/format rather than hand-translating every
// value into v4's newer @theme CSS syntax, which would risk subtle drift on
// a "do not change colors/spacing/typography" requirement.
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
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
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
    },
  },
  plugins: [],
}
