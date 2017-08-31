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
      credits: {
        enabled: false
      },
      plotOptions: {
        funnel: {
          colors: ['#35aaae', '#ec8190', '#feb074', '#aaaaaa']
        },
        series: {
          dataLabels: {
            enabled: true,
            inside: true,
            format: '{point.name}',
            color: 'white',
            softConnector: true,
            connectorWidth: 0,
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
    this.myCharts[2].options.tooltip = {enabled: false};
    this.myCharts[2].options.chart.events.render = function ($event) {
      // Draw the flow chart
      const target = $event.target;
      const ren = target.renderer;
      const x1 = target.chartWidth / 9;
      const x2 = x1 + x1 + (2 / 8 * x1);
      const y1 = target.chartHeight / 4;
      const y2 = y1 + 200;

      if (target.myCustompath) {
        target.myCustompath.element.remove();
      }

      if (target.myCustompathLabel) {
        target.myCustompathLabel.element.remove();
      }

      target.myCustompath = ren.path(['M', x1, y1, 'C', x1 - 90, y2 - 50, x1, y2, x1 + 50, y2,
        'L', x2, y2, 'L', x2 - 15, y2 - 5, 'M', x2, y2, 'L', x2 - 15, y2 + 5])
        .attr({
          'stroke-width': 2,
          stroke: '#333'
        })
        .add();

      target.myCustompathLabel = ren.label('7%',
        x1 - 20, y1 * 5 / 2, )
        .css({
          width: '100px',
          color: '#333',
          fontSize: '18px',
          border: '1px solid black'
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
    this.myCharts[3].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[3].options = _.cloneDeep(this.options);
    this.myCharts[3].options.chart.type = 'line';
    this.myCharts[3].options.series[0].name = 'Lead-Conversion Ratio';
    this.myCharts[3].options.series[0].data = [9.3, 2.4, 1.2, 8.3, 2.8, 5.1, 2.4, 4.9, 4.2];
    this.myCharts[3].options.xAxis = {
      visible: false,
      categories: chartData['RETURN ON ASSETS'].categories
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
    this.myCharts[4].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[4].options = _.cloneDeep(this.options);
    this.myCharts[4].options.chart.type = 'line';
    this.myCharts[4].options.series[0].name = 'Lead-Conversion Ratio';
    this.myCharts[4].options.series[0].data = [8.3, 21.4, 7.1, 7.1, 10.7, 7.1, 7.1, 10.7, 0.0];
    this.myCharts[4].options.xAxis = {
      visible: false,
      categories: chartData['RETURN ON ASSETS'].categories
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
    this.myCharts[5].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[5].options = _.cloneDeep(this.options);
    this.myCharts[5].options.chart.type = 'line';
    this.myCharts[5].options.series[0].name = 'Lead-Conversion Ratio';
    this.myCharts[5].options.series[0].data = [3.1, 7.1, 17.9, 24.2, 4.8, 5.4, 7.1, 5.4, 0.0];
    this.myCharts[5].options.xAxis = {
      visible: false,
      categories: chartData['RETURN ON ASSETS'].categories
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
    this.myCharts[6].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;
    this.myCharts[6].options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        visible: false,
        categories: ['A']
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        column: {
          colors: ['#35aaae', '#ec8190', '#feb074', '#aaaaaa'],
        },
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            useHTML: true,
            shadow: false,
            verticalAlign: 'middle',
            padding: 0,
            align: 'center',
            style:  {
              fontSize: '14px',
              fontWeight: 'normal',
              'text-align': 'center'
            },
            color: 'white'
          }
        }
      },
      series: [{
        color: '#35aaae',
        name: 'Stage1',
        data: [3]
      }, {
        color: '#ec8190',
        name: 'Stage2',
        data: [5]
      }, {
        color: '#feb074',
        name: 'Stage3',
        data: [7]
      }, {
        color: '#aaaaaa',
        name: 'Stage4',
        data: [3]
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
        visible: false,
        categories: ['B']
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            useHTML: true,
            shadow: false,
            verticalAlign: 'middle',
            padding: 0,
            align: 'center',
            style:  {
              fontSize: '14px',
              fontWeight: 'normal',
              'text-align': 'center'
            },
            color: 'white'
          }
        }
      },
      series: [{
        color: '#35aaae',
        name: 'Stage1',
        data: [4]
      }, {
        color: '#ec8190',
        name: 'Stage2',
        data: [4]
      }, {
        color: '#feb074',
        name: 'Stage3',
        data: [10]
      }, {
        color: '#aaaaaa',
        name: 'Stage4',
        data: [7]
      }]
    };

    this.myCharts[8] = {};
    this.myCharts[8].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[8].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;
    this.myCharts[8].options = {
      chart: {
        type: 'bar'
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        visible: false,
        categories: ['C']
      },
      yAxis: {
        visible: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            useHTML: true,
            shadow: false,
            verticalAlign: 'middle',
            padding: 0,
            align: 'center',
            style:  {
              fontSize: '14px',
              fontWeight: 'normal',
              'text-align': 'center'
            },
            color: 'white'
          }
        }
      },
      series: [{
        color: '#35aaae',
        name: 'Stage1',
        data: [3]
      }, {
        color: '#ec8190',
        name: 'Stage2',
        data: [3]
      }, {
        color: '#feb074',
        name: 'Stage3',
        data: [4]
      }, {
        color: '#aaaaaa',
        name: 'Stage4',
        data: [3]
      }]
    };
  }

  ngOnInit() {
  }

}
