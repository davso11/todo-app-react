import { Dropdown } from 'flowbite-react'
import { IoAddCircleOutline as AddIcon } from 'react-icons/io5'
import { IoAnalyticsOutline as StatsIcon } from 'react-icons/io5'

function MenuButton({ onNew, onStats }) {
  return (
    <Dropdown
      label="Menu"
      className="!rounded-lg p-0 shadow-none"
      placement="left-start"
    >
      <Dropdown.Item
        className="flex gap-2 text-sm text-black"
        icon={() => AddIcon({ color: 'black' })}
        onClick={onNew}
      >
        Ajouter un tâche
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className="flex gap-2 text-sm text-black"
        icon={() => StatsIcon({ color: 'black' })}
        onClick={onStats}
      >
        Voir les statistiques
      </Dropdown.Item>
    </Dropdown>
  )
}

export { MenuButton }
