import { Component, OnInit } from '@angular/core';
import{chartData} from './charts-data';

@Component({
  selector: 'app-sales-conversion',
  templateUrl: './sales-conversion.component.html',
  styleUrls: ['./sales-conversion.component.scss']
})
export class SalesConversionComponent implements OnInit {
  myCharts = [];
  options = {};


  constructor() {

    this.myCharts[1] = {};
    this.myCharts[1].title = chartData['CONVERTED LEADS'].title;
    this.myCharts[1].options = chartData['CONVERTED LEADS'].options;

    this.myCharts[2] = {};
    this.myCharts[2].title = chartData['SALES MANAGER 1'].title;
    this.myCharts[2].options = chartData['SALES MANAGER 1'].options;

    this.myCharts[3] = {};
    this.myCharts[3].title = chartData['SALES MANAGER 2'].title;
    this.myCharts[3].options = chartData['SALES MANAGER 2'].options;


    this.myCharts[4] = {};
    this.myCharts[4].title = chartData['SALES MANAGER 3'].title;
    this.myCharts[4].options = chartData['SALES MANAGER 3'].options;

    this.myCharts[5] = {};
    this.myCharts[5].title = chartData['LEAD OPPORTUNITY RATIO'].title;
    this.myCharts[5].options = chartData['LEAD OPPORTUNITY RATIO'].options;

    this.myCharts[6] = {};
    this.myCharts[6].title = chartData['OPPORTUNITY TO WIN'].title;
    this.myCharts[6].options = chartData['OPPORTUNITY TO WIN'].options;
  }

  ngOnInit() {
  }

}
