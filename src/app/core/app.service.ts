import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppService {
  sideBarUpdated: any = new EventEmitter();
  sideBarIsVisible: true;

  constructor() { }

  setSideBarVisible(visible) {
    this.sideBarIsVisible = visible;
    this.sideBarUpdated.emit(this.sideBarIsVisible);
  }

  getSideBarVisible() {
    return this.sideBarIsVisible;
  }

}
