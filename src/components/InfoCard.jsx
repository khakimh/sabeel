import Icon from './Icon'

// A titled content section on the About page: icon + heading, then
// freeform body content.
//
// VISUAL REDESIGN (approved): About is explicitly called out to feel
// "editorial and minimal... hierarchy through typography and spacing
// rather than excessive cards" — so this dropped the white/
// border/shadow/radius card shell it used to have (and the icon's round
// accent-tinted badge, simplified to a plain icon next to the title) in
// favor of a flat section separated from the next one by a hairline
// divider. Same component, same call sites in About.jsx — just no longer
// a "card."
/** @param {{ icon: string, title: string, children: React.ReactNode }} props */
export default function InfoCard({ icon, title, children }) {
  return (
    <div className="flex flex-col gap-3 py-4 border-b border-hairline last:border-b-0">
      <div className="flex items-center gap-2.5">
        <Icon name={icon} className="text-primary text-[20px]" />
        <h2 className="font-headline-md text-headline-md font-semibold text-on-surface">{title}</h2>
      </div>
      <div className="flex flex-col gap-2.5 font-body-lg text-body-lg text-on-surface-variant">{children}</div>
    </div>
  )
}
