import { Header } from '../../components/Header'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store/storeContext'

function AddNew() {
  const todoRef = useRef()
  const navigate = useNavigate()
  const { postTodo } = useStore()

  const submitHanlder = async (e) => {
    e.preventDefault()
    const todo = todoRef.current.value

    if (!todo) {
      return
    }
    try {
      await postTodo(todo)
      navigate('/')
    } catch {
      console.error("Can't Post Todo")
    }
  }

  return (
    <>
      <Header />
      <main
        id="add-new-todo"
        className="container mt-8 w-full"
      >
        <h2 className="text-xl font-bold">Ajouter une nouvelle tâche</h2>
        <form
          className="mt-6"
          autoComplete="off"
          onSubmit={(e) => submitHanlder(e, todoRef.current.value)}
        >
          <input
            id="todo"
            placeholder="Quelle tâche voulez-vous enregistrer ?"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            ref={todoRef}
            required
          />
          <button
            color="success"
            type="submit"
            className="mt-3 rounded-lg bg-[#14B866] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#179154] focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Confirmer
          </button>
        </form>
      </main>
    </>
  )
}

export default AddNew
