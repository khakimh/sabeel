// The project's own landscape wordmark, added as `frontend/sabeel-logo.png`
// and moved here to `public/assets/images/` (the established convention for
// locally-hosted static assets — see docs/architecture.md's folder
// conventions) so Vite actually serves it; a file sitting outside
// `public/`/`src/` isn't included in the build at all.
//
// The source file is a 1000x1000 canvas with the actual wordmark occupying
// only a ~935x209 landscape region in the middle (confirmed by computing
// its non-transparent pixel bounding box) — the rest is transparent
// padding. Serving it at that native 1:1 ratio and constraining it to a
// header-scale height would render the wordmark at only a few px tall,
// effectively invisible. The file used here is losslessly cropped to that
// content region (plus a small even margin) — every wordmark pixel is
// untouched, nothing was redrawn, resized, or recolored; only the
// surrounding empty canvas was trimmed, which is why it now has its true
// ~3.9:1 landscape aspect ratio.
export const SABEEL_LOGO_URL = '/assets/images/sabeel-logo.png'

// Same avatar used in the AppHeader (top-right) and the Profile page in the
// Stitch export — one placeholder "current user" for the whole app.
export const CURRENT_USER_AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAQgtOLfnPXWCOL0xRleQEAk2rxHPvNK2Ylm87TNsg_OCDU8v47advOOK1TUCwkP72kjbvn0IVmTaRqPIHR7Oumgr5GRPcubk-nJfNZda0P36VyTrFZSDGyA8hfbkGi_0JSmd4Emr24qwsysppW-fVUXnD4A9U-gVb7KEeYqVwi-8-sfx9UXrynvDLKV4xdqcSMpxeSOV3qoIQW1F06-dSRCotlFlWjg0DhukoCD63wDVoKRbRR2-XHcw'
