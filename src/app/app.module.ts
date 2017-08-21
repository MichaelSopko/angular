import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule  } from 'angular2-chartjs';
import Chart from 'chart.js';
import * as  c3 from 'c3';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  exports: [
    ChartModule
  ],
  providers: [ChartModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
