import { useState, createContext, useContext, useEffect } from 'react'

const StoreContext = createContext()

const useStore = () => {
  return useContext(StoreContext)
}

function StoreProvider({ children }) {
  const [todos, setTodos] = useState(null)
  const [userId, setUserId] = useState(import.meta.env.VITE_USER_ID)
  const [NODE_API_BASE_URL] = useState(import.meta.env.VITE_NODE_API_BASE_URL)
  const [PHP_API_BASE_URL] = useState(import.meta.env.VITE_PHP_API_BASE_URL)
  const [PY_API_BASE_URL] = useState(import.meta.env.VITE_PYTHON_API_BASE_URL)

  const fetchTodos = async () => {
    try {
      const data = await fetch(`${PHP_API_BASE_URL}/api/todos/read.php`, {
        method: 'POST',
        body: JSON.stringify({ userId: userId }),
      }).then((res) => res.json())

      setTodos(data)
    } catch (e) {
      console.error('Fetch Todos Error : ', e)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const toShare = {
    NODE_API_BASE_URL,
    PHP_API_BASE_URL,
    PY_API_BASE_URL,
    userId,
    todos,
    setTodos,
    fetchTodos,
  }

  return (
    <StoreContext.Provider value={toShare}>{children}</StoreContext.Provider>
  )
}

export { StoreProvider, useStore }
