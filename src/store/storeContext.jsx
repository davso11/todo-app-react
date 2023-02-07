import { useState, createContext, useContext } from 'react'

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

  const toShare = {
    NODE_API_BASE_URL,
    PHP_API_BASE_URL,
    PY_API_BASE_URL,
    userId,
    todos,
    setTodos,
  }

  return (
    <StoreContext.Provider value={toShare}>{children}</StoreContext.Provider>
  )
}

export { StoreProvider, useStore }
