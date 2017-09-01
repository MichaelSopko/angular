import {Component} from '@angular/core';
import {AppService} from './core/app.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('270ms ease-in-out')),
      transition('out => in', animate('270ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {

  isDashboardOpened = false;
  menuState: string = window.innerWidth >= 1200 ? 'in' : 'out';
  sideBarIsVisible = window.innerWidth >= 1200;


  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
  }

  animationDone(evnt: any) {
    window.dispatchEvent(new Event('resize'));
  }

  constructor(private _appService: AppService) {
  }

  showSideBar() {
    this.sideBarIsVisible = !this.sideBarIsVisible;
  }
}
