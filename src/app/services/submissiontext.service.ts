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
    private feedbackUrl = 'http://127.0.0.1:5000/api/feedback';
    text: any;
    data: any;
    thanks = false;

    constructor(
        private router: Router,
        private http: Http
    ) { }

    getThanks() {
        return this.thanks;
    }
    getText() {
        return this.text;
    }

    setText(text) {
        this.text = text;
    }

    getPredict() {
        return this.data;
    }

    addSubmission(data) {
        this.thanks = false;
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

    addFeedback(value) {
        this.thanks = true;
        var data = {
            "review" : this.text,
            "prediction" : this.data.prediction,
            "probability" : this.data.probability
          }

        let headers = new Headers({
            'Content-Type' : 'application/json'
          });

        data['feedback'] = value;
        let submitted_data = JSON.stringify(data);
        console.log(data);
        this.http
          .post(this.feedbackUrl, submitted_data, {headers: headers})
          .toPromise()
          .then(res => {
            this.router.navigate(['/submission']);
          })
          .catch(this.handleError);
    }
}
