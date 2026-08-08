import Icon from './Icon'

// Profile "Profil Saya" header block: avatar with edit badge, name,
// location, and the primary CTA button.
//
// The edit badge is a plain, non-interactive <div> — matching Stitch's own
// markup exactly (it's a <div>, not a <button>, despite the pencil icon).
// There's no photo-upload flow to wire it to yet, and promoting it to a
// real button that does nothing on click would just be a differently-shaped
// version of the fake-interactive-element problem already avoided elsewhere
// (the Masjid card's href="#"). "Hubungkan Google Calendar" IS a real
// <button> in Stitch's export (full press/shadow treatment), so it stays
// one here too — inert for now, same as Home's "Lihat Semua".
//
// VISUAL REDESIGN (approved): this block stays flat (no card wrapper —
// it's the account-identity header, not a content entity). Name now uses
// the real display-lg-mobile size (22px) with an explicit font-semibold
// (it previously had no weight class at all — harmless when the size was
// a no-op, wrong now that it's real). CTA text moved from label-md (13px)
// to body-lg (15px) — a primary full-width action button reads better at
// a slightly larger size than a metadata label. Shadows standardized to
// the one neutral `shadow-soft` everywhere (avatar ring, edit badge, CTA).
/** @param {{ profile: import('../services/profileService').Profile }} props */
export default function ProfileHeader({ profile }) {
  return (
    <div className="px-4 py-6 flex flex-col items-center">
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full overflow-hidden shadow-soft bg-surface-container-high border-[4px] border-surface">
          <img alt={`Profile Picture of ${profile.name}`} className="w-full h-full object-cover" src={profile.avatar} />
        </div>
        <div className="absolute bottom-0 right-0 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-soft">
          <Icon name="edit" className="text-label-md" />
        </div>
      </div>
      <h1 className="font-display-lg-mobile text-display-lg-mobile font-semibold text-on-surface mb-1 text-center">
        {profile.name}
      </h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
        <Icon name="location_on" className="text-[15px]" />
        {profile.location}
      </p>
      <button
        type="button"
        className="mt-5 bg-primary text-on-primary font-body-lg text-body-lg font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 w-full max-w-[280px] shadow-soft active:scale-95 transition-transform"
      >
        <Icon name="calendar_today" className="text-[20px]" />
        Hubungkan Google Calendar
      </button>
    </div>
  )
}
