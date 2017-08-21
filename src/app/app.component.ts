import { Component, AfterViewInit } from '@angular/core';
import * as  c3 from 'c3';
import * as  d3 from 'd3';

//declare var c3: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
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

  constructor() {
  }

  ngAfterViewInit() {
    var chart = c3.generate({
      data: {
        columns: [
          ['data1', 10],
        ],
        type: 'gauge',
        colors: {
          data1: '#9873FF'
        }
      },
      gauge: {
       // fullCircle: true, // This makes it go all the way around
        max: 12, // This is your max unit -- 12h
        min: 0, // Min. is 0
        //startingAngle: 90, // This sets the opening to the other side
        width: 25, // This is how thick the outer arc is
        label: {
          format: function(value, ratio) {
            return value + 'HR';
          }
        }
      }
    });

    /*var chart = c3.generate({
      data: {
        columns: [
          ['data', 91.4, 50, 100],
          ['data2', 120],
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      gauge: {
        min: 100, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
        max: 10000, // 100 is default
        expand: true,
        width: 39, // for adjusting arc thickness,
      },
      color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
          unit: 'value', // percentage is default
          max: 100, // 100 is default
          values: [40, 60, 90, 100]
        }
      },
      size: {
        height: 400
      }
    });
*/
/*    setTimeout(function () {
      chart.load({
        columns: [['data', 10]]
      });
    }, 1000);

    setTimeout(function () {
      chart.load({
        columns: [['data', 50]]
      });
    }, 2000);

    setTimeout(function () {
      chart.load({
        columns: [['data', 70]]
      });
    }, 3000);

    setTimeout(function () {
      chart.load({
        columns: [['data', 0]]
      });
    }, 4000);

    setTimeout(function () {
      chart.load({
        columns: [['data', 100]]
      });
    }, 5000);*/



    /*var chart = c3.generate({
      data: {
        columns: [
          ['data1', 100, 200, 150, 300, 200],
          ['data2', 400, 500, 250, 700, 300],
        ]
      }
    });*/

    /*let ctx: any;
    const chart: any = document.getElementById('myChart');
    ctx = chart.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });*/
  }
}
