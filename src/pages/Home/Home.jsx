import { Header } from './UI/Header'
import { useStore } from './../../store/storeContext'
import { TodoGrid } from './UI/TodoGrid'
import { useEffect } from 'react'

function Home() {
  const store = useStore()

  const fetchTodos = async () => {
    try {
      const data = await fetch(`${store.PHP_API_BASE_URL}/api/todos/read.php`, {
        method: 'POST',
        body: JSON.stringify({ userId: store.userId }),
      }).then((res) => res.json())
      store.setTodos(data)
    } catch (e) {
      console.error('Fetch Todos Error : ', e)
    }
  }

  useEffect(() => {
    fetchTodos()
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
