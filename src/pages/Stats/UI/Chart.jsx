import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

function Chart({ stats }) {
  const data = {
    labels: ['Normale', 'Importante'],
    datasets: [
      {
        label: 'Tâches',
        data: stats.reverse(),
        backgroundColor: ['#0466c8', '#ffc300'],
        borderColor: ['#0466c8', '#ffc300'],
        borderWidth: 0,
      },
    ],
  }

  return <Pie data={data} />
}

export { Chart }
