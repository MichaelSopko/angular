export const chartData: any =
  {
    'RETURN ON ASSETS': {
      title: 'RETURN ON ASSETS',
      label: 'RoA',
      circleTitleData: '16.5%',
      labels: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [0.2, 0.23, 0.24, 0.18, 0.17, 0.16, 0.17]
    },
    'WORKING CAPITAL RATIO': {
      title: 'WORKING CAPITAL RATIO',
      label: 'WCR',
      circleTitleData: '3.2:1',
      labels: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [2.2, 2.1, 2.4, 2.3, 2.7, 2.9, 4.8]
    },
    'RETURN ON EQUITY': {
      title: 'RETURN ON EQUITY',
      label: 'RoE',
      circleTitleData: '32%',
      labels: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [0.26, 0.28, 0.29, 0.31, 0.31, 0.33, 0.34]
    },
    'DEBT-EQUITY RATIO': {
      title: 'DEBT-EQUITY RATIO',
      circleTitleData: '0.4:1',
      label: 'DER',
      labels: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [0.5, 0.4, 0.37, 0.48, 0.45, 0.54, 0.32]
    },
    'options': {
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: 'white',
        bodyFontColor: 'black',
        titleFontStyle: 'bold',
        titleFontColor: 'black',
        displayColors: false,
        borderColor: 'black',
        borderWidth: 1,
      },
      scales: {
        yAxes: [{
          stacked: true,
          display: false,
          gridLines: {
            display: false,
            color: 'rgba(255,99,132,0.2)'
          }
        }],
        xAxes: [{
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            minRotation: 45
          },
          gridLines: {
            displayOnChartArea: false,
            drawOnChartArea: false,
            offsetGridLines: true,
            drawBorder: true,
            drawTicks: true,
            tickMarkLength: 10
          }
        }]
      }
    }
  };
