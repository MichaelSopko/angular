export const chartData: any =
  {
    'RETURN ON ASSETS': {
      title: 'RETURN ON ASSETS',
      label: 'RoA',
      circleTitleData: '17%',
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
      circleTitleData: '17%',
      labels: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [15, 25, 28, 37, 35, 42, 60]
    },
    'DEBT-EQUITY RATIO': {
      title: 'DEBT-EQUITY RATIO',
      circleTitleData: '17%',
      labels: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [35, 33, 25, 81, 56, 55, 40]
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
            display: false
          }
        }]
      }
    }
  };
