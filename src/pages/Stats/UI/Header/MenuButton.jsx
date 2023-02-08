import { Dropdown } from 'flowbite-react'
import { IoAddCircleOutline as AddIcon } from 'react-icons/io5'
import { IoHomeOutline as HomeIcon } from 'react-icons/io5'

function MenuButton({ onNew, onHome }) {
  return (
    <Dropdown
      label="Menu"
      className="!rounded-lg p-0 shadow-none"
      placement="left-start"
    >
      <Dropdown.Item
        className="flex gap-2 text-sm text-black"
        icon={() => HomeIcon({ color: 'black' })}
        onClick={onHome}
        HomeIcon
      >
        Accueil
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className="flex gap-2 text-sm text-black"
        icon={() => AddIcon({ color: 'black' })}
        onClick={onNew}
      >
        Ajouter un tâche
      </Dropdown.Item>
    </Dropdown>
  )
}

export { MenuButton }
