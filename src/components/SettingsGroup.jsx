// Profile's settings-group card wrapper: an optional uppercase label above
// a set of SettingsItem rows. Repeated 3 times on this screen — the third
// group has no label, matching Stitch's own markup exactly (`label` is
// optional here for that reason, not for speculative reuse).
/** @param {{ label?: string, children: React.ReactNode }} props */
export default function SettingsGroup({ label, children }) {
  return (
    <div className="bg-surface-container-lowest rounded-[18px] shadow-sm p-2 flex flex-col gap-2">
      {label && (
        <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-wider px-4 pt-2">{label}</h2>
      )}
      {children}
    </div>
  )
}
