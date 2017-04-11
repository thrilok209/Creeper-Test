import { Injectable ,Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';


import { Http, Response, Headers, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/map';
import { Observable, BehaviorSubject } from 'rxjs';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Router, ActivatedRoute, Params } from '@angular/router';


@Injectable()
export class QuestionsfromfirebaseService {

  constructor(private router: Router ,@Inject(FirebaseApp) public firebaseApp: any) {

   }
   quesnum
   quesnumbers=[]
   queschemnumbers=[]
   quesPHYnumbers=[]
   quesMATHnumbers=[]
   phyURL=[]
   chemURL=[]
   mathURL=[]

   takingquenumURLfromfirebase(){
     for(let j=0 ; j<=30 && this.quesnumbers.length<=30 ; j++ ){
       let sub="phy"
       if(this.quesnumbers.length>=0 && this.quesnumbers.length<=10){
         this.genraterandomquenum("phy")
         sub="phy"
         console.log("near sub")
        //  const storageRef = this.firebaseApp.storage().ref().child(sub+'/'+sub+'('+this.quesnum+').png');
        //  storageRef.getDownloadURL()
        //   .then(url => {
        //       // console.log(url)
        //       console.log("near url")
        //      return this.phyURL.push(url)
         //
        //     });
       }
       if(this.quesnumbers.length>=10 && this.quesnumbers.length<=20){
         this.genraterandomquenum("math")
         sub="math"
        //  const storageRef = this.firebaseApp.storage().ref().child(sub+'/'+sub+'('+this.quesnum+').png');
        //  storageRef.getDownloadURL()
        //   .then(url => {
        //       console.log(url)
         //
        //      return this.mathURL.push(url)
         //
        //     });
       }
       if(this.quesnumbers.length>=20 && this.quesnumbers.length<=30){
         this.genraterandomquenum("chem")
         sub="chem"
        //  const storageRef = this.firebaseApp.storage().ref().child(sub+'/'+sub+'('+this.quesnum+').png');
        //  storageRef.getDownloadURL()
        //   .then(url => {
        //       console.log(url)
         //
        //      return this.chemURL.push(url)
         //
        //     });
       }
     }
     for(let i = 0 ; i < 10 ; i++){
       let que = this.quesPHYnumbers[i]
       console.log(que)
       this.genrateURL("phy" , que)

     }

     for(let i = 0 ; i < 10 ; i++){
       let que = this.queschemnumbers[i]
       console.log(que)
       this.genrateURL("chem" , que)

     }
     for(let i = 0 ; i < 10 ; i++){
       let que = this.quesMATHnumbers[i]
       console.log(que)
       this.genrateURL("math" , que)

     }

    // console.log("final URls")
    // console.log("phy=   "+this.phyURL)
    // console.log("math=   "+this.mathURL)
    // console.log("chem=   "+this.chemURL)

    //  const storageRef = this.firebaseApp.storage().ref().child(sub+'('+this.quesnum+').jpg');
    //  storageRef.getDownloadURL()
    //   .then(url => {
    //       console.log(url)
     //
    //      return this.quesURL=url
     //
    //     });
      // return this.quesURL


   }
   genrateURL(sub ,num){
     console.log(num)
     const storageRef = this.firebaseApp.storage().ref().child(sub+'/'+sub+'('+num+').png');
     storageRef.getDownloadURL()
      .then(url => {
          // console.log(url)
          // console.log("near url")
          if(sub=="phy"){
            this.phyURL.push(url)
            // console.log(this.phyURL)

          }else if(sub=="chem")
          {
            this.chemURL.push(url)
            // console.log(this.chemURL)
          }
          else{
            this.mathURL.push(url)
            // console.log(this.mathURL)
          }

        });
   }
   genraterandomquenum(sub){
     let Y = Math.floor((Math.random() * 10) + 1);
     let count=0;
     if(sub=="phy"){
       for(let i = 0 ; i<this.quesPHYnumbers.length ; i++){
         // console.log("inside loop")
         if(this.quesPHYnumbers[i] == Y){
           count++
         }
       }

       if(count>=1){
         if(this.quesPHYnumbers.length<10){
           this.genraterandomquenum(sub);;

         }
         if(this.quesPHYnumbers.length>=10){
           console.log("max questions")

         }
       }
       if(count==0){
         this.quesnum=Y
         this.quesPHYnumbers.push(Y)
         this.quesnumbers.push(Y)
         console.log(this.quesPHYnumbers)
       }
     }
     if(sub=="math"){
       for(let i = 0 ; i<this.quesMATHnumbers.length ; i++){
         // console.log("inside loop")
         if(this.quesMATHnumbers[i] == Y){
           count++
         }
       }

       if(count>=1){
         if(this.quesMATHnumbers.length<10){
           this.genraterandomquenum(sub);;

         }
         if(this.quesMATHnumbers.length>=10){
           console.log("max questions")

         }
       }
       if(count==0){
         this.quesnum=Y
         this.quesMATHnumbers.push(Y)
          this.quesnumbers.push(Y)
       }
       console.log(this.quesMATHnumbers)
     }
     if(sub=="chem"){
       for(let i = 0 ; i<this.queschemnumbers.length ; i++){
         // console.log("inside loop")
         if(this.queschemnumbers[i] == Y){
           count++
         }
       }

       if(count>=1){
         if(this.queschemnumbers.length<10){
           this.genraterandomquenum(sub);;

         }
         if(this.queschemnumbers.length>=10){
           console.log("max questions")

         }
       }
       if(count==0){
         this.quesnum=Y
         this.queschemnumbers.push(Y)
          this.quesnumbers.push(Y)
       }
       console.log(this.queschemnumbers)
     }


   }

}
