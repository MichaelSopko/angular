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
    this.myCharts[1].options.series[0].data =  chartData['RETURN ON ASSETS'].data;
  }

  ngOnInit() {
  }

}
