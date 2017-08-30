export const chartData: any =
  {
    'RETURN ON ASSETS': {
      title: 'CAC vs Customer Lifetime Value (CLV)',
      label: 'RoA',
      circleTitleData: '17%',
      categories: ['CAC', 'CLV'],
      data: [0.2, 0.77]
    },
    options: {
      chart: {
        type: 'column',
        backgroundColor: '#F8F8F9',
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
            color: 'black'
          }
        }

      },
      yAxis: {
        visible: false
      },
      plotOptions: {

        series: {
          color: '#8bcb30',
          dataLabels: {
            style: {
              fontWeight: 'bold',
              // color: 'white',
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

      }]
    }
  };
