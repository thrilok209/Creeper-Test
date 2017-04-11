import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { McqtestComponent } from '../mcqtest/mcqtest.component';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {QuestionsService} from '../questions.service';
import {QuestionsfromfirebaseService} from '../questionsfromfirebase.service';


import { Observable, BehaviorSubject } from 'rxjs';

import {SimpleTimer} from 'ng2-simple-timer';


@Component({
  selector: 'app-testselection',
  templateUrl: './testselection.component.html',
  styleUrls: ['./testselection.component.scss']
})
export class TestselectionComponent implements OnInit {
  preloader1=true
  ticks =0;
  startbtn=false;
  constructor(private st: SimpleTimer, private router: Router , public mcqstestComponent:McqtestComponent , public questionsfromfirebaseService:QuestionsfromfirebaseService) {
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t=>this.ticks = t);
   }
   counter: number = 6;
   counter2: number = 1;
   timerId: string;
  ngOnInit() {
    // console.log(this.timerId)

  }
  starttimer(){

    this.st.newTimer('1sec',1);
    this.timerId = this.st.subscribe('1sec', e => this.callback());
  }

  callback() {

    this.counter-=this.counter2
    console.log(this.counter)

    if(this.counter==0){
      this.st.unsubscribe(this.timerId);
			this.timerId = undefined;
      console.log("done")
      this.router.navigate(['/mcqpage']);

    }
}

  starttest(){
    // this.mcqstestComponent.firstque();

    // moment().format('YYYY [escaped] YYYY')
    // this.router.navigate(['/mcqpage']);

    this.startbtn=true;
    this.starttimer()
    this.mcqstestComponent.startingexam();
    this.preloader1=false;

  }

}
