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

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private apiSubUrl = 'http://127.0.0.1:5000/api/results'
  text: any;

  constructor(
    private router: Router,
    private http: Http,
    public dataService: DataService
  ) { }

  onSubmit(): void {
    let link = ['/feedback'];
    this.dataService.setText(this.text);
    // Craft Post Request
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });

    let data = JSON.stringify({ "review" : this.text });
    console.log(data);
    this.http
      .post(this.apiSubUrl, data, {headers: headers})
      .toPromise()
      .then(res => {
        this.dataService.setPredict(res.json())
        this.router.navigate(link);
      })
      .catch(this.handleError);
  }
}
