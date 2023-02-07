function Form({ todoRef, onSubmit }) {
  return (
    <form
      className="mt-6 flex flex-col gap-4 md:flex-row md:items-center"
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
      <button
        color="success"
        type="submit"
        className="rounded-lg bg-[#14B866] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#179154] focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        Confimer
      </button>
    </form>
  )
}

export { Form }
