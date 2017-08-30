import {Component, OnInit} from '@angular/core';
import { chartData } from './charts-data';
import * as _ from 'lodash';
import { AppService } from '../core/app.service';
//import * as $ from 'jquery';

//declare var $: any;

@Component({
  selector: 'app-investor-relations',
  templateUrl: './investor-relations.component.html',
  styleUrls: ['./investor-relations.component.scss']
})
export class InvestorRelationsComponent implements OnInit {
  myCharts = [];
  options = {};
  sideBarIsVisible = true;


  constructor(private _appService: AppService) {
    this.drawCharts();
  }

  ngOnInit() {
    /*this._appService.sideBarUpdated.subscribe(
      () => {
        this.sideBarIsVisible = this._appService.getSideBarVisible();
        setTimeout(() => {
          this.drawCharts();
        }, 200);
      }
    );*/

   /* window.addEventListener('resize', () =>{
     this.drawCharts();
     });*/
   /* let el: any;
    el = jQuery('app-investor-relations')[0];
    jQuery(el).on('resize', () => {
      this.drawCharts();
    });*/
     /*jQuery('main-content').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
     this.drawCharts();
     });*/
  }

  drawCharts() {
    this.options = chartData['options'];

    this.myCharts[1] = {};
    this.myCharts[1].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[1].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[1].options = _.cloneDeep(this.options);
    this.myCharts[1].options.chart.type = 'column';
    this.myCharts[1].options.xAxis.categories =  chartData['RETURN ON ASSETS'].categories;
    this.myCharts[1].options.series[0].name =  chartData['RETURN ON ASSETS'].label;
    this.myCharts[1].options.series[0].data =  chartData['RETURN ON ASSETS'].data;

    this.myCharts[2] = {};
    this.myCharts[2].type = 'bar';
    this.myCharts[2].title = chartData['RETURN ON EQUITY'].title;
    this.myCharts[2].circleTitleData = chartData['RETURN ON EQUITY'].circleTitleData;
    this.myCharts[2].data = {
      labels: chartData['RETURN ON EQUITY'].labels,
      datasets: [
        {
          label: chartData['RETURN ON EQUITY'].label,
          backgroundColor: '#fff',
          textColor: '#fff',

          data: chartData['RETURN ON EQUITY'].data
        }
      ]
    };
    this.myCharts[2].options = _.cloneDeep(this.options);
    this.myCharts[2].options.chart.type = 'column';
    this.myCharts[2].options.chart.backgroundColor = '#424c4e';
    this.myCharts[2].options.xAxis.categories = chartData['RETURN ON EQUITY'].categories;
    this.myCharts[2].options.series[0].name = chartData['RETURN ON EQUITY'].label;
    this.myCharts[2].options.series[0].data = chartData['RETURN ON EQUITY'].data;
    this.myCharts[2].options.tooltips = {
      backgroundColor: 'white',
      bodyFontColor: 'black',
      titleFontStyle: 'bold',
      titleFontColor: 'black',
      displayColors: false,
    };
    this.myCharts[2].options.scales = {
      yAxes: [{
        stacked: true,
        ticks: {
          max: 0.4,
          min: 0,
          stepSize: 0.1
        },
        display: false,
        gridLines: {
          display: false,
          color: 'rgba(255,99,132,0.2)'
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 45,
          fontColor: '#fff'
        },
        gridLines: {
          displayOnChartArea: false,
          drawOnChartArea: false,
          offsetGridLines: true,
          color: '#fff',
          zeroLineColor: '#fff',
          drawBorder: true,
          drawTicks: true,
          tickMarkLength: 10
        },

      }]
    };

    this.myCharts[3] = {};
    this.myCharts[3].type = 'area';
    this.myCharts[3].title = chartData['DEBT-EQUITY RATIO'].title;
    this.myCharts[3].circleTitleData = chartData['DEBT-EQUITY RATIO'].circleTitleData;
    this.myCharts[3].data = {
      labels: chartData['DEBT-EQUITY RATIO'].labels,
      datasets: [
        {
          label: chartData['DEBT-EQUITY RATIO'].label,
          lineTension: 0,
          textColor: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#fff',
          pointBackgroundColor: '#fff',
          pointHitRadius: 12,
          pointStyle: 'rect',
          pointRadius: 4,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,255,255,0.7)',
          pointHoverBorderWidth: 4,

          data: chartData['DEBT-EQUITY RATIO'].data
        }
      ]
    };
    this.myCharts[3].options = _.cloneDeep(this.options);
    this.myCharts[3].options.chart.type = 'area';
    this.myCharts[3].options.chart.backgroundColor = '#377991';
    this.myCharts[3].options.xAxis.categories = chartData['DEBT-EQUITY RATIO'].categories;
    this.myCharts[3].options.series[0].name = chartData['DEBT-EQUITY RATIO'].label;
    this.myCharts[3].options.series[0].data = chartData['DEBT-EQUITY RATIO'].data;

