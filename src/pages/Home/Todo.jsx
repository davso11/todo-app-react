import { IoTrash } from 'react-icons/io5'
import { dayjs } from '../../lib/dayjs'
import { useStore } from '../../store/storeContext'

function Todo({ todoId, todo, updatedAt }) {
  const { deleteTodo } = useStore()
  const time = dayjs(updatedAt).fromNow()

  return (
    <div className="flex w-full cursor-pointer items-center justify-between gap-1 rounded-lg border border-gray-200 bg-white p-4 transition hover:bg-gray-200/70">
      <div className="flex h-full w-full flex-col justify-between gap-2">
        <p>{todo}</p>
        <span className="text-sm font-medium text-slate-500">{time}</span>
      </div>
      <button
        className="inline-flex items-center rounded-full bg-red-700 p-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
        onClick={() => deleteTodo(todoId)}
      >
        <IoTrash />
      </button>
    </div>
  )
}

export { Todo }
