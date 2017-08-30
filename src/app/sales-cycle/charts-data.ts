export const chartData: any =
  {
    'RETURN ON ASSETS': {
      title: 'days average sales cycle length',
      label: 'RoA',
      circleTitleData: '18,4',
      categories: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
      data: [0.2, 0.23, 0.24, 0.18, 0.17, 0.16, 0.17]
    },
    'options': {
      chart: {
        type: 'column',
        backgroundColor: 'white',
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Q2 2014', 'Q3 2014', 'Q4 2014', 'Q1 2015', 'Q2 2015', 'Q3 2015', 'Q4 2015'],
        lineColor: '#54a2ae',
        tickColor: '#54a2ae',
        labels: {
          style: {
            color: 'grey'
          }
        }

      },
      yAxis: {
        visible: false
      },
      plotOptions: {

        series: {
          color: '#54a2ae',
          dataLabels: {
            style: {
              fontWeight: 'bold',
              color: '#54a2ae',
              textOutline: 'none'
            },
            enabled: false,
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
