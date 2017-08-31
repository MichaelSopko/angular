import {Component, OnInit} from '@angular/core';
import{chartData} from './charts-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-financial-performance',
  templateUrl: './financial-performance.component.html',
  styleUrls: ['./financial-performance.component.scss']
})


export class FinancialPerformanceComponent implements OnInit {
  myCharts = [];
  options = {};


  constructor() {
    function randomData(numberCount: number, min: number, max: number): number[] {
      let result: number[] = [];

      for (let i = 0; i < numberCount; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }

      return result;
    }

    let chartCount = 1;

    this.options = chartData['options'];

    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[chartCount].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[chartCount].options = _.cloneDeep(this.options);
    this.myCharts[chartCount].options.chart.type = 'column';
    this.myCharts[chartCount].options.xAxis.categories = chartData['RETURN ON ASSETS'].categories;
    this.myCharts[chartCount].options.series[0].name = chartData['RETURN ON ASSETS'].label;
    this.myCharts[chartCount].options.series[0].data = chartData['RETURN ON ASSETS'].data;

    chartCount++;

    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].title = chartData['WORKING CAPITAL RATIO'].title;
    this.myCharts[chartCount].circleTitleData = chartData['WORKING CAPITAL RATIO'].circleTitleData;
    this.myCharts[chartCount].options = _.cloneDeep(this.options);
    this.myCharts[chartCount].options.chart.type = 'line';
    this.myCharts[chartCount].options.xAxis.categories = chartData['WORKING CAPITAL RATIO'].categories;
    this.myCharts[chartCount].options.series[0].name = chartData['WORKING CAPITAL RATIO'].label;
    this.myCharts[chartCount].options.series[0].data = chartData['WORKING CAPITAL RATIO'].data;

    chartCount++;

    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].title = chartData['RETURN ON EQUITY'].title;
    this.myCharts[chartCount].circleTitleData = chartData['RETURN ON EQUITY'].circleTitleData;
    this.myCharts[chartCount].options = _.cloneDeep(this.options);
    this.myCharts[chartCount].options.chart.type = 'line';
    this.myCharts[chartCount].options.xAxis.categories = chartData['RETURN ON EQUITY'].categories;
    this.myCharts[chartCount].options.series[0].name = chartData['RETURN ON EQUITY'].label;
    this.myCharts[chartCount].options.series[0].data = chartData['RETURN ON EQUITY'].data;

    chartCount++;

    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].title = chartData['DEBT-EQUITY RATIO'].title;
    this.myCharts[chartCount].circleTitleData = chartData['DEBT-EQUITY RATIO'].circleTitleData;
    this.myCharts[chartCount].options = _.cloneDeep(this.options);
    this.myCharts[chartCount].options.chart.type = 'area';
    this.myCharts[chartCount].options.xAxis.categories = chartData['DEBT-EQUITY RATIO'].categories;
    this.myCharts[chartCount].options.series[0].name = chartData['DEBT-EQUITY RATIO'].label;
    this.myCharts[chartCount].options.series[0].data = chartData['DEBT-EQUITY RATIO'].data;

    chartCount++;

    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Current Assets';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 100, 300);

    chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Cash';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 10, 100);

    chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Accounts Receivable';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 45, 150);

    chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Inventory';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 40, 100);


    chartCount++; //9
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Long-Term Assets';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 40, 100);

    chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Total Liabilities';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 100, 180);

    chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Current Liabilities';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 50, 100);

    chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Accounts Payable';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 40, 80);

    chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Other Liabilites';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 30, 100);

    chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Shareholder Equity';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 30, 100);

    chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Common Stock';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 50, 150);

   chartCount++;
    this.myCharts[chartCount] = {};
    this.myCharts[chartCount].options = _.cloneDeep(chartData['COLUMNS'].options);
    this.myCharts[chartCount].options.series[0].name = 'Current Earnings';
    this.myCharts[chartCount].options.series[0].data = randomData(7, 20, 70);
  }

  ngOnInit() {
  }

}
