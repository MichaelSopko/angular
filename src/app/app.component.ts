import {Component} from '@angular/core';
import {AppService} from './core/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideBarIsVisible = true;
  isDashboardOpened = false;

  constructor(private _appService: AppService) {
  }

  showSideBar() {
    this.sideBarIsVisible = !this.sideBarIsVisible;
    this._appService.setSideBarVisible(this.sideBarIsVisible);
  }
}
