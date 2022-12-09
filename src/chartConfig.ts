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
    'Des',
  ],
  datasets: [
    {
      label: 'KOP',
      backgroundColor: '#165DFF',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11], //353
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
    // mode: 'index',
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
      enabled: true,
      backgroundColor: '#FFFFFF',
      titleColor: '#000',
      bodyColor: '#000',
      opacity: 0.8,
      callbacks: {
        title: function (context) {
          // let title = Object.keys(context);
          let newLabels = [
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
          ];
          return newLabels[context[0].dataIndex];
        },
        label: function (context) {
          const totalData = context.dataset.data.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          );
          return `${context.dataset.label} (${Math.floor(
            (context.raw / totalData) * 100
          )}%)`;
        },
      },
    },
  },
  scale: {
    x: {
      stacked: true,
      display: true,
    },
    y: {
      stacked: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
      },
    },
  },
};
