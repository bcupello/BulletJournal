import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginResponse } from './login-response';
import { PopoverController } from '@ionic/angular';
import { WrongLoginComponent } from './wrong-login/wrong-login.component';
import { ErrorComponent } from '../error/error.component';

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
    private router: Router,
    private popoverCtrl: PopoverController) { }

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

  async wrongLog() {
    const popover = await this.popoverCtrl.create({
      component: WrongLoginComponent,
      animated: true,
      showBackdrop: true,
      componentProps: { popoverCtrl: this.popoverCtrl }
    });
    await popover.present();
  }

  async error() {
    const popover = await this.popoverCtrl.create({
      component: ErrorComponent,
      animated: true,
      showBackdrop: true,
      componentProps: { popoverCtrl: this.popoverCtrl }
    });
    await popover.present();
  }

  login(form){
    let login = new Login(form.value);
    let flag = 0;
    this.loginService.logUser(login).subscribe(
      (obj) => {
        var res = new LoginResponse();
        Object.assign(res,obj);
        flag = 1;

        // Login correto
        if (res.Status == 200) {
          this.accessToken = res.AccessToken;
          this.storage.set('BuJoToken',this.accessToken);
          // Redirecionar, pois o usuário já possui accessToken
          //this.router.navigate(['home']);
          
        } else if (res.Status == 400) { // Login errado
          // Login errado
          // Cadastro não existe ou senha incorreta
          this.wrongLog();
          
        } else {
          // Erro
          this.error();
        }
      }
    );
    // Erro
    if (flag == 0) {
      this.error();
    }
  }

}
