import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-performance',
  templateUrl: './financial-performance.component.html',
  styleUrls: ['./financial-performance.component.scss']
})
export class FinancialPerformanceComponent implements OnInit {
  type = 'line';
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() { }

  ngOnInit() {
  }

}
