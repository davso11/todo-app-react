import { Header } from './UI/Header'
import { useStore } from './../../store/storeContext'
import { Todo } from './Todo'

function Home() {
  const { todos } = useStore()

  return (
    <>
      <Header />
      <main
        id="home"
        className="container mt-8 w-full"
      >
        <h2 className="text-xl font-bold">Vos tâches</h2>
        {todos && todos.length > 0 ? (
          <div className="mt-4 grid w-full grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] items-start gap-3">
            {todos.map((todo) => {
              return (
                <Todo
                  key={todo.todoId}
                  {...todo}
                />
              )
            })}
          </div>
        ) : (
          <p className="mt-8">Aucun tâche en cours.</p>
        )}
      </main>
    </>
  )
}

export default Home
