import { Component, OnInit } from '@angular/core';
import { DailyLogService } from './daily-log.service';
import { CreateDailyLogComponent } from './create-daily-log/create-daily-log.component';
import { EditDailyLogComponent } from './edit-daily-log/edit-daily-log.component';
import { PopoverController, ToastController } from '@ionic/angular';
import { DailyLog } from './daily-log';
import { DailyLogDay } from './daily-log-day';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { SelectionDays } from './selection-days';
import { ErrorComponent } from '../components/error/error.component';
import { DailyLogResponse } from './daily-log-response';
import { DailyLogM } from './daily-log-m';

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.page.html',
  styleUrls: ['./daily-log.page.scss']
})

export class DailyLogPage implements OnInit {

  // date:String;
  // signifier:String;
  // status:String;
  cont: number;
  day1:String;
  day2:String;
  selectionDays:SelectionDays;
  private accessToken:String = "";
  dailyLogDays:DailyLogDay[];

  constructor(private dailyLogService: DailyLogService,
    private popoverCtrl: PopoverController,
    private storage:Storage,
    private router:Router,
    private toastController: ToastController) {
      this.day1 = (new Date).toISOString().slice(0,10);
      this.day2 = (new Date).toISOString().slice(0,10);
      this.selectionDays = new SelectionDays();
      this.selectionDays.day1 = this.day1;
      this.selectionDays.day2 = this.day2;
    }

  ngOnInit() {

    this.storage.get('BuJoToken').then(
      (val) => {
        this.accessToken = val;
        console.log(this.accessToken);
        if (this.accessToken == null) {
          this.router.navigate(['login']);
        } else {
          console.log(this.selectionDays);
          this.cont = 0;
          this.requestDailylogdays(this.selectionDays);
          
        }
        
      }
    ).catch(
      () => {
        console.log("token apagado");
        this.router.navigate(['login']);
      }
    );
  }

  async error() {
    const toast = await this.toastController.create({
      message: "Erro no servidor, tente novamente mais tarde",
      duration: 2000
    });
    toast.present();
  }

  async wrongLog() {
    const toast = await this.toastController.create({
      message: "Cadastro não existe ou senha incorreta",
      duration: 2000
    });
    toast.present();
  }

  async createDailylog(Date:string) {
    const popover = await this.popoverCtrl.create({
        component: CreateDailyLogComponent,
        animated: true,
        showBackdrop: true,
        componentProps: { popoverController: this.popoverCtrl, date: Date }
    });
    return await popover.present();
  }

  async editDailylog(currentLog:DailyLogM) {
    const popover = await this.popoverCtrl.create({
        component: EditDailyLogComponent,
        animated: true,
        showBackdrop: true,
        componentProps: { popoverController: this.popoverCtrl, currentLog: new DailyLog(currentLog) }
    });
    return await popover.present();
  }

  async toastRequestDailylogdays(res: DailyLogResponse) {
    if (res.Status == 200) {
      this.dailyLogDays = res.DailyLogDays;
      console.log(this.dailyLogDays);
    } else if (res.Status == 400) {
      const toast = await this.toastController.create({
        message: 'Erro de autenticação de usuário',
        duration: 2000
      });

      toast.present();
      this.logout();

    } else {
      this.error();
    }
  }

  requestDailylogdays(selectionDays:SelectionDays){
    
    this.dailyLogService.getDailyLogDays(selectionDays).toPromise().then(
      (obj) => {
        let res = new DailyLogResponse();
        Object.assign(res,obj);
        console.log(res);
        this.toastRequestDailylogdays(res);
      }
    ).catch(
      () => {
        // this.error();
        console.log("erro na requisição de daily-log-days");
      }
    );

  }
    
  logout() {
    this.storage.remove('BuJoToken').then(
      () => {
        console.log("token apagado");
        this.router.navigate(['login']);
      }
    );
    
  }

}