import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { fetchGenderData } from '../services/api';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const GenderChart = () => {
  const [genderData, setGenderData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const getGenderData = async () => {
      try {
        const data = await fetchGenderData();
        setGenderData({
          labels: data.map(item => item.gender),
          values: data.map(item => item.count),
        });
      } catch (error) {
        // Handle error (e.g., show notification)
      }
    };

    getGenderData();
  }, []);

  const chartData = {
    labels: genderData.labels,
    datasets: [
      {
        label: 'Gender Distribution',
        data: genderData.values,
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'User Gender Distribution',
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default GenderChart;
