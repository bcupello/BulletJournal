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

@Component({
  selector: 'app-daily-log',
  templateUrl: './daily-log.page.html',
  styleUrls: ['./daily-log.page.scss']
})

export class DailyLogPage implements OnInit {

  date:String;
  signifier:String;
  status:String;
  day1:String = (new Date).toISOString().slice(0,10);
  day2:String = (new Date).toISOString().slice(0,10);
  selectionDays:SelectionDays = new SelectionDays({"day1": this.day1,"day2":this.day2});
  private accessToken:String = "";
  dailyLogDays:DailyLogDay[];

  constructor(private dailyLogService: DailyLogService,
    private popoverCtrl: PopoverController,
    private storage:Storage,
    private router:Router,
    private toastController: ToastController) {}

  ngOnInit() {
    this.dailyLogDays = this.dailyLogService.getDailyLogDays(this.selectionDays);
    this.storage.get('BuJoToken').then(
      (val) => {
        this.accessToken = val;
        console.log(this.accessToken);
        if (this.accessToken == null) {
          this.router.navigate(['login']);
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

  async createDailylog(date:string) {
    const popover = await this.popoverCtrl.create({
        component: CreateDailyLogComponent,
        animated: true,
        showBackdrop: true,
        componentProps: { popoverController: this.popoverCtrl, date: date }
    });
    return await popover.present();
  }

  async editDailylog(currentLog:DailyLog) {
    const popover = await this.popoverCtrl.create({
        component: EditDailyLogComponent,
        animated: true,
        showBackdrop: true,
        componentProps: { popoverController: this.popoverCtrl, currentLog: currentLog }
    });
    return await popover.present();
  }

  requestDailylogdays(selectionDays:SelectionDays){
    this.dailyLogDays = this.dailyLogService.getDailyLogDays(selectionDays);
    // const obj = await this.dailyLogService.getDailyLogDays(selectionDays);
    // obj.then((obj) => {
    //   console.log('teste');
    //     var res = new DailyLogResponse();
    //     Object.assign(res,obj);

    //     // Login correto
    //     if (res.Status == 200) {
    //       this.accessToken = res.NewAccessToken;
    //       this.storage.set('BuJoToken',this.accessToken);
    //       this.dailyLogDays = res.DailyLogDays;
          
    //     } else if (res.Status == 400) { // Login errado
    //       // Login errado
    //       // Cadastro não existe ou senha incorreta
    //       this.wrongLog();
          
    //     } else {
    //       // Erro
    //       this.error();
    //     }
    //   }
    // ).catch(
    //   () => {
    //     // Erro
    //     this.error();
    //   }
    // );
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