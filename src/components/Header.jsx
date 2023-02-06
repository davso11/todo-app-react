import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const goToRoot = () => {
    navigate('/')
  }

  return (
    <header className="container w-full py-3">
      <div className="flex items-center justify-between gap-10">
        <h1 className="text-2xl font-bold">TodoList</h1>
        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={goToRoot}
          >
            <span>Retour</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export { Header }
