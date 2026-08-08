import Icon from './Icon'

// A titled content card: icon badge + heading, then freeform body content.
// Used 4 times on the About page. Reuses the same card treatment already
// established across the app — rounded-[18px]/shadow-sm/bg-surface-container-lowest
// (SettingsGroup, MosqueCard) and the same accent icon-badge treatment
// already used by SettingsItem's "accent" variant — rather than inventing
// a new visual language for this page. Generic enough to be worth keeping
// as a real component: any future static/informational page (Help,
// Privacy, Terms) would want the same icon+title+body card shape.
/** @param {{ icon: string, title: string, children: React.ReactNode }} props */
export default function InfoCard({ icon, title, children }) {
  return (
    <div className="bg-surface-container-lowest rounded-[18px] shadow-sm p-lg flex flex-col gap-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
          <Icon name={icon} />
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface">{title}</h2>
      </div>
      <div className="flex flex-col gap-3 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        {children}
      </div>
    </div>
  )
}
