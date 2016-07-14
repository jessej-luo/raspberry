import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';


@Component({
  selector: 'submission-form',
  templateUrl: 'submission.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class Submission {
  text: any;
  constructor(
    private router:Router
  ) { }

  onSubmit() {
    //post the text to the database
    console.log(this.text);
  }
}
