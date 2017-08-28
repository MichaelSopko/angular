import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-conversion',
  templateUrl: './sales-conversion.component.html',
  styleUrls: ['./sales-conversion.component.scss']
})
export class SalesConversionComponent implements OnInit {
  constructor() {
    this.options = {
      title : { text : 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }
  options: Object;



  ngOnInit() {
  }

}
