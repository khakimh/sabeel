import Icon from './Icon'

// Generic empty-result presentation: icon + title + description, centered.
// "EmptyState" was named in the original component list from the start,
// but deliberately not built until now — docs/architecture.md's
// Interaction pattern conventions note explicitly said no page could
// produce a genuine empty result yet, and building one speculatively would
// have been exactly the kind of unjustified abstraction this project has
// consistently declined elsewhere. Shortlist is the first real case (a
// user with no bookmarks yet), so this is built now, for that.
/** @param {{ icon: string, title: string, description: string }} props */
export default function EmptyState({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 px-md py-3xl">
      <Icon name={icon} className="text-[40px] text-on-surface-variant" />
      <h2 className="font-headline-md text-headline-md font-semibold text-on-surface">{title}</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[280px]">{description}</p>
    </div>
  )
}
