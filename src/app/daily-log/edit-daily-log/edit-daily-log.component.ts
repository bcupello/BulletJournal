import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, ToastController } from '@ionic/angular';
import { DailyLogService } from '../daily-log.service';
import { DailyLog } from '../daily-log';
import { DailyLogResponse } from '../daily-log-response';

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

  async toastEditDailyLog(response:DailyLogResponse) {
    if (response.Status==200) {
      const toast = await this.toastController.create({
        message: 'Editado com sucesso',
        duration: 2000
      });

      toast.present();
    } else {
      this.toastEdicaoNaoRealizada();
    }
    console.log(response);
  }

  async editDailyLog(log: DailyLog){

    this.dailyLogService.editDailyLogService(log).toPromise().then(
      (obj) => {
        var response = new DailyLogResponse();
        Object.assign(response,obj);
        this.toastEditDailyLog(response);
      }
    ).catch(
      () => {
        console.log("erro no servidor");
      }
    );
    
    this.popover.dismiss();
  }

  dismiss() {
    this.popover.dismiss();
  }

  async toastToDoneDailyLog(response:DailyLogResponse) {
    if (response.Status == 200) {
      const toast = await this.toastController.create({
        message: 'Tarefa marcada como feita',
        duration: 2000
      });

      toast.present();
    } else {
      this.toastEdicaoNaoRealizada();
    }
    console.log(response);
  }

  async toDoneDailyLog(log: DailyLog){

    this.dailyLogService.toDoneDailyLogService(log).toPromise().then(
      (obj) => {
        var response = new DailyLogResponse();
        Object.assign(response,obj);
        this.toastToDoneDailyLog(response);
      }
    ).catch(
      () => {
        console.log("erro no servidor");
      }
    );
    
    this.popover.dismiss();
  }

  async toastToBeDoneDailyLog(response: DailyLogResponse) {
    if (response.Status == 200) {
      const toast = await this.toastController.create({
        message: 'Tarefa marcada como a fazer',
        duration: 2000
      });

      toast.present();
    } else {
      this.toastEdicaoNaoRealizada();
    }
    console.log(response);
  }

  async toBeDoneDailyLog(log: DailyLog){

    this.dailyLogService.toBeDoneDailyLogService(log).toPromise().then(
      (obj) => {
        var response = new DailyLogResponse();
        Object.assign(response,obj);
        this.toastToBeDoneDailyLog(response);
      }
    ).catch(
      () => {
        console.log("erro no servidor");
      }
    );
    
    this.popover.dismiss();
  }

  async toastToNotDoingDailyLog(response: DailyLogResponse) {
    if (response.Status == 200) {
      const toast = await this.toastController.create({
        message: 'Tarefa marcada como descartada',
        duration: 2000
      });

      toast.present();
    } else {
      this.toastEdicaoNaoRealizada();
    }
    console.log(response);
  }

  async toNotDoingDailyLog(log: DailyLog){

    this.dailyLogService.toNotDoingDailyLogService(log).toPromise().then(
      (obj) => {
        var response = new DailyLogResponse();
        Object.assign(response,obj);
        this.toastToNotDoingDailyLog(response);
      }
    ).catch(
      () => {
        console.log("erro no servidor");
      }
    );

    this.popover.dismiss();
  }

  async toastToDoingAgainDailyLog(response: DailyLogResponse) {
    if (response.Status == 200) {
      const toast = await this.toastController.create({
        message: 'Tarefa marcada como a fazer',
        duration: 2000
      });

      toast.present();
    } else {
      this.toastEdicaoNaoRealizada();
    }
    console.log(response);
  }

  async toDoingAgainDailyLog(log: DailyLog){

    this.dailyLogService.toDoingAgainDailyLogService(log).toPromise().then(
      (obj) => {
        var response = new DailyLogResponse();
        Object.assign(response,obj);
        this.toastToDoingAgainDailyLog(response);
      }
    ).catch(
      () => {
        console.log("erro no servidor");
      }
    );

    this.popover.dismiss();
  }

  async toastPostponeDailyLog(response: DailyLogResponse) {
    if (response.Status == 201) {
      const toast = await this.toastController.create({
        message: 'Tarefa adiada',
        duration: 2000
      });

      toast.present();
    } else {
      this.toastEdicaoNaoRealizada();
    }
    console.log(response);
  }

  async postponeDailyLog(log: DailyLog){

    this.dailyLogService.postponeDailyLogService(log).toPromise().then(
      (obj) => {
        var response = new DailyLogResponse();
        Object.assign(response,obj);
        this.toastPostponeDailyLog(response);
      }
    ).catch(
      () => {
        console.log("erro no servidor");
      }
    );

    this.popover.dismiss();
  }

  async toastEdicaoNaoRealizada() {
    const toast = await this.toastController.create({
      message: 'Edição não realizada',
      duration: 2000
    });
    
    toast.present();
  }

  // async toFutureLogDailyLog(log: DailyLog){

  //   const check:boolean = this.dailyLogService.toFutureLogDailyLogService(log);
  //   if(check==true){
  //     const toast = await this.toastController.create({
  //       message: 'Tarefa mandada para o Future Log',
  //       duration: 2000
  //     });

  //     toast.present();
  //   }
  //   else {
  //     this.toastEdicaoNaoRealizada();
  //   }
  //   this.popover.dismiss();
  // }


}
