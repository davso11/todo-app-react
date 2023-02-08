import { useEffect, useState } from 'react'
import { Header } from './UI/Header'
import { useStore } from '../../store/storeContext'
import { Chart } from './UI/Chart'
import { Table } from './UI/Table'

function Stats() {
  const store = useStore()
  const [stats, setStats] = useState(null)

  const getStats = async () => {
    try {
      const data = await fetch(`${store.PY_API_BASE_URL}/api/todos/stats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ userId: store.userId }),
      }).then((res) => res.json())

      setStats(Object.values(data))
      console.log(data)
    } catch (e) {
      console.error('Cannot Get Stats : ', e)
    }
  }

  useEffect(() => {
    getStats()
  }, [])

  return (
    <>
      <Header />
      <main
        id="home"
        className="container my-8 w-full"
      >
        <h2 className="text-xl font-bold">Statistiques</h2>
        <h3 className="my-8 font-semibold">Diagramme</h3>
        {stats && stats.length > 0 ? (
          <>
            <div className="mx-auto my-4 aspect-square max-w-md">
              <Chart stats={stats} />
            </div>
            <h3 className="mt-20 mb-8 font-semibold">Tableau</h3>
            <div className="">
              <Table data={store.todos} />
            </div>
          </>
        ) : (
          <p className="mt-8">Indisponible</p>
        )}
      </main>
    </>
  )
}

export default Stats
