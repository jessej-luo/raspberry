import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { DataService } from '../services/submissiontext.service'

import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'submission-form',
  templateUrl: 'submission.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class Submission {

  text: any;
  thanks = false;

  constructor(
    private router: Router,
    private http: Http,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.thanks = this.dataService.getThanks();
  }

  onSubmit(): void {
    // Craft Post Request
    this.dataService.setText(this.text);
    let data = JSON.stringify({ "review" : this.text });
    this.dataService.addSubmission(data);
  }
}
