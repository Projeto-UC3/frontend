import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PresencaChart = () => {
  const data = {
    labels: ['Falta', 'Presença'],
    datasets: [
      {
        label: 'Presença',
        data: [6.3, 93.7], // porcentagem
        backgroundColor: ['#90ee90', '#333'], // cores
        borderWidth: 0,
      },
    ],
  };

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: false, 
      },
    },
    cutout: '55%', // efeito donut
  };

  return (
    <div style={styles.divGrafico2}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

const styles = {
  divGrafico2: {

    marginTop: '5%',
    padding: '2%',
    height: '70%',
  },
};

export default PresencaChart;
