import { Component, OnInit } from '@angular/core';
import { chartData } from './charts-data';

@Component({
  selector: 'app-financial-overview',
  templateUrl: './financial-overview.component.html',
  styleUrls: ['./financial-overview.component.scss']
})
export class FinancialOverviewComponent implements OnInit {
  myCharts = [];

  constructor() {
    this.myCharts[1] = {};
    this.myCharts[1].title = 'revenue';
    this.myCharts[1].options = {
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: ''
      },
      xAxis: [{
        categories: ['Jan 16', 'Feb 16', 'Mar 16', 'Apr 16', 'May 16', 'Jun 16',
          'Jul 16', 'Aug 16', 'Sep 16', 'Oct 16', 'Nov 16', 'Dec 16']
      }],
      yAxis: [{
        gridLineWidth: 0,
        min: 0,
        tickInterval: 30,
        title: {
          text: ''
        },
        labels: {
          format: '{value}',
        }
      }, {
        min: 0,
        tickInterval: 4,
        title: {
          text: ''
        },
        labels: {
          format: '{value} %',
        },
        opposite: true
      }],
      tooltip: {
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 55,
        floating: true,
        backgroundColor: '#FFFFFF'
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        name: 'Growth',
        type: 'column',
        yAxis: 1,
        data: [2.5, 2.5, 2.7, 2.7, 2.8, 2.8, 2.7, 2.8, 2.8, 2.8, 2.9, 2.9],
        tooltip: {
          valueSuffix: ' %'
        }
      }, {
        name: 'Target',
        type: 'spline',
        color: '#49d6be',
        data: [57, 62, 65, 69, 72, 77, 80, 85, 88, 93, 96, 101],
        marker: {
          enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
          valueSuffix: 'k'
        }

      }, {
        name: 'Revenue',
        type: 'spline',
        color: '#49b7ec',
        data: [94, 96, 99, 101, 104, 107, 110, 113, 116, 119, 122, 126],
        tooltip: {
          valueSuffix: 'k'
        }
      }]
    };

    this.myCharts[2] = {};
    this.myCharts[2].title = chartData['OPERATIONAL EXPENSES'].title;
    this.myCharts[2].options = chartData['OPERATIONAL EXPENSES'].options;
  }

  ngOnInit() {
  }

}
