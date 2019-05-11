import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, ToastController } from '@ionic/angular';
import { DailyLogService } from '../daily-log.service';
import { DailyLog } from 'src/app/daily-log';

@Component({
  selector: 'app-create-daily-log',
  templateUrl: './create-daily-log.component.html',
  styleUrls: ['./create-daily-log.component.scss'],
})


export class CreateDailyLogComponent implements OnInit {

  popover: PopoverController;
  log: DailyLog;
  toastCtrl: ToastController;
  

  constructor(private dailyLogService: DailyLogService, navParams: NavParams, public toastController: ToastController) { 
    this.popover = navParams.get('popoverController');
    this.log = { date: "2019-05-11", signifier: "", text: "" };
    
    
  }


  ngOnInit() {
  }

  async createDailyLog(log: DailyLog){

    

    

    const check:boolean = this.dailyLogService.createDailyLogService(log);
    if(check==true){
      const toast = await this.toastController.create({
        message: 'Salvo com sucesso',
        duration: 2000
      });

      toast.present();
    }
    else {
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
