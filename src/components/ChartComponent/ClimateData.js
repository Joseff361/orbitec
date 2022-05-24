export const climateData = gradientBg => {
  return {
    type: 'line',
    data: {
      labels: ['1am', '3am', '6am', '10am', '12pm', '3pm', '7pm', '10pm'],
      datasets: [
        {
          label: '',
          data: [4, 3, 5, 9, 13, 9, 5, 4],
          backgroundColor: gradientBg,
          fill: true,
          borderColor: '#fdaa39',
          borderWidth: 4,
          tension: 0.4,
          pointRadius: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            display: false,
          },
          grid: {
            drawOnChartArea: false,
            drawBorder: false,
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            boxWidth: 0,
          },
        },
      },
    },
  };
};

export default climateData;
