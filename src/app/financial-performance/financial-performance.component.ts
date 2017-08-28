import {Component, OnInit} from '@angular/core';
import{chartData} from './charts-data';
import { Map } from "immutable";

@Component({
  selector: 'app-financial-performance',
  templateUrl: './financial-performance.component.html',
  styleUrls: ['./financial-performance.component.scss']
})


export class FinancialPerformanceComponent implements OnInit {
  myCharts = [];
  options = {};


  constructor() {
    this.options = chartData['options'];

    this.myCharts[1] = {};
    this.myCharts[1].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[1].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;


    // this.myCharts[1].options = Map({}).mergeDeep(this.options).toObject();
    this.myCharts[1].options =  this.options;
    this.myCharts[1].options.chart.type = 'column';
    this.myCharts[1].options.xAxis.categories =  chartData['RETURN ON ASSETS'].categories;
    this.myCharts[1].options.series[0].name =  chartData['RETURN ON ASSETS'].label;
    this.myCharts[1].options.series[0].data =  chartData['RETURN ON ASSETS'].data;


   /* this.myCharts[2] = {};
    this.myCharts[2].title = chartData['WORKING CAPITAL RATIO'].title;
    this.myCharts[2].circleTitleData = chartData['WORKING CAPITAL RATIO'].circleTitleData;


    this.myCharts[2].options = chartData['options'];
    this.myCharts[2].options.chart.type = 'line';
    this.myCharts[2].options.xAxis.categories =  chartData['WORKING CAPITAL RATIO'].categories;
    this.myCharts[2].options.series[0].name =  chartData['WORKING CAPITAL RATIO'].label;
    this.myCharts[2].options.series[0].data =  chartData['WORKING CAPITAL RATIO'].data;*/


    this.myCharts[3] = {};
    this.myCharts[3].type = 'line';
    this.myCharts[3].title = chartData['RETURN ON EQUITY'].title;
    this.myCharts[3].circleTitleData = chartData['RETURN ON EQUITY'].circleTitleData;
    this.myCharts[3].data = {
      labels: chartData['RETURN ON EQUITY'].labels,
      datasets: [
        {
          label: chartData['RETURN ON EQUITY'].label,
          lineTension: 0,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#59b5a6',
          pointBackgroundColor: '#59b5a6',
          pointHitRadius: 12,
          pointStyle: 'rect',
          pointRadius: 4,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#1da381',
          pointHoverBorderColor: 'rgba(255,255,255,0.7)',
          pointHoverBorderWidth: 4,

          data: chartData['RETURN ON EQUITY'].data
        }
      ]
    };
    this.myCharts[3].options = chartData['options'];

    this.myCharts[4] = {};
    this.myCharts[4].type = 'line';
    this.myCharts[4].title = chartData['DEBT-EQUITY RATIO'].title;
    this.myCharts[4].circleTitleData = chartData['DEBT-EQUITY RATIO'].circleTitleData;
    this.myCharts[4].data = {
      labels: chartData['DEBT-EQUITY RATIO'].labels,
      datasets: [
        {
          label: chartData['DEBT-EQUITY RATIO'].label,
          lineTension: 0,
          backgroundColor: '#8cc',
          borderColor: '#59b5a6',
          pointBackgroundColor: '#59b5a6',
          pointHitRadius: 12,
          pointStyle: 'rect',
          pointRadius: 4,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#1da381',
          pointHoverBorderColor: 'rgba(255,255,255,0.7)',
          pointHoverBorderWidth: 4,

          data: chartData['DEBT-EQUITY RATIO'].data
        }
      ]
    };
    this.myCharts[4].options = chartData['options'];



  }

  ngOnInit() {
  }

}