    this.myCharts[4] = {};
    this.myCharts[4].type = 'bar';
    this.myCharts[4].title = chartData['SHARE PRICE'].title;
    this.myCharts[4].circleTitleData = chartData['SHARE PRICE'].circleTitleData;
    this.myCharts[4].data = {
      labels: chartData['SHARE PRICE'].labels,
      datasets: [
        {
          label: chartData['SHARE PRICE'].label,
          textColor: '#fff',
          lineTension: 0,
          backgroundColor: '#cddde3',
          borderColor: '#fff',
          pointBackgroundColor: '#fff',
          pointHitRadius: 12,
          pointStyle: 'rect',
          pointRadius: 4,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,255,255,0.7)',
          pointHoverBorderWidth: 4,

          data: chartData['SHARE PRICE'].data
        }
      ]
    };
    this.myCharts[4].options = _.cloneDeep(this.options);
    this.myCharts[4].options.chart.type = 'column';
    this.myCharts[4].options.chart.backgroundColor = '#999488';
    this.myCharts[4].options.xAxis.categories = chartData['SHARE PRICE'].categories;
    this.myCharts[4].options.series[0].name = chartData['SHARE PRICE'].label;
    this.myCharts[4].options.series[0].data = chartData['SHARE PRICE'].data;
    this.myCharts[4].options.plotOptions.series.dataLabels = {
      style: {
        fontWeight: 'bold',
        color: 'white',
        textOutline: 'none'
      },
      enabled: true,
      format: '€{y}'
    };

    this.myCharts[5] = {};
    this.myCharts[5].type = 'area';
    this.myCharts[5].title = chartData['P/E Ratio'].title;
    this.myCharts[5].circleTitleData = chartData['P/E Ratio'].circleTitleData;
    this.myCharts[5].data = {
      labels: chartData['P/E Ratio'].labels,
      datasets: [
        {
          label: chartData['P/E Ratio'].label,
          lineTension: 0,
          textColor: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#fff',
          pointBackgroundColor: '#fff',
          pointHitRadius: 12,
          pointStyle: 'rect',
          pointRadius: 4,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,255,255,0.7)',
          pointHoverBorderWidth: 4,

          data: chartData['P/E Ratio'].data
        }
      ]
    };
    this.myCharts[5].options = _.cloneDeep(this.options);
    this.myCharts[5].options.chart.type = 'area';
    this.myCharts[5].options.chart.backgroundColor = '#A1CAD0';
    this.myCharts[5].options.xAxis.categories = chartData['P/E Ratio'].categories;
    this.myCharts[5].options.series[0].name = chartData['P/E Ratio'].label;
    this.myCharts[5].options.series[0].data = chartData['P/E Ratio'].data;

    this.myCharts[6] = {};
    this.myCharts[6].type = 'area';
    this.myCharts[6].title = chartData['WORKING CAPITAL RATIO'].title;
    this.myCharts[6].circleTitleData = chartData['WORKING CAPITAL RATIO'].circleTitleData;
    this.myCharts[6].data = {
      labels: chartData['WORKING CAPITAL RATIO'].labels,
      datasets: [
        {
          label: chartData['WORKING CAPITAL RATIO'].label,
          lineTension: 0,
          textColor: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: '#fff',
          pointBackgroundColor: '#fff',
          pointHitRadius: 12,
          pointStyle: 'rect',
          pointRadius: 4,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,255,255,0.7)',
          pointHoverBorderWidth: 4,

          data: chartData['WORKING CAPITAL RATIO'].data
        }
      ]
    };
    this.myCharts[6].options = _.cloneDeep(this.options);
    this.myCharts[6].options.chart.type = 'area';
    this.myCharts[6].options.chart.backgroundColor = '#D1B596';
    this.myCharts[6].options.xAxis.categories = chartData['WORKING CAPITAL RATIO'].categories;
    this.myCharts[6].options.series[0].name = chartData['WORKING CAPITAL RATIO'].label;
    this.myCharts[6].options.series[0].data = chartData['WORKING CAPITAL RATIO'].data;
  }

}
