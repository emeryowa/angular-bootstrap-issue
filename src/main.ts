import {enableProdMode, Injector} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppConfigService } from './shared/services/app-config.service';
import {AppModule} from './app/app.module';

/**
 * Fetch  environment variables from config.json. This approach is used over the Angular CLI environments for Docker
 * XMLHttpRequest is used in favor of fetch(), to support IE11 and below
 * @link https://stackoverflow.com/questions/41035581/loading-configuration-from-database-before-angular-2-app-start-using-aot
 */
const appConfigRequest = new XMLHttpRequest();
appConfigRequest.addEventListener('load', onAppConfigLoad);
appConfigRequest.open('GET', '/config.json');
appConfigRequest.send();

/**
 * Callback executed when app config JSON file has been loaded. Merges app version with config and initializes
 */
function onAppConfigLoad() {

  const config = JSON.parse(this.responseText);
  initConfig(config);
}

/**
 * Sets fetched config to AppConfigService constant APP_CONFIG and calls bootstrap()
 * @param config Fetched config object
 */
function initConfig(config) {

    const injector = Injector.create([{provide: AppConfigService, useClass: AppConfigService, deps : []}]);
    const configService = injector.get(AppConfigService);
    configService.set(config);
    console.log('config', config);
    bootstrap(config);
}

/**
 * Bootstraps the application. Calls enableProdMode for production environments before bootstrap
 * @param config Config object, needed to check if app is in production mode
 */
function bootstrap (config) {

  if (config.production) {
    enableProdMode();
  }
  console.log('bootstrap1');
  // import('./app/app.module').then(module => {
  //   console.log('module', module);
  //   platformBrowserDynamic().bootstrapModule(module.AppModule)
  //     .catch(err => console.error(err));
  // });

    platformBrowserDynamic()
        .bootstrapModule(AppModule).catch(err => console.error(err));
}


