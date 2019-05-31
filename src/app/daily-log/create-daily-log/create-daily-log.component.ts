import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, ToastController } from '@ionic/angular';
import { DailyLogService } from '../daily-log.service';
import { DailyLog } from '../daily-log';
import { DailyLogResponse } from '../daily-log-response';

@Component({
  selector: 'app-create-daily-log',
  templateUrl: './create-daily-log.component.html',
  styleUrls: ['./create-daily-log.component.scss'],
})

export class CreateDailyLogComponent implements OnInit {

  popover: PopoverController;
  log: DailyLog;
  toastCtrl: ToastController;
  check: Boolean;
  
  constructor(private dailyLogService: DailyLogService, navParams: NavParams, public toastController: ToastController) { 
    this.popover = navParams.get('popoverController');
    this.log = { key: "", date: "", signifier: "", text: "", status: ""};
    this.log.date = navParams.get('date');
  }

  ngOnInit() {
  }

  async toastCreateDailyLog(response:DailyLogResponse) {
    if(response.Status==201){
      const toast = await this.toastController.create({
        message: 'Salvo com sucesso',
        duration: 2000
      });

      toast.present();
    }
    else{
      const toast = await this.toastController.create({
        message: 'Não salvo',
        duration: 2000
      });
      
      toast.present();
    }
  }

  async createDailyLog(log: DailyLog){
    // console.log(log);
    this.dailyLogService.createDailyLogService(log).toPromise().then(
      (obj) => {
        var response = new DailyLogResponse();
        Object.assign(response,obj);
        console.log(response.Status);
        // this.toastCreateDailyLog(response);
        this.check = true;
      }

    ).catch(
      () => {
        this.check = false;
        // console.log('check false');
      }
    );
    if(this.check==true){
      const toast = await this.toastController.create({
        message: 'Salvo com sucesso',
        duration: 2000
      });

      toast.present();
    }
    else{
      const toast = await this.toastController.create({
        message: 'Não salvo',
        duration: 2000
      });
      
      toast.present();
    }
 
    this.popover.dismiss();
  }

  dismiss() {
    this.popover.dismiss();
  }

}