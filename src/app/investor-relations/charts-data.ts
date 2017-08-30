export const chartData: any =
  {
    'RETURN ON ASSETS': {
      title: 'RETURN ON ASSETS',
      label: 'RoA',
      circleTitleData: '17%',
      categories: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [0.2, 0.23, 0.24, 0.18, 0.17, 0.16, 0.17]
    },
    'RETURN ON EQUITY': {
      title: 'RETURN ON EQUITY',
      label: 'RoE',
      circleTitleData: '33.6%',
      categories: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [0.26, 0.28, 0.29, 0.31, 0.31, 0.33, 0.34]
    },
    'SHARE PRICE': {
      title: 'SHARE PRICE',
      label: 'SP',
      circleTitleData: '188 €',
      categories: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [122, 138, 145, 160, 180, 185, 188]
    },
    'WORKING CAPITAL RATIO': {
      title: 'WORKING CAPITAL RATIO',
      label: 'WCR',
      circleTitleData: '3.2:1',
      categories: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [2.2, 2.1, 2.4, 2.3, 2.7, 2.9, 4.8]
    },
    'DEBT-EQUITY RATIO': {
      title: 'DEBT-EQUITY RATIO',
      circleTitleData: '0.4:1',
      label: 'DebtEquityRatio',
      categories: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [0.5, 0.4, 0.37, 0.48, 0.45, 0.54, 0.32]
    },
    'P/E Ratio': {
      title: 'P/E Ratio',
      circleTitleData: '37,2',
      label: 'DebtEquityRatio',
      categories: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [47.4, 45.3, 43.4, 40.1, 40.2, 38.2, 37.2]
    },
    'options': {
      chart: {
        type: 'column',
        backgroundColor: '#54a2ae',
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
        lineColor: 'white',
        tickColor: 'white',
        labels: {
          style: {
            color: 'white'
          }
        }

      },
      yAxis: {
        visible: false
      },
      plotOptions: {

        series: {
          color: 'white',
          dataLabels: {
            style: {
              fontWeight: 'bold',
              color: 'white',
              textOutline: 'none'
            },
            enabled: true,
          }
        },
      },
      tooltip: {
        shared: true,
        backgroundColor: 'white',
        useHTML: true,
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '{series.name}:' + ' <b>{point.y} EUR</b>',
        footerFormat: '',
        valueDecimals: 1
      },


      legend: {
        enabled: false
      },

      series: [{
        name: 'RoA',
        data: [0.2, 0.23, 0.24, 0.18, 0.17, 0.16, 0.17]
      }]
    }
  };
