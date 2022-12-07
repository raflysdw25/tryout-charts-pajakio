export const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ags',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Jumlah Transaksi',
      backgroundColor: '#F7BA1E',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: 'Nominal Transaksi',
      backgroundColor: '#14C9C9',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: 'KOP',
      backgroundColor: '#165DFF',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      align: 'center',
      labels: {
        boxWidth: 12,
        boxHeight: 12,
      },
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
