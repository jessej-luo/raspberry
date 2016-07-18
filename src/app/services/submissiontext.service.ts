import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class DataService {

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private submissionUrl = 'http://127.0.0.1:5000/api/results';
    private feedBack = 'http://127.0.0.1:5000/api/feedback';
    text: any;
    data: any;

    constructor(
        private router: Router,
        private http: Http
    ) { }

    getText() {
        return this.text;
    }

    getPredict() {
        return this.data;
    }

    addSubmission(data) {
        this.text = data.review;

        let headers = new Headers({
        'Content-Type' : 'application/json'
        });

        this.http
          .post(this.submissionUrl, data, {headers: headers})
          .toPromise()
          .then(res => {
            this.data = res.json();
            this.router.navigate(['/feedback']);
          })
          .catch(this.handleError);
     }
}
