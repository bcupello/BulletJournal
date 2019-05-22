import { Component, OnInit } from '@angular/core';

import { RegisterService } from './register.service';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Register } from './register';
import { RegisterResponse } from './register-response';

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
        //this.router.navigate(['home']);
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

  register(form) {
    let register = new Register(form.value);
    this.registerService.regUser(register).subscribe(
      (obj) => {
        var res = new RegisterResponse();
        Object.assign(res,obj);
        if (res.Status > 199 && res.Status < 300) {
          this.accessToken = res.User.Access_token;
          //this.storage.set('BuJoToken',this.accessToken);
          // Redirecionar, pois o usuário já possui accessToken
          //this.router.navigate(['home']);
        } else {
          // Cadastro errado
        }
      }
    );
    
  }
  
}