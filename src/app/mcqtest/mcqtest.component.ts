import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';

import {QuestionsService} from '../questions.service';

import {QuestionsfromfirebaseService} from '../questionsfromfirebase.service';


import { Router, ActivatedRoute, Params } from '@angular/router';

import { Injectable ,Inject } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

import { DomSanitizer , SafeResourceUrl  } from '@angular/platform-browser';

import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mcqtest',
  templateUrl: './mcqtest.component.html',
  styleUrls: ['./mcqtest.component.css']
})
export class McqtestComponent implements OnInit {


  myFood = 'lamb';
  stselectedOpt;
  usersans = [];
  checkedoptA= false;
  checkedoptB = false;
  constructor(private sanitizer: DomSanitizer, private router: Router , public questionsservice:QuestionsService ,public questionsfromfirebaseService:QuestionsfromfirebaseService,@Inject(FirebaseApp) public firebaseApp: any) {
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t=>this.ticks = t);


  }
  imgURL="https://firebasestorage.googleapis.com/v0/b/creeper-fa765.appspot.com/o/phy%2Fphy(5).png?alt=media&token=f9297064-9e23-44b3-adc7-925eccd95d80";

  quesnumbers = [0];
  chemquenum = [];
  phyquenum = [];
  mathsquenum = [];
  mathsnum = [];
  chemnum= [];
  phynum = [];
  mathsURL=[];
  chemURL=[];
  physURL =[];
  mathsans= [];
  chemans = [];
  phyans = [];
  uphyans = [];
  umathsans = [];
  uchemans = [];
  quenum;
  zaq;
  ticks =0;
  preloader2=true;
  img:any;
  correctans=["a","b","c","d","a","b","c","d","a","b"]
  ngOnInit() {

    console.log("phy ==   ")
    console.log(this.questionsfromfirebaseService.phyURL)
    this.physURL=this.questionsfromfirebaseService.phyURL
    console.log("chem ==   ")
    console.log(this.questionsfromfirebaseService.phyURL)
    console.log("math ==    ")
    console.log(this.questionsfromfirebaseService.phyURL)
    this.photoURL(this.physURL[0]);
    // this.getSantizeUrl(this.physURL[0])
    this.imgURL='"'+this.physURL[0]+'"'
    this.quenum=1
    console.log(this.imgURL)
    this.img= this.sanitizer.bypassSecurityTrustUrl(this.physURL[0]);
  }
  startingexam(){
    this.questionsfromfirebaseService.takingquenumURLfromfirebase()
  }

  selectedque(index , sub){
      this.photoURL(this.physURL[index])
      this.img= this.sanitizer.bypassSecurityTrustUrl(this.physURL[index]);
      this.imgURL=this.physURL[index];
    this.quenum=index+1
    // this.clearopts()
    this.checkoptsselected()
  }
  photoURL(x) {
    // console.log(this.sanitizer.bypassSecurityTrustUrl(x))
    // this.img= this.sanitizer.bypassSecurityTrustUrl(x);
  }
  selectedOpt(option){
    console.log(option)
    // console.log(this.stselectedOpt)
    this.usersans[this.quenum-1]=option;
    console.log(this.usersans)
    console.log(this.usersans[6])
  }

  nextQue(){

  }
  checkoptsselected(){
    if(this.usersans[this.quenum-1]!=undefined){
      this.stselectedOpt=this.usersans[this.quenum-1]

    }else{
    this.clearopts()
    }
  }
  clearopts(){
    console.log("clearopts")

    this.stselectedOpt="";
  }
  correctingque(){
    let count=0;
    for(let i =0 ; i<this.correctans.length;i++){
      console.log(this.correctans[i])
      if(this.correctans[i]==this.usersans[i]){
        count++
      }
      if(this.correctans[i]!=this.usersans[i]){
        if(this.usersans[i]!=undefined){
          count--
        }
      }
    }
    alert("your score is: "+count)
  }
// public getSantizeUrl(url : string) {
//     return this.sanitizer.bypassSecurityTrustUrl(url);
//
// }
  // firstque(){
  //   let Z = Math.floor((Math.random() * 2) + 1);
  //   this.askquestion(Z , "home" )
  //
  //
  //
  //
  // }
  // totalque(){
  //   for(let i = 0 ; i<30 ; i++){
  //     this.genraterandomquenum()
  //     this.askquestion( this.quesnum , "maths");
  //   }
  //   for(let i = 0 ; i<30 ; i++){
  //     this.askquestion(i , "phy");
  //   }
  //   for(let i = 0 ; i<30 ; i++){
  //     this.askquestion(i , "chem");
  //   }
  // }
  // askquestion(number , sub ) : Observable<any> {
  //   const storageRef = this.firebaseApp.storage().ref().child(sub+'('+number+').jpg');
  //   storageRef.getDownloadURL()
  //    .then(url => {
  //       //  console.log(url)
  //
  //
  //        this.zaq=url
  //        console.log(url)
  //        if(sub=="maths"){
  //          this.mathsURL.push(url)
  //        }
  //        if(sub=="chem"){
  //          this.chemURL.push(url)
  //        }
  //        if(sub=="phy"){
  //          this.phyURL.push(url)
  //        }
  //
  //       //  if(times == 1){
  //       //    console.log("inside askquestion")
  //       //    this.imgURL = this.zaq
  //       //   //  this.router.navigate(['/mcqpage']);
  //       //    console.log(this.zaq)
  //       //    //  this.preloader2=false;
  //       //   //  return this.imgURL
  //       //  }
  //      });
  //      return this.imgURL
  //  }
  //
  //
  //
  //
  //
  // genraterandomquenum(){
  //   let Y = Math.floor((Math.random() * 30) + 1);
  //   let count=0;
  //   for(let i = 0 ; i<this.quesnumbers.length ; i++){
  //     // console.log("inside loop")
  //     if(this.quesnumbers[i] == Y){
  //       count++
  //     }
  //   }
  //   if(count>=1){
  //     if(this.quesnumbers.length<=30){
  //       this.genraterandomquenum();;
  //
  //     }
  //     if(this.quesnumbers.length>30){
  //       console.log("max questions")
  //
  //     }
  //   }
  //   if(count==0){
  //     this.quesnum=Y
  //     this.quesnumbers.push(Y)
  //   }
  //   console.log(this.quesnumbers)
  //
  // }


}
