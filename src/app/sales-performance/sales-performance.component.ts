import {Component, OnInit} from '@angular/core';
import{chartData} from './charts-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-sales-performance',
  templateUrl: './sales-performance.component.html',
  styleUrls: ['./sales-performance.component.scss']
})
export class SalesPerformanceComponent implements OnInit {
  myCharts = [];
  options = {};


  constructor() {
    this.myCharts[1] = {};
    this.myCharts[1].title = chartData['MONTHLY SALES GROWTH'].title;
    this.myCharts[1].options = chartData['MONTHLY SALES GROWTH'].options;

    this.myCharts[2] = {};
    this.myCharts[2].title = chartData['SALES COUNTRY PERFORMANCE'].title;
    this.myCharts[2].options = chartData['SALES COUNTRY PERFORMANCE'].options;

    this.myCharts[3] = {};
    this.myCharts[3].title = chartData['AVERAGE REVENUE PER UNIT'].title;
    this.myCharts[3].options = chartData['AVERAGE REVENUE PER UNIT'].options;
  }

  ngOnInit() {
  }

}
