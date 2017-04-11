import { Injectable ,Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';


import { Http, Response, Headers, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/map';
import { Observable, BehaviorSubject } from 'rxjs';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import {  FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Router, ActivatedRoute, Params } from '@angular/router';



@Injectable()
export class QuestionsService {


  constructor(private router: Router ,@Inject(FirebaseApp) public firebaseApp: any) {

   }
  quesURL;
  passtheque=0;
   askquestion(number , sub) :  Observable<any> {
     const storageRef = this.firebaseApp.storage().ref().child(sub+'('+number+').jpg');
     storageRef.getDownloadURL()
      .then(url => {
          console.log(url)

         return this.quesURL=url

        });
      return this.quesURL




   }
   part2(number , sub) : Observable<any>{
     this.askquestion(number , sub)
     .subscribe(data => {

       data.getDownloadURL()
       .then(url => {
         console.log(url)

         return this.quesURL=url

       });
     })
     return this.quesURL;
   }
 }
