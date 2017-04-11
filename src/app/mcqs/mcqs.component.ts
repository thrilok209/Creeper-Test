import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';

import {QuestionsService} from '../questions.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Injectable ,Inject } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
// this.router.navigate(['/starttest']);


@Component({
  selector: 'app-mcqs',
  templateUrl: './mcqs.component.html',
  styleUrls: ['./mcqs.component.scss']
})
export class MCQsComponent implements OnInit {

  constructor(private router: Router , public questionsservice:QuestionsService ,@Inject(FirebaseApp) public firebaseApp: any) {
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t=>this.ticks = t);

  }
  imgURL;
  quesnumbers = [];
  quesnum;
  zaq;
  ticks =0;
  preloader2=true;
  ngOnInit(){
  }
  firstque(){
    // this.router.navigate(['/starttest']);
    let initialque = Math.floor((Math.random() * 2) + 1);
    console.log(initialque);
    this.quesnumbers.push(initialque)
    this.askquestion(initialque, "home" , 1)

        // this.preloader2=false;
    console.log(this.imgURL)




  }

  nextque(){
    this.genraterandomquenum()
    console.log("after gen")

    this.askquesURL(this.quesnum , 2)
    console.log("after ask")
    console.log(this.imgURL)

  }

  askquesURL(x,y)
  {
    this.askquestion(x, "home" , y)



  }

  askquestion(number , sub , times) : Observable<any> {
    const storageRef = this.firebaseApp.storage().ref().child(sub+'('+number+').jpg');
    storageRef.getDownloadURL()
     .then(url => {
         console.log(url)


         this.imgURL=url
         if(times == 1){
           console.log("inside askquestion")
           this.router.navigate(['/starttest']);
           //  this.preloader2=false;
          //  return this.imgURL
         }
       });
       return this.zaq





  }

  genraterandomquenum(){
    let Y = Math.floor((Math.random() * 10) + 1);
    let count=0;
    for(let i = 0 ; i<this.quesnumbers.length ; i++){
      // console.log("inside loop")
      if(this.quesnumbers[i] == Y){
        count++
      }
    }
    if(count>=1){
      if(this.quesnumbers.length<=9){
        this.genraterandomquenum()
      }
      if(this.quesnumbers.length>9){
        console.log("max questions")

      }
    }
    if(count==0){
      this.quesnum=Y
      this.quesnumbers.push(Y)
    }
    console.log(this.quesnumbers)

  }



}
