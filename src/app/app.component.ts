import { Component, AfterViewInit } from '@angular/core';
import * as  c3 from 'c3';
import * as  d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
    var temperatures = [
      {temp: 32, month: 'January'},
      {temp: 38, month: 'February'},
      {temp: 47, month: 'March'},
      {temp: 59, month: 'April'},
      {temp: 70, month: 'May'},
      {temp: 80, month: 'June'},
      {temp: 84, month: 'July'},
      {temp: 83, month: 'Auguest'},
      {temp: 76, month: 'September'},
      {temp: 64, month: 'October'},
      {temp: 49, month: 'November'},
      {temp: 37, month: 'December'}
    ];
    var months = temperatures.map(function(t) {
      return t.month
    });
    var isCelsius = false;
    var margin = {top: 5, right: 5, bottom: 50, left: 50};
// here, we want the full chart to be 700x200, so we determine
// the width and height by subtracting the margins from those values
    var fullWidth = 700;
    var fullHeight = 200;
// the width and height values will be used in the ranges of our scales
    var width = fullWidth - margin.right - margin.left;
    var height = fullHeight - margin.top - margin.bottom;
    var svg = d3.select('body').append('svg')
      .attr('width', fullWidth)
      .attr('height', fullHeight)
      // this g is where the bar chart will be drawn
      .append('g')
      // translate it to leave room for the left and top margins
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// x value determined by month
    var monthScale = d3.scaleBand()
      .domain(months)
      .range([0, width])
      .paddingInner(0.1);


// the width of the bars is determined by the scale
    var bandwidth = monthScale.bandwidth();

// y value determined by temp
    var maxTemp = d3.max(temperatures, function(d) { return d.temp; });
    var tempScale = d3.scaleLinear()
      .domain([0, maxTemp])
      .range([height, 0])
      .nice();

    var xAxis = d3.axisBottom(monthScale);
    var yAxis = d3.axisLeft(tempScale);

// draw the axes
    svg.append('g')
      .classed('x axis', true)
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    var yAxisEle = svg.append('g')
      .classed('y axis', true)
      .call(yAxis);

// add a label to the yAxis
    var yText = yAxisEle.append('text')
      .attr('transform', 'rotate(-90)translate(-' + height/2 + ',0)')
      .style('text-anchor', 'middle')
      .style('fill', 'black')
      .attr('dy', '-2.5em')
      .style('font-size', 14)
      .text('Fahrenheit');

    var barHolder = svg.append('g')
      .classed('bar-holder', true);

// draw the bars
    var bars = barHolder.selectAll('rect.bar')
      .data(temperatures)
      .enter().append('rect')
      .classed('bar', true)
      .attr('x', function(d, i) {
        // the x value is determined using the
        // month of the datum
        return monthScale(d.month)
      })
      .attr('width', bandwidth)
      .attr('y', function(d) {
        // the y position is determined by the datum's temp
        // this value is the top edge of the rectangle
        return tempScale(d.temp);
      })
      .attr('height', function(d) {
        // the bar's height should align it with the base of the chart (y=0)
        return height - tempScale(d.temp);
      });

    function convert() {
      // convert temperatures between celsius and fahrenheit
      var converter = isCelsius ? toFahrenheit : toCelsius;
      yText.text(isCelsius ? 'Fahrenheit' : 'Celsius')
      isCelsius = !isCelsius;
      temperatures.forEach(function(t) {
        t.temp = converter(t.temp);
      });

      // redraw the bars
      bars
        .transition()
        .duration(2500)
        .attr('y', function(d) {
          return tempScale(d.temp);
        })
        .attr('height', function(d) {
          return height - tempScale(d.temp);
        })
    }

    function toCelsius(f) {
      return (f-32)*5/9;
    }

    function toFahrenheit(c) {
      return c*9/5 + 32;
    }

    setInterval(convert, 5000);


    /*var chart = c3.generate({
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
    });*/

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
