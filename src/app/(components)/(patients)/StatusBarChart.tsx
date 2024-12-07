import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define the possible patient statuses
interface Patient {
  status: 'Admitted' | 'Under Observation' | 'Discharged';
}

interface StatusBarChartProps {
  patientsInfo?: Patient[]; // Optional prop with a fallback to empty array
}

const StatusBarChart: React.FC<StatusBarChartProps> = ({ patientsInfo = [] }) => {
  // Calculate the number of patientsInfo in each status
  const statusCounts = {
    Admitted: 0,
    'Under Observation': 0,
    Discharged: 0,
  };

  // Ensure patientsInfo is an array before calling forEach
  patientsInfo.forEach((patient) => {
    if (patient.status === 'Admitted') statusCounts.Admitted += 1;
    if (patient.status === 'Under Observation') statusCounts['Under Observation'] += 1;
    if (patient.status === 'Discharged') statusCounts.Discharged += 1;
  });

  // Prepare the data for the chart
  const data = {
    labels: ['Admitted', 'Under Observation', 'Discharged'],
    datasets: [
      {
        data: [
          statusCounts.Admitted,
          statusCounts['Under Observation'],
          statusCounts.Discharged,
        ],
        backgroundColor: ['#4F87FF', '#FF7F50', '#32CD32'], // Different colors for each status
        borderColor: ['#1A5AC0', '#D15F34', '#228B22'], // Border color
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Patient Status Distribution',
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.raw} patients`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6  w-1/2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg items-center">
      <h2 className="text-2xl font-bold text-blue-800 text-center">
        Patient Status Distribution
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatusBarChart;
