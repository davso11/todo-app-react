import { Todo } from './Todo'
import { useStore } from '../../../../store/storeContext'

function TodoGrid() {
  const store = useStore()

  return (
    <div className="mt-4 grid w-full grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] items-start gap-3">
      {store.todos.map((todo) => {
        return (
          <Todo
            key={todo.todoId}
            {...todo}
          />
        )
      })}
    </div>
  )
}

export default TodoGrid
