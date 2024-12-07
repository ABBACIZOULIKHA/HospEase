// src/components/PieChart.tsx
import { Chart } from "react-chartjs-2";
import { ChartOptions, ChartData, Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";

// Enregistrer les composants de chart.js
ChartJS.register(ArcElement, Title, Tooltip, Legend);

interface PieChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const PieChart = ({ data }: PieChartProps) => {
  const chartData: ChartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Gender Distribution",
        data: data.values,
        backgroundColor: ["#FF6384", "#36A2EB"], // Couleurs des segments
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Désactive le ratio aspect pour personnaliser la taille
    plugins: {
      title: {
        display: true,
        text: "Gender Distribution",
      },
    },
  };

  return (
    <div style={{ width: '200px', height: '200px' }}> {/* Réduit la taille ici */}
      <Chart type="pie" data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
