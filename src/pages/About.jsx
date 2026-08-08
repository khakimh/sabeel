import InfoCard from '../components/InfoCard'

// "Tentang Sabeel" — a static informational page reached by drilling into
// Profile's "Tentang Sabeel" settings row (not from Stitch — this screen
// doesn't exist there — so its layout deliberately reuses only patterns
// already established elsewhere in the app: InfoCard's card/icon/heading
// treatment, the same spacing tokens, the same primary-button and
// input-focus treatments used on Kajian/Masjid).
//
// The sr-only h1 gives the page a real document-structure landmark distinct
// from AppHeader's chrome (which is a styled span, not a heading) — the 4
// section titles below are h2s under it.
//
// VISUAL REDESIGN (approved): editorial/minimal per the redesign brief —
// InfoCard dropped its card shell and now owns its own vertical rhythm
// (py-4 + a hairline divider between sections), so the page-level `gap-sm`
// that used to sit between card-wrapped sections was removed entirely;
// keeping it would have doubled up with InfoCard's own padding.
export default function About() {
  return (
    <div className="flex flex-col w-full px-md py-sm">
      <h1 className="sr-only">Tentang Sabeel</h1>

      <InfoCard icon="info" title="Tentang Sabeel">
        <p>
          Sabeel is a platform that helps Muslims discover Islamic study sessions (kajian), both offline and online, in
          one place.
        </p>
        <p>
          Our goal is to make Islamic knowledge easier to discover while respecting and supporting the original creators
          and organizers.
        </p>
      </InfoCard>

      <InfoCard icon="travel_explore" title="Dari mana data kajian berasal?">
        <p>
          Jadwal kajian di Sabeel dikumpulkan secara otomatis dari beberapa akun Instagram menggunakan proses crawling.
        </p>
        <p>
          Kami menggunakan Apify untuk membantu mengumpulkan informasi yang dipublikasikan secara terbuka oleh
          penyelenggara kajian.
        </p>
        <p>Data tersebut kemudian diproses agar lebih mudah dicari berdasarkan tanggal, ustadz, maupun lokasi.</p>
      </InfoCard>

      <InfoCard icon="smart_display" title="Bagaimana dengan video YouTube?">
        <p>Semua video yang ditampilkan di Sabeel menggunakan YouTube Official Embed.</p>
        <p>Kami tidak mengunduh, menyimpan, atau mendistribusikan ulang video YouTube ke dalam database kami.</p>
        <p>Video tetap diputar langsung dari YouTube menggunakan player resmi YouTube.</p>
        <p>
          Dengan pendekatan ini, monetisasi, jumlah penayangan (views), dan statistik video tetap tercatat pada channel
          YouTube aslinya.
        </p>
      </InfoCard>

      <InfoCard icon="feedback" title="Feedback">
        <p>
          &quot;Akan ada masanya development Sabeel melanggar batasan. Mohon ingatkan kami di sini.&quot;
        </p>
        <form
          className="flex flex-col gap-2"
          onSubmit={(event) => {
            event.preventDefault()
            // TODO(backend): connect to the Google Apps Script backend once
            // a feedback endpoint exists — POST the textarea's value there
            // instead of just preventing the default page reload.
          }}
        >
          <label className="sr-only" htmlFor="feedback-message">
            Masukan atau kritik
          </label>
          <textarea
            id="feedback-message"
            name="feedback-message"
            rows={5}
            placeholder="Tulis masukan atau kritikmu di sini..."
            className="w-full rounded-xl bg-surface-input p-3 font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant border border-transparent focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="self-start min-h-11 bg-primary text-on-primary font-body-lg text-body-lg font-semibold px-5 py-2.5 rounded-full shadow-soft active:scale-95 transition-transform"
          >
            Submit Feedback
          </button>
        </form>
      </InfoCard>
    </div>
  )
}
