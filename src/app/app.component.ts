import { Component , OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public af: AngularFire, private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
