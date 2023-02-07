import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useStore } from '../../store/storeContext'
import { Header } from '../../components/Header'
import { Form } from './UI/Form'

function Update() {
  const navigate = useNavigate()
  const { state: selectedTodo } = useLocation()
  const [todo, setTodo] = useState(selectedTodo.todo)
  const store = useStore()

  const changeHandler = (e) => {
    setTodo(e.target.value)
  }

  const submitHanlder = async (e) => {
    e.preventDefault()

    if (!todo) {
      return
    }

    const newTodo = {
      ...selectedTodo,
      todo,
    }

    try {
      const resp = await fetch(
        `${store.PHP_API_BASE_URL}/api/todos/update.php`,
        {
          method: 'POST',
          body: JSON.stringify(newTodo),
        }
      ).then((res) => res.json())

      if (!resp.ok) {
        toast.error('Erreur survenue.')
        return
      }

      toast.success('Tâche Modifiée.')
      navigate('/')
    } catch (e) {
      console.error("Can't Modify Todo : ", e.message)
    }
  }

  return (
    <>
      <Header />
      <main
        id="add-new-todo"
        className="container my-8 w-full"
      >
        <h2 className="text-xl font-bold">Modifier une tâche</h2>
        <Form
          onSubmit={submitHanlder}
          onChange={changeHandler}
          todo={todo}
        />
      </main>
    </>
  )
}

export default Update
