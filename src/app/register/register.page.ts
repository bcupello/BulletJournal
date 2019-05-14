import { Component, OnInit } from '@angular/core';

import { RegisterService } from './register.service';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  typepass: string = "password";
  clickp: number = 0;
  accessToken: string = "";

  constructor(private storage: Storage,
    private registerService: RegisterService,
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

  register(form) {
    this.accessToken=this.registerService.retToken(form);
    this.storage.set('BuJoToken',this.accessToken);
    // Redirecionar, pois o usuário já possui accessToken
    this.router.navigate(['home']);
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
}