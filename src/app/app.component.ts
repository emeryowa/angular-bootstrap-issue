import { Component, OnInit } from '@angular/core';

import { Intercom } from 'ng-intercom';

import { APP_CONFIG } from '../shared/services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(
    private intercom: Intercom
  ){}

  ngOnInit() {
    this.intercom.boot({
      app_id : APP_CONFIG.intercomKey,
      custom_launcher_selector : '#customIntercomButton'
    });
  }
}
