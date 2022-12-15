export const data = {
  labels: [
    'Jan/21',
    'Feb/21',
    'Mar/21',
    'Apr/21',
    'Mei/21',
    'Jun/21',
    'Jul/21',
    // 'Ags/21',
    // 'Sep/21',
    // 'Okt/21',
    // 'Nov/21',
    // 'Des/21',
    // 'Jan/22',
    // 'Feb/22',
    // 'Mar/22',
    // 'Apr/22',
    // 'Mei/22',
    // 'Jun/22',
    // 'Jul/22',
    // 'Ags/22',
    // 'Sep/22',
    // 'Okt/22',
    // 'Nov/22',
    // 'Des/22',
  ],
  datasets: [
    {
      label: 'KOP',
      backgroundColor: '#165DFF',
      data: [
        40, 20, 12, 39, 10, 40, 39,
        // 80, 40, 20, 12, 11, 40, 20, 12, 39, 10, 40,
        // 39, 80, 40, 20, 12, 11,
      ], //353
    },
    {
      label: 'Nominal Transaksi',
      backgroundColor: '#14C9C9',
      data: [
        40, 20, 12, 39, 10, 40, 39,
        // 80, 40, 20, 12, 11, 40, 20, 12, 39, 10, 40,
        // 39, 80, 40, 20, 12, 11,
      ],
    },
    {
      label: 'Jumlah Transaksi',
      backgroundColor: '#F7BA1E',
      data: [
        40, 20, 12, 39, 10, 40, 39,
        // 80, 40, 20, 12, 11, 40, 20, 12, 39, 10, 40,
        // 39, 80, 40, 20, 12, 11,
      ],
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
  maxBarThickness: 75,
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
