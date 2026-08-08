// Profile's settings-group wrapper: an optional uppercase label above a
// set of SettingsItem rows.
//
// VISUAL REDESIGN (approved): dropped the white/rounded/shadowed card
// shell entirely — Profile settings are explicitly called out to be a
// flat, borderless list (SettingsItem's own hairline row dividers now do
// the grouping work a card border used to). `label` stays optional since
// the 3rd group genuinely has none.
/** @param {{ label?: string, children: React.ReactNode }} props */
export default function SettingsGroup({ label, children }) {
  return (
    <div className="flex flex-col">
      {label && (
        <h2 className="font-label-sm text-label-sm font-semibold text-primary uppercase tracking-wide px-1 pb-2">
          {label}
        </h2>
      )}
      <div className="flex flex-col">{children}</div>
    </div>
  )
}
