import { IoTrash } from 'react-icons/io5'
import { dayjs } from '../../../../lib/dayjs'
import { useStore } from '../../../../store/storeContext'
import { useNavigate } from 'react-router-dom'

function Todo(todoObj) {
  const { todoId, todo, updatedAt } = todoObj
  const time = dayjs(updatedAt).fromNow()
  const { deleteTodo, userId } = useStore()
  const navigate = useNavigate()

  const selectedTodo = {
    userId,
    todoId,
    todo,
  }

  const goToUpdate = () => {
    navigate(`/update/${todoId}`, { state: selectedTodo })
  }

  return (
    <div
      className="relative z-0 flex w-full cursor-default items-center justify-between gap-1 rounded-lg border border-gray-200 bg-white p-4 transition hover:bg-gray-200/70"
      onClick={goToUpdate}
    >
      <div className="flex h-full w-full flex-col justify-between gap-2">
        <p>{todo}</p>
        <span className="text-sm font-medium text-slate-500">{time}</span>
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
