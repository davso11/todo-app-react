import { IoTrash } from 'react-icons/io5'
import { dayjs } from '../../../../lib/dayjs'
import { useStore } from '../../../../store/storeContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

function Todo(todoObj) {
  const { todoId, todo, updatedAt, isImportant } = todoObj
  const time = dayjs(updatedAt).fromNow()
  const store = useStore()
  const navigate = useNavigate()
  const userId = store.userId

  const selectedTodo = {
    userId,
    todoId,
    todo,
    isImportant,
  }

  const goToUpdate = () => {
    navigate(`/update/${todoId}`, { state: selectedTodo })
  }

  const deleteTodo = async (e, todoId) => {
    e.stopPropagation()

    try {
      const resp = await fetch(
        `${store.NODE_API_BASE_URL}/api/todos/${todoId}`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId }),
        }
      )

      if (!resp.ok) {
        toast.error('Erreur survenue.')
        return
      }

      store.setTodos((prev) => {
        return prev.filter((todo) => todo.todoId !== todoId)
      })

      toast.success('Tâche supprimée.')
    } catch (e) {
      console.error("Can't Delete Todo : ", e.message)
    }
  }

  return (
    <div
      className={`relative z-0 flex w-full cursor-pointer items-center justify-between gap-1 rounded-lg ${
        isImportant
          ? 'border-none bg-[#ffc300] hover:bg-[#ffb700]'
          : 'border border-gray-200 bg-white hover:bg-gray-200/70'
      } p-4 transition`}
      onClick={goToUpdate}
    >
      <div className="flex h-full w-full flex-col justify-between gap-2">
        <p>{todo}</p>
        <span
          className={`text-sm font-medium ${
            isImportant ? 'text-back' : 'text-slate-500'
          }`}
        >
          {time}
        </span>
      </div>
      <button
        className="relative z-[999] inline-flex items-center rounded-full bg-red-700 p-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
        onClick={(e) => deleteTodo(e, todoId)}
      >
        <IoTrash />
      </button>
    </div>
  )
}

export { Todo }
