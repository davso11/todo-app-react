function Table({ data }) {
  return (
    <div className="relative overflow-x-auto border border-b-0 border-gray-200 sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3"
            >
              N°
            </th>
            <th
              scope="col"
              className="px-6 py-3"
            >
              Tâche
            </th>
            <th
              scope="col"
              className="px-6 py-3"
            >
              Statut
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                key={i}
                className="border-b bg-white hover:bg-gray-50"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  {i}
                </th>
                <td className="px-6 py-4">{item.todo}</td>
                <td className="px-6 py-4 text-xs font-medium">
                  {item.isImportant ? (
                    <div className="w-fit rounded-full bg-[#FFF8E0] py-2 px-4 text-[#ffc300]">
                      <span>Important</span>
                    </div>
                  ) : (
                    <div className="w-fit rounded-full bg-[#E0ECF9] py-2 px-4 text-[#0466c8]">
                      <span>Normal</span>
                    </div>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export { Table }
