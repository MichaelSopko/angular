import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { chartData } from './charts-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-menegment-kpi',
  templateUrl: './menegment-kpi.component.html',
  styleUrls: ['./menegment-kpi.component.scss']
})
export class MenegmentKpiComponent implements OnInit {
  myCharts = [];
  options = {};

  constructor() { }

  ngOnInit() {
    const grid = {
      focus: {
        show: false
      }
    };
    const chart1 = c3.generate({
      bindto: '.revenue-chart',
      data: {
        columns: [
          ['Last Period', 50, 90, 180],
          ['Current Period', 130, 200, 350]
        ],
        type: 'bar',
        color: function (color, d) {
          // d will be 'id' when called for legends rgba(245, 222, 109, 0.2);
          if (!d.id) {
            return color;
          }
          if (d.id === 'Last Period') {
            return d.index !== 0 ? 'rgba(245, 222, 109, 0.2)' : color;
          } else if (d.id === 'Current Period') {
            return d.index !== 0 ? 'rgba(245, 170, 97, 0.2)' : color;
          }
          return color;
        },
      },
      tooltip: {
        grouped: false
      },
      color: {
        pattern: ['#f5de6d', '#f5aa61']
      },
      axis: {
        x: {
          type: 'category',
          categories: ['January', 'February', 'March'],
        },
        y: {
          tick: {
            outer: false,
            format: function (d) {
              return '$' + d + 'k';
            },
            values: [0, 100, 200, 300, 400]
          }
        }
      },

      grid: grid,

      point: {
        focus: {
          expand: {
            enabled: false
          }
        }
      },
      bar: {
        width: 80 // this makes bar width 100px
      }
    });
    const chart2 = c3.generate({
      bindto: '.avg-revenue-chart',
      data: {
        columns: [
          ['Last Period', 3],
          ['Current Period', 4]
        ],
        type: 'bar'
      },
      tooltip: {
        grouped: false
      },
      color: {
        pattern: ['#ba3d5d', '#6b275a']
      },
      axis: {
        x: {
          type: 'category',
          categories: ['January']
        },
        y: {
          tick: {
            outer: false,
            format: function (d) {
              return '$' + d + 'k';
            },
            values: [0, 1, 2, 3, 4]
          }
        }
      },
      grid: grid,
      bar: {
        width: 80 // this makes bar width 100px
      }
    });
    const chart3 = c3.generate({
      bindto: '.new-customers-chart',
      data: {
        columns: [
          ['Last Period', 12],
          ['Current Period', 24]
        ],
        type: 'bar'
      },
      tooltip: {
        grouped: false
      },
      color: {
        pattern: ['#35b3f7', '#0577b3']
      },
      axis: {
        x: {
          type: 'category',
          categories: ['January']
        },
        y: {
          tick: {
            values: [0, 5, 10, 15, 20, 25]
          }
        }
      },
      grid: grid,
      bar: {
        width: 80 // this makes bar width 100px
      }
    });

    this.options = chartData['options'];

    this.myCharts[1] = {};
    this.myCharts[1].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[1].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[1].options = _.cloneDeep(this.options);
    this.myCharts[1].options.chart.type = 'column';
    this.myCharts[1].options.xAxis.categories = chartData['RETURN ON ASSETS'].categories;
    this.myCharts[1].options.series[0].name = chartData['RETURN ON ASSETS'].label;
    this.myCharts[1].options.series[0].data = chartData['RETURN ON ASSETS'].data;
    this.myCharts[1].options.chart.events = {};
    this.myCharts[1].options.plotOptions = {
      series: {
        cursor: 'pointer',
          point: {
          events: {
            click: function() {
              alert(this.y);
            },
            load: function () {
              console.log(this);
              // Draw the flow chart
              var ren = this.renderer,
                // colors = Highcharts.getOptions().colors,
                rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];


              // Arrow from Batik to SaaS client
              ren.path(['M', 235, 185, 'L', 235, 155, 'C', 235, 130, 235, 130, 215, 130,
                'L', 95, 130, 'L', 100, 125, 'M', 95, 130, 'L', 100, 135])
                .attr({
                  'stroke-width': 2,
                  stroke: '#cb1c1f'
                })
                .add();

              ren.label('Rasterized image', 100, 110)
                .css({
                  color: '#cb201d',
                  fontSize: '10px'
                })
                .add();

            }
          }
        }
      }
    };
    this.myCharts[1].options.chart.events.load = function () {
      console.log(this);
      // Draw the flow chart
      var ren = this.renderer,
        // colors = Highcharts.getOptions().colors,
        rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
        leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];


      // Arrow from Batik to SaaS client
      ren.path(['M', 235, 185, 'L', 235, 155, 'C', 235, 130, 235, 130, 215, 130,
        'L', 95, 130, 'L', 100, 125, 'M', 95, 130, 'L', 100, 135])
        .attr({
          'stroke-width': 2,
          stroke: '#cb1c1f'
        })
        .add();

      ren.label('Rasterized image', 100, 110)
        .css({
          color: '#cb201d',
          fontSize: '10px'
        })
        .add();

    };
  }

  onLoad($event) {
    console.log($event);
    // Draw the flow chart
    const ren = $event.renderer;
    // Arrow from Batik to SaaS client
    const x1 = $event.chartWidth / 4;
    const x2 = x1 + x1 + (2 / 8 * x1);
    const y1 = 120;
    const y2 = y1 - 30;
    const y3 = y2 - 50;
    ren.path(['M', x1, y1, 'L', x1, y2, 'C', x1, y3 - 20, x1, y3 - 20, x1 + 30, y3 - 20,
      'L', x2, y3 - 20, 'L', x2 - 15, y3 - 20 - 5, 'M', x2, y3 - 20, 'L', x2 - 15, y3 - 20 + 5])
      .attr({
        'stroke-width': 2,
        stroke: '#333'
      })
      .add();

    ren.label('x9,6', x1 - 20, y1 + 20)
      .css({
        color: '#333',
        fontSize: '18px'
      })
      .add();
  }
}
