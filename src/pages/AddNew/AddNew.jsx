import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useStore } from '../../store/storeContext'
import { Header } from '../../components/Header'
import { Form } from './UI/Form'

function AddNew() {
  const todoRef = useRef()
  const store = useStore()
  const navigate = useNavigate()

  const submitHanlder = async (e) => {
    e.preventDefault()
    const todo = todoRef.current.value

    if (!todo) {
      return
    }

    const todoObj = {
      userId: store.userId,
      todo,
    }

    try {
      const resp = await fetch(`${store.NODE_API_BASE_URL}/api/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todoObj),
      }).then((res) => res.json())

      if (!resp.ok) {
        toast.error('Erreur survenue.')
        return
      }

      toast.success('Tâche enregistrée.')
      navigate('/')
    } catch (e) {
      console.error("Can't Post Todo : ", e.message)
    }
  }

  return (
    <>
      <Header />
      <main
        id="add-new-todo"
        className="container my-8 w-full"
      >
        <h2 className="text-xl font-bold">Ajouter une nouvelle tâche</h2>
        <Form
          onSubmit={submitHanlder}
          todoRef={todoRef}
        />
      </main>
    </>
  )
}

export default AddNew
