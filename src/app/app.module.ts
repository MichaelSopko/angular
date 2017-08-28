import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartModule} from 'angular2-chartjs';
import {RouterModule} from "@angular/router";

//import { ChartModule as HightChartModule } from 'angular2-highcharts';
//import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import Chart from 'chart.js';
import * as  c3 from 'c3';

import {AppComponent} from './app.component';
import {FinancialPerformanceComponent} from './financial-performance/financial-performance.component';
import { InvestorRelationsComponent } from './investor-relations/investor-relations.component';
import { SalesCycleComponent } from './sales-cycle/sales-cycle.component';
import { SalesConversionComponent } from './sales-conversion/sales-conversion.component';
import { FinancialOverviewComponent } from './financial-overview/financial-overview.component';
import { MenegmentKpiComponent } from './menegment-kpi/menegment-kpi.component';
import {SalesPerformanceComponent} from './sales-performance/sales-performance.component';

import { HightChartModule } from './lead-conversion/high-charts.module';

/*import * as highcharts from 'highcharts';

export function highchartsFactory() {
  return highcharts;
}*/

@NgModule({
  declarations: [
    AppComponent,
    FinancialPerformanceComponent,
    InvestorRelationsComponent,
    SalesCycleComponent,
    SalesConversionComponent,
    SalesPerformanceComponent,
    FinancialOverviewComponent,
    MenegmentKpiComponent,
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HightChartModule,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {path: 'home', component: FinancialPerformanceComponent},
      {path: 'fin-perf', component: FinancialPerformanceComponent},
      {path: 'fin-over', component: FinancialOverviewComponent},
      {path: 'inv-rel', component: InvestorRelationsComponent},
      {path: 'menegment-kpi', component: MenegmentKpiComponent},
      {path: 'sales-cycle', component: SalesCycleComponent},
      {path: 'sales-perf', component: SalesPerformanceComponent},
      {path: 'sales-conv', component: SalesConversionComponent},
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [FinancialPerformanceComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
