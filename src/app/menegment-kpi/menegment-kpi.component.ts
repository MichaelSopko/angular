import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-menegment-kpi',
  templateUrl: './menegment-kpi.component.html',
  styleUrls: ['./menegment-kpi.component.scss']
})
export class MenegmentKpiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const grid = {
      focus: {
        show: false
      }
    };
    const chart1 = c3.generate({
      bindto: '.revenue-chart',
      data: {
         columns: [
             ['Last Period', 50, 90, 180],
             ['Current Period', 130, 200, 350]
         ],
        type: 'bar',
        color: function (color, d) {
          // d will be 'id' when called for legends rgba(245, 222, 109, 0.2);
          if (!d.id) {
            return color;
          }
          if (d.id === 'Last Period') {
            return d.index !== 0 ? 'rgba(245, 222, 109, 0.2)' : color;
          } else if (d.id === 'Current Period') {
            return d.index !== 0 ? 'rgba(245, 170, 97, 0.2)' : color;
          }
          return color;
        },
      },
      color: {
        pattern: ['#f5de6d', '#f5aa61']
      },
      axis: {
        x: {
          type: 'category',
          categories: ['January', 'February', 'March'],
        },
        y: {
          tick: {
            outer: false,
            format: function (d) { return '$' + d + 'k'; },
            values: [0, 100, 200, 300, 400]
          }
        }
      },

      grid: grid,

      point: {
        focus: {
          expand: {
            enabled: false
          }
        }
      },
      bar: {
        width: 80 // this makes bar width 100px
      }
    });
    const chart2 = c3.generate({
      bindto: '.avg-revenue-chart',
      data: {
        columns: [
          ['Last Period', 3],
          ['Current Period', 4]
        ],
        type: 'bar'
      },
      color: {
        pattern: ['#ba3d5d', '#6b275a']
      },
      axis: {
        x: {
          type: 'category',
          categories: ['January']
        },
        y: {
          tick: {
            outer: false,
            format: function (d) { return '$' + d + 'k'; },
            values: [0, 1, 2, 3, 4]
          }
        }
      },
      grid: grid,
      bar: {
        width: 80 // this makes bar width 100px
      }
    });
    const chart3 = c3.generate({
      bindto: '.new-customers-chart',
      data: {
        columns: [
          ['Last Period', 12],
          ['Current Period', 24]
        ],
        type: 'bar'
      },
      color: {
        pattern: ['#35b3f7', '#0577b3']
      },
      axis: {
        x: {
          type: 'category',
          categories: ['January']
        },
        y: {
          tick: {
            values: [0, 5, 10, 15, 20, 25]
          }
        }
      },
      grid: grid,
      bar: {
        width: 80 // this makes bar width 100px
      }
    });
  }

}
