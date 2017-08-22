import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartModule} from 'angular2-chartjs';
import {RouterModule} from "@angular/router";

import Chart from 'chart.js';
import * as  c3 from 'c3';

import {AppComponent} from './app.component';
import {FinancialPerformanceComponent} from './financial-performance/financial-performance.component';
import { InvestorRelationsComponent } from './investor-relations/investor-relations.component';
import { SalesCycleComponent } from './sales-cycle/sales-cycle.component';
import { SalesConversionComponent } from './sales-conversion/sales-conversion.component';
import { FinancialOverviewComponent } from './financial-overview/financial-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialPerformanceComponent,
    InvestorRelationsComponent,
    SalesCycleComponent,
    SalesConversionComponent,
    FinancialOverviewComponent,
  ],
  imports: [
    BrowserModule,
    ChartModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {path: 'home', component: FinancialPerformanceComponent},
      {path: 'fin-perf', component: FinancialPerformanceComponent},
    ])
  ],
  exports: [
    ChartModule,
    RouterModule
  ],
  providers: [ChartModule, FinancialPerformanceComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
