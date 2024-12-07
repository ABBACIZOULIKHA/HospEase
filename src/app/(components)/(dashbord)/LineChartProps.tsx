import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement, // Ajouter PointElement
  Filler,       // Ajouter Filler
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrer les composants de chart.js
ChartJS.register(
  LineElement,
  PointElement, // Enregistrer PointElement
  Filler,       // Enregistrer Filler
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);


interface LineChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const LineChart = ({ data }: LineChartProps) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Admissions over Time",
        data: data.values,
        borderColor: "rgba(66, 133, 244, 1)", // Couleur de la ligne
        backgroundColor: "rgba(66, 133, 244, 0.2)", // Fond sous la ligne
        tension: 0.4, // Courbure de la ligne
        fill: true, // Remplir l'aire sous la courbe
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Admissions over Time",
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

  return <Chart type="line" data={chartData} options={options} />;
};

export default LineChart;
