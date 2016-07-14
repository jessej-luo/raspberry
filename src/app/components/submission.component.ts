import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {TextService} from '../services/submissiontext.service'


@Component({
  selector: 'submission-form',
  templateUrl: 'submission.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class Submission {
  text: any;
  constructor(
    private router:Router,
    public textService: TextService
  ) { }

  onSubmit() {
    this.textService.setText(this.text);
    let link = ['/feedback'];
		this.router.navigate(link);
  }
}
