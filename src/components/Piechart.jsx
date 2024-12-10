import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart () {
  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        data: [3200, 5220, 10110],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        hoverBackgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      },
    ],
  };

  return (
    <div>
      <h2>Expense diagram</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;