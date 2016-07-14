
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app/components/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

// import {enableProdMode} from '@angular/core';

// enableProdMode()

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
])
.catch(err => console.error(err));
