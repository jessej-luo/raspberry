import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {DataService} from '../services/submissiontext.service'

@Component({
  selector: 'feedback',
  templateUrl: 'feedback.component.html'
})

export class Feedback {

  constructor(
    private router: Router,
    public dataService: DataService,
    private http: Http
  ) { }

  private apiSubUrl = 'http://127.0.0.1:5000/api/feedback';
  text = this.dataService.getText();
  prediction = this.dataService.getPredict();
  data = {
    "review" : this.text,
    "prediction" : this.prediction.prediction,
    "probability" : this.prediction.probability
  }
  link = ['/submission'];
  headers = new Headers({
    'Content-Type' : 'application/json'
  });

  feedback_sub(value) {
    this.data['feedback'] = value;
    let data = JSON.stringify(this.data);
    console.log(data);
    this.http
      .post(this.apiSubUrl, this.data, {headers: this.headers})
      .toPromise()
      .then(res => {
        this.router.navigate(this.link);
      })
      .catch(this.handleError);
    }

  onClickResub() {
  		this.router.navigate(this.link);
    }

  onClickCorrect() {
    this.feedback_sub("Correct");
  }

  onClickIncorrect() {
    this.feedback_sub("Incorrect");
  }

}
