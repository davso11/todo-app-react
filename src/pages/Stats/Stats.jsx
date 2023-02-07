import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { useStore } from '../../store/storeContext'
import { Chart } from './UI/Chart'

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
      console.log(Object.values(data))
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
        {stats && stats.length > 0 ? (
          <div className="mt-4">
            <Chart stats={stats} />
          </div>
        ) : (
          <p className="mt-8">Indisponible</p>
        )}
      </main>
    </>
  )
}

export default Stats
