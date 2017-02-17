import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-auth-status',
  templateUrl: './auth-status.component.html',
  styleUrls: ['./auth-status.component.css']
})
export class AuthStatusComponent implements OnInit {

  constructor(public af: AngularFire) {

    this.af.auth.subscribe(auth => console.log(auth));



  }

  ngOnInit() {
  }

  login(from: string) {
    this.af.auth.login({
      provider: this.getProvider(from),
      method: AuthMethods.Popup
    });

  }



  private getProvider(from: string) {
    switch (from) {
      case 'twitter': return AuthProviders.Twitter;
      case 'facebook': return AuthProviders.Facebook;
      case 'google': return AuthProviders.Google;
    }
  }



}
