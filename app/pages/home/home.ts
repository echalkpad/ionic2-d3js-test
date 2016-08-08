import {Component, AfterViewInit} from '@angular/core';
import {NavController} from 'ionic-angular';
declare var d3: any;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements AfterViewInit {
  constructor(private navCtrl: NavController) {
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    var chart = d3.select("#chart").append("svg")
      .attr("width", 100)
      .attr("height", 100)
      .append("g");

    var rows = [
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3},
    ];

    var xScale = d3.scaleLinear()
            .range([0, 100])
            .domain([1, 3]);
    var yScale = d3.scaleLinear()
            .range([100, 0])
            .domain([1, 3]);

    chart.selectAll(".dot")
      .data(rows)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", (row) => { return xScale(row.x) })
      .attr("cy", (row) => { return yScale(row.y) })
      .attr("r", 3.5);
  }
}
