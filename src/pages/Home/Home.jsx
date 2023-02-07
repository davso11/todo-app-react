import { Header } from './UI/Header'
import { useStore } from './../../store/storeContext'
import { TodoGrid } from './UI/TodoGrid'
import { useEffect } from 'react'

function Home() {
  const store = useStore()

  useEffect(() => {
    store.fetchTodos()
  }, [])

  return (
    <>
      <Header />
      <main
        id="home"
        className="container my-8 w-full"
      >
        <h2 className="text-xl font-bold">Vos tâches</h2>
        {store.todos && store.todos.length > 0 ? (
          <TodoGrid />
        ) : (
          <p className="mt-8">Aucun tâche en cours.</p>
        )}
      </main>
    </>
  )
}

export default Home
