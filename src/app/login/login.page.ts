import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginResponse } from './login-response';
import { PopoverController, ToastController } from '@ionic/angular';
import { WrongLoginComponent } from './wrong-login/wrong-login.component';
import { ErrorComponent } from '../components/error/error.component';

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
    private popoverCtrl: PopoverController,
    private toastController: ToastController) { }

  ngOnInit() {
    
    this.storage.get('BuJoToken').then(
      (val) => {
        this.accessToken=val;
        console.log(val);
        // Redirecionar, pois o usuário já possui accessToken
        if (this.accessToken != null) {
          this.router.navigate(['home']);
        }
        
      }
    );
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
    // const popover = await this.popoverCtrl.create({
    //   component: WrongLoginComponent,
    //   animated: true,
    //   showBackdrop: true,
    //   componentProps: { popoverCtrl: this.popoverCtrl }
    // });
    // await popover.present();
    const toast = await this.toastController.create({
      message: "Cadastro não existe ou senha incorreta",
      duration: 2000
    });
    toast.present();
  }

  async error() {
    // const popover = await this.popoverCtrl.create({
    //   component: ErrorComponent,
    //   animated: true,
    //   showBackdrop: true,
    //   componentProps: { popoverCtrl: this.popoverCtrl }
    // });
    // await popover.present();
    const toast = await this.toastController.create({
      message: "Erro no servidor, tente novamente mais tarde",
      duration: 2000
    });
    toast.present();
  }

  register() {
    this.router.navigate(['register']);
  }

  login(form){

    let login = new Login(form.value);
    this.loginService.logUser(login).toPromise().then(
      (obj) => {
        var res = new LoginResponse();
        Object.assign(res,obj);

        // Login correto
        if (res.Status == 200) {
          this.accessToken = res.AccessToken;
          this.storage.remove('BuJoToken').then(
            () => {
              this.storage.set('BuJoToken',this.accessToken);
              console.log(this.accessToken);
              if (this.accessToken != null) {
                // Redirecionar, pois o usuário já possui accessToken
                this.router.navigate(['home']);
              }
            }
          );
          
        } else if (res.Status == 400) { // Login errado
          // Login errado
          // Cadastro não existe ou senha incorreta
          this.storage.remove('BuJoToken').then(
            () => {
              console.log("token apagado");
            }
          );
          this.wrongLog();
          
        } else {
          // Erro
          this.storage.remove('BuJoToken').then(
            () => {
              console.log("token apagado");
            }
          );
          this.error();
        }
      }
    ).catch(
      () => {
        // Erro
        this.storage.remove('BuJoToken').then(
          () => {
            console.log("token apagado");
          }
        );
        this.error();
      }
    )

  }

}
