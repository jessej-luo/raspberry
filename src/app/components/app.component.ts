import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {DataService} from '../services/submissiontext.service'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/submission']" routerLinkActive="active">Submit a Movie Review</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [DataService]
})

export class AppComponent {
  title = 'Movie Review Website';
}
