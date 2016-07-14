import { provideRouter, RouterConfig }  from '@angular/router';
import {Submission} from '../app/components/submission.component';
import {Feedback} from '../app/components/feedback.component';

const routes: RouterConfig = [
  {
  	path: '',
  	redirectTo: 'submission',
  	pathMatch: 'full'
  },
  {
    path: 'submission',
    component: Submission
  },
  // {
  //   path: 'feedback',
  //   component: Feedback
  // }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
