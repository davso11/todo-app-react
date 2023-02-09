function Form({ todoRef, isImportant, onCheck, onSubmit }) {
  return (
    <form
      className="mt-6 flex flex-col gap-4"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <input
        id="todo"
        placeholder="Quelle tâche voulez-vous enregistrer ?"
        className="block grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        ref={todoRef}
        required
      />

      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="remember"
            type="checkbox"
            className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
            checked={isImportant}
            onChange={onCheck}
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm"
        >
          Tâche importante
        </label>
      </div>

      <button
        color="success"
        type="submit"
        className="rounded-lg bg-[#14B866] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#179154] focus:outline-none focus:ring-4 focus:ring-green-300 md:self-start"
      >
        Confirmer
      </button>
    </form>
  )
}

export { Form }
