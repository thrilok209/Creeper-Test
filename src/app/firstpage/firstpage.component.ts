import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) {}
  homepage=false;

  movetologin(){
    this.homepage=true;
    this.router.navigate(['/login']);
  }
  
  ngOnInit() {
  }

}
