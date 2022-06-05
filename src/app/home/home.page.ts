import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public segment: string = "list";

  constructor() {}

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

}
