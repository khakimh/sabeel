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
/** @param {{ profile: import('../services/profileService').Profile }} props */
export default function ProfileHeader({ profile }) {
  return (
    <div className="px-4 py-8 flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden shadow-sm bg-surface-container-high border-[4px] border-surface">
          <img alt={`Profile Picture of ${profile.name}`} className="w-full h-full object-cover" src={profile.avatar} />
        </div>
        <div className="absolute bottom-0 right-0 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-md">
          <Icon name="edit" className="text-label-md" />
        </div>
      </div>
      <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-1 text-center">{profile.name}</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
        <Icon name="location_on" className="text-[16px]" />
        {profile.location}
      </p>
      <button
        type="button"
        className="mt-8 bg-primary text-on-primary font-label-md text-label-md px-6 py-4 rounded-full flex items-center justify-center gap-2 w-full max-w-[280px] shadow-sm hover:shadow-md transition-shadow active:scale-95 transition-transform"
      >
        <Icon name="calendar_today" />
        Hubungkan Google Calendar
      </button>
    </div>
  )
}
