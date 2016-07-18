import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {DataService} from '../services/submissiontext.service'

@Component({
  selector: 'feedback',
  templateUrl: 'feedback.component.html'
})

export class Feedback {

  prediction: any;
  text: any;

  constructor(
    private router: Router,
    public dataService: DataService,
    private http: Http
  ) { }

  ngOnInit() {
    this.prediction = this.dataService.getPredict();
    this.text = this.dataService.getText();
  }

  onClickResub() {
    let link = ['/submission']
		this.router.navigate(link);
  }

  onClickCorrect() {
    this.dataService.addFeedback("Correct");
  }

  onClickIncorrect() {
    this.dataService.addFeedback("Incorrect");
  }

}
