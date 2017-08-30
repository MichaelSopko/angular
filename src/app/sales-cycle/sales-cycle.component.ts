import { Component, OnInit } from '@angular/core';
import { chartData } from './charts-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-sales-cycle',
  templateUrl: './sales-cycle.component.html',
  styleUrls: ['./sales-cycle.component.scss']
})
export class SalesCycleComponent implements OnInit {
  myCharts = [];
  options = {};

  constructor() {
    this.options = chartData['options'];

    this.myCharts[1] = {};
    this.myCharts[1].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[1].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[1].options = _.cloneDeep(this.options);
    this.myCharts[1].options.chart.type = 'line';
    this.myCharts[1].options.xAxis.categories =  chartData['RETURN ON ASSETS'].categories;
    this.myCharts[1].options.series[0].name =  chartData['RETURN ON ASSETS'].label;
    this.myCharts[1].options.series[0].data = [18.2, 18.2, 18.3, 18.3, 18.4, 18.5, 18.2, 18.3, 18.1];

    this.myCharts[2] = {};
    this.myCharts[2].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[2].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[2].options = {
      chart: {
        type: 'funnel',
        marginRight: 100
      },
      title: {
        text: 'Sales funnel',
        x: -50
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            inside: true,
            format: '{point.name}',
            color: 'white',
            softConnector: true,
            useHTML: true,
            shadow: false,
            verticalAlign: 'middle',
            padding: 0,
            align: 'center',
            style:  {
              fontSize: '14px',
              fontWeight: 'normal',
              'text-align': 'center'
            }
          },
          neckWidth: '30%',
          neckHeight: '0%',
          borderWidth: 15,
          width: '75%'
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        type: 'funnel',
        name: 'Unique users',
        data: [
          ['Opportunities </br> 1.478', 478],
          ['Proposal </br> 455', 478],
          ['Negotiation </br> 357', 478],
          ['Closing </br> 111', 478]
        ]
      }]
    };
    this.myCharts[2].options.chart.events = {};
    this.myCharts[2].options.chart.events.render = function ($event) {
      console.log($event.target);
      // Draw the flow chart
      const target = $event.target;
      const ren = target.renderer;
      const x1 = target.chartWidth / 9;
      const x2 = x1 + x1 + (2 / 8 * x1);
      const y1 = target.chartHeight / 4;
      const y2 = y1 + 200;

      ren.path(['M', x1, y1, 'C', x1 - 90, y2 - 50, x1, y2, x1 + 50, y2,
        'L', x2, y2, 'L', x2 - 15, y2 - 5, 'M', x2, y2, 'L', x2 - 15, y2 + 5])
        .attr({
          'stroke-width': 2,
          stroke: '#333'
        })
        .add();

      ren.label('7%', x1 - 20, y1 * 5 / 2)
        .css({
          color: '#333',
          fontSize: '18px'
        })
        .add();

      this.series[0].data.forEach(function (p, i) {
        console.log(p);
        p.dataLabel.attr({
          x: (target.plotWidth - target.plotLeft) / 2 - (250 * target.plotLeft / p.plotY) ,
          y: p.plotY - 20,
          'text-anchor': 'middle'
        });
      });
    };

    this.myCharts[3] = {};
    this.myCharts[3].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[3].label = 'Lead-Conversion Ratio';
    this.myCharts[3].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[3].options = _.cloneDeep(this.options);
    this.myCharts[3].options.chart.type = 'line';
    this.myCharts[3].options.xAxis.categories =  chartData['RETURN ON ASSETS'].categories;
    this.myCharts[3].options.series[0].name =  chartData['RETURN ON ASSETS'].label;
    this.myCharts[3].options.series[0].data = [0.2, 0.5, 0.23, 0.34, 0.18, 0.27, 0.16, 0.17, 0.47];
    this.myCharts[3].options.xAxis = {
      visible: false
    };
    this.myCharts[3].options.plotOptions = {
      series: {
        color: '#54a2ae',
        dataLabels: {
          style: {
            fontWeight: 'bold',
            color: '#54a2ae',
            textOutline: 'none'
          },
          enabled: false
        },
        marker: {
          enabled: false
        }
      }
    };

    this.myCharts[4] = {};
    this.myCharts[4].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[4].label = 'Lead-Conversion Ratio';
    this.myCharts[4].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[4].options = _.cloneDeep(this.options);
    this.myCharts[4].options.chart.type = 'line';
    this.myCharts[4].options.xAxis.categories =  chartData['RETURN ON ASSETS'].categories;
    this.myCharts[4].options.series[0].name =  chartData['RETURN ON ASSETS'].label;
    this.myCharts[4].options.series[0].data = [0.2, 0.3, 0.33, 0.34, 0.38, 0.27, 0.26, 0.3, 0.3];
    this.myCharts[4].options.xAxis = {
      visible: false
    };
    this.myCharts[4].options.plotOptions = {
      series: {
        color: '#54a2ae',
        dataLabels: {
          style: {
            fontWeight: 'bold',
            color: '#54a2ae',
            textOutline: 'none'
          },
          enabled: false
        },
        marker: {
          enabled: false
        }
      }
    };

    this.myCharts[5] = {};
    this.myCharts[5].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[5].label = 'Lead-Conversion Ratio';
    this.myCharts[5].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[5].options = _.cloneDeep(this.options);
    this.myCharts[5].options.chart.type = 'line';
    this.myCharts[5].options.xAxis.categories =  chartData['RETURN ON ASSETS'].categories;
    this.myCharts[5].options.series[0].name =  chartData['RETURN ON ASSETS'].label;
    this.myCharts[5].options.series[0].data = [0.4, 0.23, 0.17, 0.34, 0.38, 0.37, 0.16, 0.57, 0.27];
    this.myCharts[5].options.xAxis = {
      visible: false
    };
    this.myCharts[5].options.plotOptions = {
      series: {
        color: '#54a2ae',
        dataLabels: {
          style: {
            fontWeight: 'bold',
            color: '#54a2ae',
            textOutline: 'none'
          },
          enabled: false
        },
        marker: {
          enabled: false
        }
      }
    };

    this.myCharts[6] = {};
    this.myCharts[6].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[6].label = 'Lead-Conversion Ratio';
    this.myCharts[6].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;
    this.myCharts[6].options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: 'John',
        data: [5]
      }, {
        name: 'Jane',
        data: [2]
      }, {
        name: 'Joe',
        data: [3]
      }, {
        name: 'Joen',
        data: [4]
      }]
    };

    this.myCharts[7] = {};
    this.myCharts[7].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[7].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;
    this.myCharts[7].options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: 'John',
        data: [5]
      }, {
        name: 'Jane',
        data: [2]
      }, {
        name: 'Joe',
        data: [3]
      }, {
        name: 'Joen',
        data: [4]
      }]
    };

    this.myCharts[8] = {};
    this.myCharts[8].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[8].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;
    this.myCharts[8].options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        name: 'John',
        data: [5]
      }, {
        name: 'Jane',
        data: [2]
      }, {
        name: 'Joe',
        data: [3]
      }, {
        name: 'Joen',
        data: [4]
      }]
    };
  }

  ngOnInit() {
  }

}
