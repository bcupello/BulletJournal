import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Register } from './register';
import { RegisterResponse } from './register-response';
import { ErrorComponent } from '../error/error.component';
import { PopoverController } from '@ionic/angular';
import { WrongRegisterComponent } from './wrong-register/wrong-register.component';

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
    private router: Router,
    private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.storage.get('BuJoToken').then(
      (val) => {
        this.accessToken=val;
        if (this.accessToken != '') {
          // Redirecionar, pois o usuário já possui accessToken
          this.router.navigate(['home']);
        }
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

  async wrongReg() {
    const popover = await this.popoverCtrl.create({
      component: WrongRegisterComponent,
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

  register(form) {
    let register = new Register(form.value);
    this.registerService.regUser(register).toPromise().then(
      (obj) => {
        var res = new RegisterResponse();
        Object.assign(res,obj);
        
        // Cadastro correto
        if (res.Status == 201) {
          this.accessToken = res.User.Access_token;
          this.storage.set('BuJoToken',this.accessToken);
          if (this.accessToken != '') {
            // Redirecionar, pois o usuário já possui accessToken
            this.router.navigate(['home']);
          }
        
        } else if (res.Status == 500) { // Cadastro errado
          // Cadastro errado
          // Email deve ser único
          this.wrongReg();
          
        } else {
          // Erro
          console.log('dentro do else');
          this.error();
        }
      }
    ).catch (
      () => {
        // Erro
        this.error();
      }
    )
    
  }
  
}