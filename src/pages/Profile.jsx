import ProfileHeader from '../components/ProfileHeader'
import SettingsGroup from '../components/SettingsGroup'
import SettingsItem from '../components/SettingsItem'
import { getProfile, SETTINGS_GROUPS } from '../services/profileService'

// Matches the Stitch "Profil Saya" screen exactly (verified live via the
// Stitch MCP, project 16403309371103694612): profile header, 3 settings
// groups, app version footer.
//
// Density pass (explicitly requested): inter-group spacing trimmed one
// step; see ProfileHeader/SettingsItem/SettingsGroup for the rest.
export default function Profile() {
  const profile = getProfile()

  return (
    <div className="flex flex-col w-full h-full pb-32">
      <ProfileHeader profile={profile} />
      <div className="px-4 mt-3 space-y-3">
        {SETTINGS_GROUPS.map((group, index) => (
          <SettingsGroup key={group.label ?? `group-${index}`} label={group.label}>
            {group.items.map((item) => (
              <SettingsItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                iconVariant={item.iconVariant}
                to={item.to}
              />
            ))}
          </SettingsGroup>
        ))}
        <div className="py-4 flex justify-center">
          <span className="font-label-sm text-label-sm text-on-surface-variant opacity-70">Versi 1.2.0</span>
        </div>
      </div>
    </div>
  )
}
