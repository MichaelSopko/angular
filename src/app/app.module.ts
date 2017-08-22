import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartModule} from 'angular2-chartjs';
import {RouterModule} from "@angular/router";

import Chart from 'chart.js';
import * as  c3 from 'c3';

import {AppComponent} from './app.component';
import {FinancialPerformanceComponent} from './financial-performance/financial-performance.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialPerformanceComponent
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
    ])
  ],
  exports: [
    ChartModule,
    RouterModule
  ],
  providers: [ChartModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
