import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, ToastController } from '@ionic/angular';
import { DailyLogService } from '../daily-log.service';
import { DailyLog } from '../daily-log';

@Component({
  selector: 'app-edit-daily-log',
  templateUrl: './edit-daily-log.component.html',
  styleUrls: ['./edit-daily-log.component.scss'],
})

export class EditDailyLogComponent implements OnInit {

  popover: PopoverController;
  originalLog: DailyLog;
  newLog: DailyLog;
  toastCtrl: ToastController;
  postponeClicked: number = 0;

  constructor(private dailyLogService: DailyLogService, navParams: NavParams, public toastController: ToastController) { 
    this.popover = navParams.get('popoverController');
    this.originalLog = navParams.get('currentLog');
    this.newLog = { 
      key: String(this.originalLog.key), 
      date: String(this.originalLog.date), 
      signifier: String(this.originalLog.signifier), 
      text: String(this.originalLog.text), 
      status: String(this.originalLog.status)
    };
  }

  ngOnInit() {
  }

  async editDailyLog(log: DailyLog){

    const check:boolean = this.dailyLogService.editDailyLogService(log);
    if(check==true){
      const toast = await this.toastController.create({
        message: 'Editado com sucesso',
        duration: 2000
      });

      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Edição não realizada',
        duration: 2000
      });
      
      toast.present();
    }
    this.popover.dismiss();
  }

  dismiss() {
    this.popover.dismiss();
  }

  async toDoneDailyLog(log: DailyLog){

    const check:boolean = this.dailyLogService.toDoneDailyLogService(log);
    if(check==true){
      const toast = await this.toastController.create({
        message: 'Tarefa marcada como feita',
        duration: 2000
      });

      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Edição não realizada',
        duration: 2000
      });
      
      toast.present();
    }
    this.popover.dismiss();
  }

  async toBeDoneDailyLog(log: DailyLog){

    const check:boolean = this.dailyLogService.toBeDoneDailyLogService(log);
    if(check==true){
      const toast = await this.toastController.create({
        message: 'Tarefa marcada como a fazer',
        duration: 2000
      });

      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Edição não realizada',
        duration: 2000
      });
      
      toast.present();
    }
    this.popover.dismiss();
  }

  async toNotDoingDailyLog(log: DailyLog){

    const check:boolean = this.dailyLogService.toNotDoingDailyLogService(log);
    if(check==true){
      const toast = await this.toastController.create({
        message: 'Tarefa marcada como descartada',
        duration: 2000
      });

      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Edição não realizada',
        duration: 2000
      });
      
      toast.present();
    }
    this.popover.dismiss();
  }

  async toDoingAgainDailyLog(log: DailyLog){

    const check:boolean = this.dailyLogService.toDoingAgainDailyLogService(log);
    if(check==true){
      const toast = await this.toastController.create({
        message: 'Tarefa marcada como a fazer',
        duration: 2000
      });

      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Edição não realizada',
        duration: 2000
      });
      
      toast.present();
    }
    this.popover.dismiss();
  }

  async postponeDailyLog(log: DailyLog){

    const check:boolean = this.dailyLogService.postponeDailyLogService(log);
    if(check==true){
      const toast = await this.toastController.create({
        message: 'Tarefa adiada',
        duration: 2000
      });

      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Edição não realizada',
        duration: 2000
      });
      
      toast.present();
    }
    this.popover.dismiss();
  }

  async toFutureLogDailyLog(log: DailyLog){

    const check:boolean = this.dailyLogService.toFutureLogDailyLogService(log);
    if(check==true){
      const toast = await this.toastController.create({
        message: 'Tarefa mandada para o Future Log',
        duration: 2000
      });

      toast.present();
    }
    else {
      const toast = await this.toastController.create({
        message: 'Edição não realizada',
        duration: 2000
      });
      
      toast.present();
    }
    this.popover.dismiss();
  }


}
