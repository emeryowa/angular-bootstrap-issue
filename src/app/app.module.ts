import {forwardRef, Inject, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IntercomModule } from 'ng-intercom';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    IntercomModule.forRoot({
        appId : (window as any).CONFIG.intercomKey,
        updateOnRouterChange: false
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    console.log('app module constructor ', (window as any).CONFIG);
  }
}
