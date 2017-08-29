import {Component, OnInit} from '@angular/core';
import{ chartData } from './charts-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-investor-relations',
  templateUrl: './investor-relations.component.html',
  styleUrls: ['./investor-relations.component.scss']
})
export class InvestorRelationsComponent implements OnInit {
  myCharts = [];
  options = {};


  constructor() {
    this.options = chartData['options'];

    this.myCharts[1] = {};
    this.myCharts[1].title = chartData['RETURN ON ASSETS'].title;
    this.myCharts[1].circleTitleData = chartData['RETURN ON ASSETS'].circleTitleData;

    this.myCharts[1].options =  _.cloneDeep(this.options);
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
    this.myCharts[4].options.chart.backgroundColor = '#424c4e';
    this.myCharts[4].options.xAxis.categories = chartData['SHARE PRICE'].categories;
    this.myCharts[4].options.series[0].name = chartData['SHARE PRICE'].label;
    this.myCharts[4].options.series[0].data = chartData['SHARE PRICE'].data;


    this.myCharts.forEach((chart) => {
      chart.options.animation = {
        // onComplete: drawNumbers,
        onProgress: drawNumbers
      }
    });

    function drawNumbers() {
      var ctx = this.chart.ctx;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      this.chart.config.data.datasets.forEach(function (dataset) {
        ctx.fillStyle = dataset.textColor;
        ctx.fontWeight = 'aasas';

        for (var i = 0; i < dataset.data.length; i++) {
          var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
          var scaleMax = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
          var yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
          ctx.fillText(dataset.data[i], model.x, yPos);
        }
      });
    }
  }

  ngOnInit() {
  }

}
