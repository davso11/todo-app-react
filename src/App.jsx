import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AddNew } from './pages/AddNew'
import { Update } from './pages/Update'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/new"
        element={<AddNew />}
      />
      <Route
        path="/update/:todoId"
        element={<Update />}
      />
    </Routes>
  )
}

export { App }
