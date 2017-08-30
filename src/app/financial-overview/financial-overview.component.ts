import { Component, OnInit } from '@angular/core';

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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
        data: [94, 96, 99, 101, 104, 107, 110, 113, 116, 119, 122, 126],
        tooltip: {
          valueSuffix: 'k'
        }
      }]
    };
  }

  ngOnInit() {
  }

}
