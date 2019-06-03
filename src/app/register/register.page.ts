import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Register } from './register';
import { RegisterResponse } from './register-response';
import { PopoverController, ToastController } from '@ionic/angular';
import { WrongRegisterComponent } from './wrong-register/wrong-register.component';
import { ErrorComponent } from '../components/error/error.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  typepass: string = "password";
  typeeye: string = "eye";
  clickp: number = 0;
  accessToken: string = "";

  constructor(private storage: Storage,
    private registerService: RegisterService,
    private router: Router,
    private popoverCtrl: PopoverController,
    private toastController: ToastController) { }

  ngOnInit() {
    this.storage.get('BuJoToken').then(
      (val) => {
        this.accessToken=val;
        if (this.accessToken != null) {
          // Redirecionar, pois o usuário já possui accessToken
          this.router.navigate(['daily-log']);
        }
        
      }
    ).catch(
      () => {
        console.log("token apagado");
      }
    );
  }

  showPass() {
    if (this.clickp==0) {
      this.typepass="text";
      this.typeeye="eye-off";
      this.clickp=1;
    } else {
      this.typepass="password";
      this.typeeye="eye";
      this.clickp=0;
    }
  }

  async wrongReg() {
    // const popover = await this.popoverCtrl.create({
    //   component: WrongRegisterComponent,
    //   animated: true,
    //   showBackdrop: true,
    //   componentProps: { popoverCtrl: this.popoverCtrl }
    // });
    // await popover.present();
    const toast = await this.toastController.create({
      message: "Email deve ser único",
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

  login() {
    this.router.navigate(['login']);
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
          this.storage.remove('BuJoToken').then(
            () => {
              this.storage.set('BuJoToken',this.accessToken);
              if (this.accessToken != null) {
                // Redirecionar, pois o usuário já possui accessToken
                this.router.navigate(['daily-log']);
              }
            }
          );
        
        } else if (res.Status == 500) { // Cadastro errado
          // Cadastro errado
          // Email deve ser único
          this.storage.remove('BuJoToken').then(
            () => {
              console.log("token apagado");
            }
          );
          this.wrongReg();
          
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
    ).catch (
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