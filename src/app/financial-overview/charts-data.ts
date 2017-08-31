export const chartData: any = {
  'OPERATIONAL EXPENSES': {
    title: 'OPERATIONAL EXPENSES',
    options: {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['January 2016', 'February 2016', 'March 2016', 'April 2016', 'May 2016', 'June 2016', 'July 2016', 'August 2016', 'September 2016', 'October 2016', 'November 2016', 'December 2016'],
      },
      credits: {
        enabled: false
      },
      yAxis: {
        min: 0,
        max: 120,
        tickAmount: 3,
        title: {
          text: ''
        },
        labels: {
          format: '€{value}k',
        }
      },
      tooltip: {
        useHTML: true,
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}</b> </span><br/>',
        shared: true
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      series: [{
        name: 'General',
        data: [15, 13, 14, 17, 12, 11, 10, 11, 12, 15, 13, 14],
        color: '#83dcee'
      }, {
        name: 'Marketing',
        data: [20, 22, 23, 22, 21, 19, 20, 21, 25, 27, 23, 24],
        color: '#49d6be'
      }, {
        name: 'Sales',
        data: [23, 27, 30, 32, 35, 35, 35, 35, 36, 45, 35, 32],
        color: '#7be9a8',
      },
        {
          name: 'IT',
          data: [7, 9, 4, 12, 5, 7, 9, 4, 12, 10, 12, 9,],
          color: '#51baed',
        }]
    }
  },
  'EARNINGS BEFORE': {
    title: 'EARNINGS BEFORE INTEREST AND TAXES',
    options: {
      chart: {
        // type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['January 2016', 'February 2016', 'March 2016', 'April 2016', 'May 2016', 'June 2016', 'July 2016', 'August 2016', 'September 2016', 'October 2016', 'November 2016', 'December 2016'],
      },
      credits: {
        enabled: false
      },
      yAxis: {
        min: 0,
        max: 300,
        tickAmount: 3,
        title: {
          text: ''
        },
        labels: {
          format: '€{value}k',
        }
      },
      tooltip: {
        useHTML: true,
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}</b> </span><br/>',
        shared: true
      },
      plotOptions: {

      },
      series: [ {
        name: 'EBIT target',
        type: 'spline',
        color: '#49d6be',
        data: [57, 80, 110, 140, 180, 200, 230, 260, 290, 280, 270, 260],
        marker: {
          enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
          valueSuffix: 'k',
          valuePrefix: '€'
        }

      }, {
        name: 'EBIT actual',
        type: 'spline',
        color: '#49b7ec',
        data: [94, 96, 99, 101, 104, 107, 110, 113, 116, 119, 122, 126],
        tooltip: {
          valueSuffix: 'k',
          valuePrefix: '€'
        }
      }]
    }
  }
};

