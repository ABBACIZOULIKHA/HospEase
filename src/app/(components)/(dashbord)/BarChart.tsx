// src/components/BarChart.tsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Enregistrer les composants de Chart.js
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const BarChart = ({ data }: BarChartProps) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "New Admissions by Department",
        data: data.values,
        backgroundColor: "rgba(66, 133, 244, 0.5)", // Couleur de la barre
        borderColor: "rgba(66, 133, 244, 1)", // Couleur de la bordure de la barre
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "New Admissions by Department",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
