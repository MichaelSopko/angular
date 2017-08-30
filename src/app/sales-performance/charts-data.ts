export const chartData: any = {
  'MONTHLY SALES GROWTH': {
    title: 'MONTHLY SALES GROWTH',
    options: {
      chart: {
        type: 'column',
        backgroundColor: '#f5f5f5',
      },
      title: {
        text: ''
      },
      xAxis: {
        visible: false,
        categories: ['January 2016', 'February 2016', 'March 2016', 'April 2016', 'May 2016', 'June 2016', 'July 2016', 'August 2016', 'September 2016', 'October 2016', 'November 2016', 'December 2016'],
      },
      yAxis: {
        visible: false
      },
      plotOptions: {
        series: {
          color: '#59b5a6'
        }
      },
      tooltip: {
        shared: true,
        useHTML: true,
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '{series.name}:' + '<b>€{point.y} </b>',
        footerFormat: '',
        valueDecimals: 10
      },


      legend: {
        enabled: false
      },

      series: [{
        name: 'Sales Revenue',
        data: [44.12, 70, 100.23, 120.24, 140.18, 200.17, 350.16, 470.17, 560, 870, 1000, 1300]
      }]
    }
  },

  'SALES COUNTRY PERFORMANCE': {
    title: 'SALES COUNTRY PERFORMANCE',
    options: {

      chart: {
        type: 'pie'
      },
      title: {
        text: ''
      },

      plotOptions: {
        series: {
          dataLabels: {
            enabled: false,
            format: '{point.name}: {point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '{series.name}:' + '<b>€{point.y}k</b>',

      },
      series: [{
        name: 'Sales Revenue',
        colorByPoint: true,
        data: [{
          name: 'Austria',
          y: 756,
          color: '#51c5c5'
        }, {
          name: 'Germany',
          y: 586,
          color: '#8ef5f5'
        }, {
          name: 'Spain',
          y: 178,
          color: '#00a1a1'
        }]
      }],
    }
  },

  'AVERAGE REVENUE PER UNIT': {
    title: 'AVERAGE REVENUE PER UNIT',
    options: {

      chart: {
        type: 'area'
      },
      title: {
        text: ''
      },

      xAxis: {
        visible: false,
        categories: ['January 2016', 'February 2016', 'March 2016', 'April 2016', 'May 2016', 'June 2016', 'July 2016', 'August 2016', 'September 2016', 'October 2016', 'November 2016', 'December 2016'],
      },

      yAxis: {
        visible: false
      },

      plotOptions: {
        series: {
          color: '#59b5a6',
          dataLabels: {
            enabled: true,
            fontSize: '4px',
            format: '€{point.y:.0f}',
            style: {
              fontWeight: 'lighter',
              color: '#666666',
              textOutline: 'none'
            }
          }
        }
      },

      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '{series.name}:' + '<b>€{point.y}</b>',

      },
      series: [{
        name: 'ARPU',
        data: [90.12, 80, 100.23, 120.24, 110.18, 105.17, 99.16, 97.17, 108, 112.55, 103.21, 121.78]
      }]
    }
  }
};

