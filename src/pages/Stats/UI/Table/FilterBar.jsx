function FilterBar({ selectedValue, onSubmit, onChange }) {
  return (
    <form
      className="mb-6 flex gap-3"
      onSubmit={onSubmit}
    >
      <select
        id="userId"
        name="userId"
        className="block grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        value={selectedValue}
        onChange={onChange}
      >
        <option value="all">Tous</option>
        <option value="0">Normal</option>
        <option value="1">Important</option>
      </select>

      <button
        id="submit"
        type="submit"
        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto md:self-start"
      >
        Filtrer
      </button>
    </form>
  )
}

export { FilterBar }
