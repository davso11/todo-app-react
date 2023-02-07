import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

function Chart({ stats }) {
  const data = {
    labels: ['En cours', 'Terminées'],
    datasets: [
      {
        label: 'Tâches',
        data: stats,
        backgroundColor: ['#0466c8', '#02c39a'],
        borderColor: ['#0466c8', '#02c39a'],
        borderWidth: 0,
      },
    ],
  }

  return <Pie data={data} />
}

export { Chart }
