import { useState, createContext, useContext, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const StoreContext = createContext()

const useStore = () => {
  return useContext(StoreContext)
}

function StoreProvider({ children }) {
  const [todos, setTodos] = useState(null)
  const [userId, setUserId] = useState('6dd81adb-e0e8-4115-a014-0c7760a362bc')
  const [NODE_API_BASE_URL] = useState(import.meta.env.VITE_NODE_API_BASE_URL)
  const [PHP_API_BASE_URL] = useState(import.meta.env.VITE_PHP_API_BASE_URL)
  const [PY_API_BASE_URL] = useState(import.meta.env.VITE_PYTHON_API_BASE_URL)

  const deleteTodo = async (e, todoId) => {
    e.stopPropagation()

    const resp = await fetch(`${NODE_API_BASE_URL}/api/todos/${todoId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    })

    if (!resp.ok) {
      toast.error('Erreur survenue.')
      return
    }

    setTodos((prev) => {
      return prev.filter((todo) => todo.todoId !== todoId)
    })

    toast.success('Tâche supprimée.')
  }

  const toShare = {
    NODE_API_BASE_URL,
    PHP_API_BASE_URL,
    PY_API_BASE_URL,
    userId,
    todos,
    setTodos,
    deleteTodo,
  }

  return (
    <StoreContext.Provider value={toShare}>{children}</StoreContext.Provider>
  )
}

export { StoreProvider, useStore }
