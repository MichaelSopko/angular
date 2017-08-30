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
        data: [90.12, 80, 100.23, 120.24, 110.18, 105.17, 99.16, 97.17, 108, 112.55, 103.21, 122.78]
      }]
    }
  },

  'CUSTOMER LIFETIME VALUE': {
    title: 'CUSTOMER LIFETIME VALUE',
    options: {

      chart: {
        type: 'line'
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
        name: 'CLV',
        data: [30, 70, 60, 120, 80, 130, 170, 98, 85, 150, 170, 60]
      }]
    }
  },
  'CUSTOMER ACQUISITION COST': {
    title: 'CUSTOMER ACQUISITION COST',
    options: {

      chart: {
        type: 'column'
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
        name: 'Acquisiton cost',
        data: [340, 320, 307, 300, 337, 356, 345, 337, 326, 310, 294, 290],
        marker: {
          enabled: true,
          symbol: 'square'
        }
      }]
    }
  },

  'AVERAGE WEEKLY SALES REVENUE': {
    title: 'AVERAGE WEEKLY SALES REVENUE',
    options: {

      chart: {
        type: 'column',
        backgroundColor: '#47aba7',
      },
      title: {
        text: ''
      },

      xAxis: {
        visible: true,
        lineColor: 'white',
        tickColor: 'white',
        labels: {
          style: {
            fontSize: '9px',
            color: 'white'
          }
        },
        categories: [
          'W52 2015',
          'W 1 2016',
          'W 2 2016',
          'W 3 2016',
          'W 4 2016',
          'W 5 2016',
          'W 6 2016',
          'W 7 2016',
          'W 8 2016',
          'W 9 2016',
          'W 10 2016',
          'W 11 2016',
          'W 12 2016',
          'W 13 2016',
          'W 14 2016',
          'W 15 2016',
          'W 16 2016',
          'W 17 2016',
          'W 18 2016',
          'W 19 2016',
          'W 20 2016',
          'W 21 2016',
          'W 22 2016',
          'W 23 2016',
          'W 24 2016',
          'W 25 2016',
          'W 26 2016',
          'W 27 2016',
          'W 28 2016',
          'W 29 2016',
          'W 30 2016',
          'W 31 2016',
          'W 32 2016',
          'W 33 2016',
          'W 34 2016',
          'W 35 2016',
          'W 36 2016',
          'W 37 2016',
          'W 38 2016',
          'W 39 2016',
          'W 40 2016',
          'W 41 2016',
          'W 42 2016',
          'W 43 2016',
          'W 44 2016',
          'W 45 2016',
          'W 46 2016',
          'W 47 2016',
          'W 48 2016',
          'W 49 2016',
          'W 50 2016',
          'W 51 2016',
          'W 52 2016',
          'W 53 2016'
        ]
      },

      yAxis: {
        visible: false
      },

      plotOptions: {
        series: {
          color: 'white',
          dataLabels: {
            enabled: false,
          }
        }
      },

      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '{series.name}:' + '<b>€{point.y}</b>',

      },
      series: [{
        name: 'Sales revenue',
        data: [
          4,
          26,
          43,
          21,
          10,
          36,
          53,
          33,
          52,
          48,
          42,
          26,
          15,
          8,
          34,
          13,
          52,
          28,
          6,
          45,
          57,
          58,
          12,
          20,
          4,
          54,
          14,
          35,
          21,
          52,
          53,
          28,
          51,
          56,
          9,
          17,
          6,
          47,
          45,
          59,
          48,
          15,
          13,
          47,
          49,
          28,
          31,
          53,
          14,
          43,
          51,
          58,
          25,
          42],
        marker: {
          enabled: true,
          symbol: 'square'
        }
      }]
    }
  },
  'ABOVE SALES TARGET': {
    title: 'CUSTOMER ACQUISITION COST',
    options: {
      chart: {
        type: 'solidgauge',
        backgroundColor: '#47aba7',
      },

      title: '',

      pane: {
        center: ['50%', '50%'],
        size: '100%',
        startAngle: -180,
        endAngle: 180,
        background: {
          backgroundColor: '#54b2ae',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }
      },

      tooltip: {
        enabled: false
      },

      // the value axis
      yAxis: {
        visible: false,
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        min: 0,
        max: 200,
        stops: [
          [1, 'white'],

        ]
      },

      plotOptions: {
        solidgauge: {
          color: 'white',
          // visible: false,
          dataLabels: {
            enabled: false,
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },


      credits: {
        enabled: false
      },

      series: [{
        // name: 'Speed',

        data: [165],

      }]
    }
  },

};

