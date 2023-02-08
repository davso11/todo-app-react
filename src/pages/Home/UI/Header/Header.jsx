import { useNavigate } from 'react-router-dom'
import { MenuButton } from './MenuButton'

function Header() {
  const navigate = useNavigate()

  const goToAddNew = () => {
    navigate('/new')
  }

  const goToAddStats = () => {
    navigate('/stats')
  }

  return (
    <header className="container w-full py-3">
      <div className="flex items-center justify-between gap-10">
        <h1
          className="cursor-pointer text-2xl font-bold"
          onClick={() => navigate('/')}
        >
          TodoList
        </h1>
        <div className="flex gap-3">
          <MenuButton
            onNew={goToAddNew}
            onStats={goToAddStats}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
