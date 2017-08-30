import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FinancialPerformanceComponent } from './financial-performance/financial-performance.component';
import { InvestorRelationsComponent } from './investor-relations/investor-relations.component';
import { SalesCycleComponent } from './sales-cycle/sales-cycle.component';
import { SalesConversionComponent } from './sales-conversion/sales-conversion.component';
import { FinancialOverviewComponent } from './financial-overview/financial-overview.component';
import { MenegmentKpiComponent } from './menegment-kpi/menegment-kpi.component';
import { SalesPerformanceComponent } from './sales-performance/sales-performance.component';

import { AppService } from './core/app.service';

// import { HightChartModule } from './lead-conversion/high-charts.module';


import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';
const Hichartsfunnel = require('highcharts/modules/funnel');

export function highchartsFactory() {
  Hichartsfunnel(highcharts);

  return highcharts;
}


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
    // HightChartModule,
    //HighchartsStatic,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'fin-perf',
        pathMatch: 'full'
      },
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
  providers: [
    FinancialPerformanceComponent,
    AppService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
