import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IntercomModule } from 'ng-intercom';

import { AppComponent } from './app.component';

import { APP_CONFIG } from '../shared/services/app-config.service';

console.log('app.module.ts');
console.log(APP_CONFIG);

@NgModule({
  imports: [
    BrowserModule,
    IntercomModule.forRoot({
        appId : APP_CONFIG.intercomKey,
        updateOnRouterChange: false
    })
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
