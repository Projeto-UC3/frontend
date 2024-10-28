import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const FaltasChart = () => {

  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    datasets: [
      {
        label: 'Faltas',
        data: [0, 1, 0, 2, 0, 5, 1, 2],
        backgroundColor: '#90ee90', //cor da barrinha do grafico
        borderRadius: 5, // borda
        barThickness: 40, // largura
      },
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true, 
          stepSize: 1, 
        },
        grid: {
          display: false,
        },
      },
    },
  };


  return (
    <div style={styles.chartContainer}>
      <Bar data={data} options={options} />
    </div>
  );
};

const styles = {
  chartContainer: {
    marginTop: '15%',
    padding: '2%',
    height: '100%', 
  },
};


export default FaltasChart;