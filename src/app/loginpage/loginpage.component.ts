import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {


  constructor(public af: AngularFire, private router: Router) { }
  ngOnInit() {
    // console.log("inside loginpage")
  }
  loginG() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  loginA(user , passsword) {
    // console.log('Inside Login');
    this.af.auth.login({

      email: user,
      password:'password',
    },
    {
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
  })
  .then(data =>{ console.log(data);
    // this.navCtrl.push(TabsPage);
  });

  this.af.auth.subscribe(auth =>{
  // console.log(auth);
  if(auth!= null){
      this.router.navigate(['/testsel']);

    }
    else{
      alert("Email or Password is wrong")
    }
});
  }

}
