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

    this.myCharts[4] = {};
    this.myCharts[4].title = chartData['CUSTOMER LIFETIME VALUE'].title;
    this.myCharts[4].options = chartData['CUSTOMER LIFETIME VALUE'].options;

    this.myCharts[5] = {};
    this.myCharts[5].title = chartData['CUSTOMER ACQUISITION COST'].title;
    this.myCharts[5].options = chartData['CUSTOMER ACQUISITION COST'].options;
  }

  ngOnInit() {
  }

}
