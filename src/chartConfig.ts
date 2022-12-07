export const data = {
  labels: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
  datasets: [
    {
      label: 'KOP',
      backgroundColor: '#165DFF',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: 'Nominal Transaksi',
      backgroundColor: '#14C9C9',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: 'Jumlah Transaksi',
      backgroundColor: '#F7BA1E',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
  ],
};

export const options = {
  interaction: {
    intersect: false,
    mode: 'index',
  },
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
      text: 'Dashboard e-Bupot Unifikasi',
    },
    tooltip: {
      backgroundColor: '#FFFFFF',
      titleColor: '#000',
      bodyColor: '#000',
      opacity: 0.8,
    },
  },
  scale: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
        // Include a dollar sign in the ticks
        callback: (value, index, values) => {
          return value + 'K';
        },
      },
    },
  },
};
