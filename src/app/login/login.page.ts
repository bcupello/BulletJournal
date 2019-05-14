import { Component, OnInit, ViewChild } from '@angular/core';

import { LoginService } from './login.service';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  accessToken: string = "";
  typepass: string = "password";
  clickp: number = 0;

  constructor(private storage: Storage,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.storage.get('BuJoToken').then(
      (val) => {
        this.accessToken=val;
        // Redirecionar, pois o usuário já possui accessToken
        this.router.navigate(['home']);
      }
    )
  }

  showPass() {
    if (this.clickp==0) {
      this.typepass="text";
      this.clickp=1;
    } else {
      this.typepass="password";
      this.clickp=0;
    }
  }

  login(form){
     this.accessToken=this.loginService.retToken(form);
     this.storage.set('BuJoToken',this.accessToken);
     // Redirecionar, pois o usuário já possui accessToken
     this.router.navigate(['home']);
  }

}
