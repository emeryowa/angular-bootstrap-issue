import { Component, OnInit } from '@angular/core';

import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(
    private intercom: Intercom
  ) {
    console.log('config in app.component ', (window as any).CONFIG);
  }

  ngOnInit() {
    console.log('intercom ', this.intercom);
    this.intercom.boot({
      app_id : (window as any).CONFIG.intercomKey,
      custom_launcher_selector : '#customIntercomButton'
    });
  }
}
