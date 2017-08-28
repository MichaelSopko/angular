import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';

export function highchartsFactory() {
  return highcharts;
}

import { HighChartComponent } from './high-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [
    HighChartComponent
  ],
  declarations: [
    HighChartComponent
  ],
  providers: [
  {
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }
  ]
})
export class HightChartModule { }
