import {Component, OnInit} from '@angular/core';
import{chartData} from './charts-data';

@Component({
  selector: 'app-financial-performance',
  templateUrl: './financial-performance.component.html',
  styleUrls: ['./financial-performance.component.scss']
})


export class FinancialPerformanceComponent implements OnInit {
  myCharts = [];


  constructor() {

    this.myCharts[1] = {};
    this.myCharts[1].type = 'bar';
    this.myCharts[1].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[1].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;
    this.myCharts[1].data = {
      labels: chartData['RETURN ON ASSETS'].labels,
      datasets: [
        {
          label: chartData['RETURN ON ASSETS'].label,
          backgroundColor: '#1da381',
          borderColor: '#1da381',
          borderWidth: 2,
          hoverBackgroundColor: '#72cebf',
          hoverBorderColor: '#72cebf',
          data: chartData['RETURN ON ASSETS'].data
        }
      ]
    };

    this.myCharts[1].options = chartData['options'];


    this.myCharts[2] = {};
    this.myCharts[2].type = 'line';
    this.myCharts[2].title = chartData['WORKING CAPITAL RATIO'].title;
    this.myCharts[2].circleTitleData = chartData['WORKING CAPITAL RATIO'].circleTitleData;
    this.myCharts[2].data = {
      labels: chartData['WORKING CAPITAL RATIO'].labels,
      datasets: [
        {
          label: chartData['WORKING CAPITAL RATIO'].label,
          lineTension: 0,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#59b5a6',
          pointHitRadius: 12,
          pointRadius: 2,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#1da381',
          pointHoverBorderColor: 'rgba(255,255,255,0.7)',
          pointHoverBorderWidth: 4,

          data: chartData['WORKING CAPITAL RATIO'].data
        }
      ]
    };
    this.myCharts[2].options = chartData['options'];
  }

  ngOnInit() {
  }

}
