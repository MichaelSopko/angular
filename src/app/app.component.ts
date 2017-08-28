import { Component, AfterViewInit } from '@angular/core';
import * as  c3 from 'c3';
import * as  d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  sideBarIsVisible = true;

  constructor() {
  }

  ngAfterViewInit() {

  }

  showSideBar() {
    this.sideBarIsVisible = !this.sideBarIsVisible;
  }
}
