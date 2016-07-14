import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TextService} from '../services/submissiontext.service'

@Component({
  selector: 'feedback',
  templateUrl: 'feedback.component.html'
})
export class Feedback {

  text = this.textService.getText();

  constructor(
    private router: Router,
    public textService: TextService
  ) { }

  onClick() {
    let link = ['/submission'];
		this.router.navigate(link);
  }
}
