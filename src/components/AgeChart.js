import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchAgeData } from '../services/api';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AgeChart = () => {
  const [ageData, setAgeData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const getAgeData = async () => {
      try {
        const data = await fetchAgeData();
        setAgeData({
          labels: data.map(item => item.ageRange),
          values: data.map(item => item.count),
        });
      } catch (error) {
        // Handle error (e.g., show notification)
      }
    };

    getAgeData();
  }, []);

  const chartData = {
    labels: ageData.labels,
    datasets: [
      {
        label: 'Number of Users',
        data: ageData.values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'User Age Distribution',
      },
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default AgeChart;
