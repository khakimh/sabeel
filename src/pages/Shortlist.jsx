import EmptyState from '../components/EmptyState'
import { KajianCardSchedule } from '../components/KajianCard'
import { getShortlistedKajian } from '../services/shortlistService'

// New primary page — not from Stitch (this screen doesn't exist there), so
// its layout deliberately reuses only patterns already established
// elsewhere: Home's greeting-style header (h1 + one-line subtitle, same
// typography/spacing tokens), and Kajian's own KajianCardSchedule for each
// bookmarked item — reusing that card rather than building a second one,
// since it already renders every field this page needs (title, ustadz,
// category, mosque/location, time, and the existing BookmarkButton).
//
// Header kept intentionally minimal (h1 + one short line) — same size
// treatment as every other page's own header, nothing larger.
export default function Shortlist() {
  const items = getShortlistedKajian()

  return (
    <div className="flex flex-col w-full px-md py-md gap-md">
      <div className="flex flex-col gap-1">
        <h1 className="font-display-lg-mobile text-display-lg-mobile font-semibold text-on-surface">Shortlist</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Kajian yang sudah kamu simpan.</p>
      </div>

      {items.length === 0 ? (
        <EmptyState
          icon="bookmark"
          title="Belum ada kajian tersimpan"
          description="Simpan kajian yang ingin kamu ikuti dengan menekan ikon bookmark."
        />
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <KajianCardSchedule key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
